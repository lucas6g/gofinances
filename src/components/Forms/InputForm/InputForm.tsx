import React from 'react'
import { TextInputProps } from 'react-native'
import { Input } from '../Input/Input'

import { Control, Controller } from 'react-hook-form'

import { Container, ErrorMessage } from './InputFormStyles'


interface InputFormProps extends TextInputProps {
    control: Control
    name: string
    errorMessage: string
}


export function InputForm({ name, control, errorMessage, ...rest }: InputFormProps) {
    return (
        <Container >
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => {

                    return (
                        <Input
                            onChangeText={onChange}
                            value={value}

                            {...rest}
                        />

                    )


                }}
            />
            {errorMessage && (<ErrorMessage>{errorMessage}</ErrorMessage>)}

        </Container>
    )
}