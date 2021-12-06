
import React, { ReactNode } from 'react'
import { RectButtonProperties } from 'react-native-gesture-handler'

import { Container, ButtonText } from './ButtonStyles'



interface ButtonProps extends RectButtonProperties {
    children: ReactNode
    onPress: () => void
}

export function Button({ children, onPress, ...rest }: ButtonProps) {
    return (
        <Container onPress={onPress}  {...rest} >
            <ButtonText>{children} </ButtonText>
        </Container>


    )
}