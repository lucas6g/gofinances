import React from 'react'
import { TextInputProps } from 'react-native'
import { Container } from './InputStyles'

type InputProps = TextInputProps

export function Input({ ...rest }: InputProps) {
    return (
        <Container  {...rest} />


    )
}