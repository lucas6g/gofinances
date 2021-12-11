
import React from "react";
import {
    Container,
    Header, UserInfo, Photo, User, UserGreting, UserName, UserWrapper,
    PowerIcon, Cards,
    Transactions,
    LogOutButton,

    Title,
    TrasanctionsList,
    LoadingContainer
} from "./DashboardStyles";

import { useTheme } from 'styled-components'
import { categories } from '../../utils/categories'

import { Card } from "../../components/Card/Card";
import { TrasactionCard } from "../../components/TransactionCard/TransactionCard";
import { useState } from "react";

import { useEffect } from "react";
import { format } from 'date-fns'

import { ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { amountFormater } from '../../utils/amountFormater'
import ptBr from 'date-fns/locale/pt-BR';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

interface Category {
    name: string
    icon: string
}

export interface Transaction {
    id: string
    title: string
    amount: string
    date: string
    category: Category
    type: 'income' | 'outcome',
    categoryKey: string


}



export function Dashboard() {


    const { signOut, user } = useContext(AuthContext)


    const collectionKey = `@gofinances:transactions_user:${user.id}`


    const [transactions, setTrasactions] = useState<Transaction[]>([])
    const [incomeSum, setIncomeSum] = useState(amountFormater(0))
    const [isLoading, setIsloading] = useState(false)
    const [outComeSum, setOutComeSum] = useState(amountFormater(0))
    const [total, setTotal] = useState(amountFormater(0))
    const [lastIncomeTransactionDate, setLastIncomeTrasactionDate] = useState('')
    const [lastOutComeTransactionDate, setLastOutComeTrasactionDate] = useState('')
    const [totalInterval, setTotalInterval] = useState('')






    const theme = useTheme()


    function findCategoryByKey(key: string) {
        const category = categories.find((category) => {
            return category.key === key
        })


        return {
            name: category.name,
            icon: category.icon
        }

    }

    function getLastTransactionDate(transactions: Transaction[], type: 'income' | 'outcome' | 'last') {
        const lastTransactionDate = Math.max.apply(Math, transactions.filter((transaction) => {

            return type === 'last' ? transaction : transaction.type === type
        }).map((transaction) => {
            return new Date(transaction.date).getTime()
        }))

        if (lastTransactionDate > 0) {
            return lastTransactionDate

        } else {
            return ''
        }

    }

    async function handleSignOut() {
        await signOut()
    }

    async function loadTrasactions() {
        // AsyncStorage.removeItem(collectionKey)

        setIsloading(true)
        const transactionsStr = await AsyncStorage.getItem(collectionKey)

        if (transactionsStr) {
            const transactions: Transaction[] = JSON.parse(transactionsStr)

            let incomeSum = 0
            let outComeSum = 0


            const formatedTransactions = transactions.map((transaction: Transaction) => {

                if (transaction.type === 'income') {
                    incomeSum += Number(transaction.amount)

                } else {
                    outComeSum += Number(transaction.amount)

                }

                return {

                    id: transaction.id,
                    title: transaction.title,
                    amount: Number(transaction.amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
                    date: format(new Date(), "dd/MM/yyyy"),
                    category: findCategoryByKey(transaction.categoryKey),
                    type: transaction.type,
                    categoryKey: transaction.categoryKey

                }
            })

            setIncomeSum(amountFormater(incomeSum))
            setOutComeSum(amountFormater(outComeSum))
            setTotal(amountFormater(incomeSum - outComeSum))


            setTrasactions(formatedTransactions)



            const lastIncomeTransaction = getLastTransactionDate(transactions, 'income')
            const lastOutComeTrasaction = getLastTransactionDate(transactions, 'outcome')
            const lastTrasaction = getLastTransactionDate(transactions, 'last')




            setLastIncomeTrasactionDate(lastIncomeTransaction !== '' ? format(new Date(lastIncomeTransaction), "'Ultima entrada dia' dd 'de' MMMM", {
                locale: ptBr
            }) : 'Não a Transações de Entrada')


            setLastOutComeTrasactionDate(lastOutComeTrasaction !== '' ? format(new Date(lastOutComeTrasaction), "'Ultima saida dia' dd 'de' MMMM ", {
                locale: ptBr
            }) : 'Não a Transações de Saida')

            setTotalInterval(lastTrasaction !== '' ? format(new Date(lastTrasaction), "'01 a' dd 'de' MMMM ", {
                locale: ptBr
            }) : '')




            setIsloading(false)
        }
        setIsloading(false)

    }

    useEffect(() => {

        loadTrasactions()


    }, [])

    useFocusEffect(useCallback(() => {
        loadTrasactions()
    }, []))





    return (

        <>
            {
                isLoading ?
                    <LoadingContainer>
                        <ActivityIndicator size="large" color={theme.colors.secundary} />
                    </LoadingContainer> :
                    <Container >
                        <Header>

                            <UserWrapper>
                                <UserInfo>
                                    <Photo source={{ uri: user.photo }} />
                                    <User>
                                        <UserGreting>Ola,</UserGreting>
                                        <UserName>{user.name}</UserName>
                                    </User>
                                </UserInfo>
                                <LogOutButton onPress={handleSignOut}>

                                    <PowerIcon name="power" />
                                </LogOutButton>

                            </UserWrapper>
                        </Header>

                        <Cards
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingLeft: 24 }}
                        >
                            <Card
                                amaunt={incomeSum}
                                type="income"
                                lastTrasaction={lastIncomeTransactionDate}
                                title="Entrada"

                            />
                            <Card
                                amaunt={outComeSum}
                                type="outcome"
                                lastTrasaction={lastOutComeTransactionDate}
                                title="Saida"

                            />
                            <Card
                                amaunt={total}
                                type="total"
                                lastTrasaction={totalInterval}
                                title="Total"

                            />

                        </Cards>

                        <Transactions>
                            <Title>Listagem</Title>

                            <TrasanctionsList

                                data={transactions}
                                contentContainerStyle={{ paddingBottom: 16 }}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => {
                                    return (
                                        <TrasactionCard
                                            type={item.type}
                                            title={item.title}
                                            amaunt={item.amount}
                                            category={{
                                                icon: item.category.icon,
                                                name: item.category.name
                                            }}
                                            date={item.date}

                                        />
                                    )
                                }}

                            />



                        </Transactions>
                    </Container>
            }
        </>
    )
}