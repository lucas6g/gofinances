import React, { useCallback, useContext } from 'react'

import { HistoryCard } from '../../components/HistoryCard/HistoryCard'

import AsyncStorage from '@react-native-async-storage/async-storage'
import {
    Container,
    Header,
    ResumeContent,
    Title,
    ChartContainer,
    MonthSelect,
    MonthSelectButton,
    Icon,
    MonthName,
    LoadingContainer



} from './ResumeStyles'
import { ActivityIndicator } from 'react-native'
import { Transaction } from '../Dashboard/Dashboard'
import { useEffect, useState } from 'react'
import { categories } from '../../utils/categories'
import { amountFormater } from '../../utils/amountFormater'
import { useFocusEffect } from '@react-navigation/core'
import { VictoryPie } from 'victory-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useTheme } from 'styled-components'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { addMonths, subMonths, format } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR';
import { AuthContext } from '../../context/AuthContext'



export interface HistoryTrasaction {
    key: string
    title: string
    amount: number
    amountFormated: string
    color: string
    percent: string

}

export function Resume() {

    const { user } = useContext(AuthContext)


    const collectionKey = `@gofinances:transactions_user:${user.id}`

    const [historyTrasactions, setHistoryTransactions] = useState<HistoryTrasaction[]>([])
    const [currentDate, setCurrentDate] = useState(new Date())
    const [isLoading, setIsloading] = useState(false)
    const theme = useTheme()



    function findCategory(key: string) {
        const category = categories.find((category) => {
            return category.key === key
        })


        return category

    }
    function handleDateChange(action: 'prev' | 'next') {
        if (action === 'next') {
            const newDate = addMonths(currentDate, 1)
            setCurrentDate(newDate)
        } else {
            const newDate = subMonths(currentDate, 1)
            setCurrentDate(newDate)

        }

    }

    async function loadData() {
        setIsloading(true)

        const transactionsStr = await AsyncStorage.getItem(collectionKey)

        if (!transactionsStr) {
            setIsloading(false)
            return
        }
        const transactions: Transaction[] = JSON.parse(transactionsStr)





        const outcomeTransactions = transactions.filter((trasaction) => {
            return trasaction.type === 'outcome' && new Date(trasaction.date).getMonth() === currentDate.getMonth() && new Date(trasaction.date).getFullYear() === currentDate.getFullYear()
        })

        let totalOutCome = 0

        const sumary = outcomeTransactions.reduce((acc, transaction) => {
            totalOutCome += Number(transaction.amount)
            acc[transaction.categoryKey] += Number(transaction.amount)
            return acc

        }, {
            purchases: 0,
            food: 0,
            car: 0,
            leisure: 0,
            studies: 0,
        })




        const sumaryArray = Object.keys(sumary).map((key) => {

            if (sumary[key] > 0) {
                return {
                    key: findCategory(key).key,
                    title: findCategory(key).name,
                    color: findCategory(key).color,
                    amount: sumary[key],
                    amountFormated: amountFormater(sumary[key]),
                    percent: `${(sumary[key] / totalOutCome * 100).toFixed()}%`
                }
            }

        }).filter((trasaction) => {
            return trasaction !== undefined
        })

        setHistoryTransactions(sumaryArray)

        setIsloading(false)


    }


    useFocusEffect(useCallback(() => {
        loadData()

    }, [currentDate]))



    return (




        <Container>

            <Header>
                <Title>Resumo por categoria</Title>
            </Header>





            <ResumeContent
                showsVerticalScrollIndicator={false}
                style={{
                    paddingBottom: useBottomTabBarHeight(),

                }}

            >

                <MonthSelect>
                    <MonthSelectButton onPress={() => handleDateChange('prev')}>
                        <Icon name="chevron-left" />

                    </MonthSelectButton>
                    <MonthName>{
                        format(currentDate, " MMMM,yyyy ", {
                            locale: ptBr
                        })}</MonthName>
                    <MonthSelectButton onPress={() => handleDateChange('next')}>
                        <Icon name="chevron-right" />

                    </MonthSelectButton>
                </MonthSelect>

                {
                    isLoading ?
                        <LoadingContainer>
                            <ActivityIndicator size="large" color={theme.colors.secundary} />
                        </LoadingContainer> :
                        <>
                            <ChartContainer>

                                <VictoryPie
                                    data={historyTrasactions}
                                    x="percent"
                                    y="amount"
                                    colorScale={historyTrasactions.map(trasaction => trasaction.color)}

                                    style={{
                                        labels: {
                                            fontSize: RFValue(17),
                                            fill: theme.colors.title,
                                            fontWeight: 'bold'


                                        },


                                    }}

                                />

                            </ChartContainer>


                            {
                                historyTrasactions.map((historyTrasaction) => {
                                    return (
                                        <HistoryCard
                                            key={historyTrasaction.key}
                                            title={historyTrasaction.title}
                                            amount={historyTrasaction.amountFormated}
                                            color={historyTrasaction.color} />

                                    )

                                })

                            }

                        </>
                }

            </ResumeContent>



        </Container>





    )
}