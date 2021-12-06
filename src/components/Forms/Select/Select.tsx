import React from 'react'



import {
    Container,
    Category,
    Icon
} from './SelectStyles'

interface SelectProps {
    title: string
    onPress: () => void
}

export function Select({ title, onPress }: SelectProps) {
    return (
        <Container onPress={onPress} >
            <Category>{title}</Category>
            <Icon name="chevron-down" />
        </Container>
    )
}