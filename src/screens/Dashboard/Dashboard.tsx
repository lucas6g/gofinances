
import React from "react";
import {
    Container,
    Header, UserInfo, Photo, User, UserGreting, UserName, UserWrapper,
    PowerIcon, Cards,
    Transactions,
    LogOutButton,

    Title,
    TrasanctionsList
} from "./DashboardStyles";



import { Card } from "../../components/Card/Card";
import { TrasactionCard } from "../../components/TransactionCard/TransactionCard";
import { useState } from "react";
import { ListRenderItemInfo } from 'react-native'


interface Category {

    name: string
    icon: string
}

interface Transaction {

    title: string
    amaunt: string
    date: string
    category: Category
    type: 'income' | 'outcome'


}



export function Dashboard() {
    const data = [
        {
            title: "Fudeu man",
            amaunt: "R$ 12.520,00",
            category: {
                icon: 'dollar-sign',
                name: 'Vendas'
            },
            date: "12/02/1998",
            type: "income"


        },
        {
            title: "Fudeu man",
            amaunt: "R$ 12.520,00",
            category: {
                icon: 'dollar-sign',
                name: 'Vendas'
            },
            date: "12/02/1998",
            type: "outcome"


        },
        {
            title: "Fudeu man",
            amaunt: "R$ 12.520,00",
            category: {
                icon: 'coffee',
                name: 'Vendas'
            },
            date: "12/02/1998",
            type: "income"


        },

    ] as Transaction[]


    const [transactions, setTrasactions] = useState<Transaction[]>(data)



    return (
        <Container >
            <Header>

                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://media.istockphoto.com/photos/portrait-of-little-girl-smiling-on-brown-background-picture-id1279976039?b=1&k=20&m=1279976039&s=170667a&w=0&h=j5bLL4L4m4K5hp3KS8sWv947qi0uwlCLpHVMZGiyR1A=' }} />
                        <User>
                            <UserGreting>Ola,</UserGreting>
                            <UserName>Lucas</UserName>
                        </User>
                    </UserInfo>
                    <LogOutButton>

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
                    amaunt="R$ 2,500,00"
                    type="income"
                    lastTrasaction={"Esses dias man "}
                    title="Entrada"

                />
                <Card
                    amaunt="R$ 2,500,00"
                    type="outcome"
                    lastTrasaction={"Esses dias man "}
                    title="Saida"

                />
                <Card
                    amaunt="R$ 10,500,00"
                    type="total"
                    lastTrasaction="1 a 16 abril"
                    title="Total"

                />

            </Cards>

            <Transactions>
                <Title>Listagem</Title>

                <TrasanctionsList

                    data={transactions}
                    contentContainerStyle={{ paddingBottom: 16 }}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }: ListRenderItemInfo<Transaction>) => {
                        return (
                            <TrasactionCard
                                type={item.type}
                                title={item.title}
                                amaunt={item.amaunt}
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
    )
}