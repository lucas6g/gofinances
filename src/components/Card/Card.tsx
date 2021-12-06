import React from 'react'
import { Container, Header, Title, Footer, Amaunt, LastTransaction, Icon } from './CardStyles'



interface CardProps {
    title: string
    type: 'income' | 'outcome' | 'total'
    lastTrasaction: string
    amaunt: string

}

const icon = {
    income: 'arrow-up-circle',
    outcome: 'arrow-down-circle',
    total: 'dollar-sign'
}

export function Card({ amaunt, type, lastTrasaction, title }: CardProps) {
    return (
        <Container type={type} >
            <Header>
                <Title type={type}>{title}</Title>

                <Icon name={icon[type]} type={type} />

            </Header>

            <Footer>
                <Amaunt type={type}>
                    {amaunt}
                </Amaunt>
                <LastTransaction type={type}>{lastTrasaction}</LastTransaction>
            </Footer>
        </Container>
    )
}