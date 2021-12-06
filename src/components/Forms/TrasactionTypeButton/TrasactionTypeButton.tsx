
import React from 'react'

import { Icon } from './TrasactionTypeButtonStyles'
import { BorderlessButtonProps } from "react-native-gesture-handler";
import { Container, ButtonText } from './TrasactionTypeButtonStyles'



interface ButtonProps extends BorderlessButtonProps {
    children: React.ReactNode
    type: 'income' | 'outcome'
    isSelected: boolean
}



const icon = {
    income: 'arrow-up-circle',
    outcome: 'arrow-down-circle',

}


export function TrasactionTypeButton({ children, type, isSelected, ...rest }: ButtonProps) {


    return (
        <Container isSelected={isSelected} type={type}  {...rest} >
            <Icon name={icon[type]} type={type} />
            <ButtonText>{children} </ButtonText>
        </Container>


    )
}