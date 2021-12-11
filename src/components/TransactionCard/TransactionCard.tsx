
import React from 'react'

import {
    Container,
    Title,
    Amaunt,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date


} from './TransactionCardStyles'

interface Category {

    name: string
    icon: string
}

interface TrasactionCardProps {
    title: string
    amaunt: string
    date: string
    category: Category
    type: 'income' | 'outcome'


}

export function TrasactionCard({ amaunt, category, date, title, type }: TrasactionCardProps) {
    return (
        <Container>
            <Title>{title}</Title>

            {
                type === "outcome" ?
                    <Amaunt type={type}> - {amaunt}</Amaunt>

                    : <Amaunt type={type}>{amaunt}</Amaunt>

            }

            <Footer>
                <Category>
                    <Icon name={category.icon} />

                    <CategoryName>{category.name}</CategoryName>

                </Category>
                <Date>{date}</Date>
            </Footer>

        </Container>
    )

}