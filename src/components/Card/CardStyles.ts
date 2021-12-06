import styled, { css } from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


import { Feather } from '@expo/vector-icons';

interface IconProps {
    type: 'income' | 'outcome' | 'total'
}

interface ContainerProps {
    type: 'income' | 'outcome' | 'total'
}
interface TitleProps {
    type: 'income' | 'outcome' | 'total'
}

interface AmauntProps {
    type: 'income' | 'outcome' | 'total'
}

interface LastTransactionProps {
    type: 'income' | 'outcome' | 'total'
}

export const Container = styled.View<ContainerProps>`


    background-color: ${({ theme, type }) => type === "total" ? theme.colors.secundary : theme.colors.shape};

    width:${RFValue(300)}px ;   
    border-radius: 8px;
    padding: 19px 23px;
    padding-bottom: 42px;
    margin-right: 16px;
    height:${RFValue(200)}px; 

`


export const Header = styled.View`
flex-direction: row;
justify-content: space-between;
margin-bottom: 55.5px;


`
export const Title = styled.Text<TitleProps>`
font-family:${({ theme }) => theme.fonts.regular} ;
font-size:${RFValue(14)}px;

${(props) => props.type === "total" && css`
    color: ${props.theme.colors.shape};
 `}


`

export const Icon = styled(Feather) <IconProps>`
   
    font-size:${RFValue(40)}px;
    ${(props) => props.type === "income" && css`
        color: ${props.theme.colors.success} ;
    
    `}
    ${(props) => props.type === "outcome" && css`
        color: ${props.theme.colors.attention} ;
    
    `}
    ${(props) => props.type === "total" && css`
        color: ${props.theme.colors.shape} ;
    
    `}
`

export const Footer = styled.View`

`
export const Amaunt = styled.Text<AmauntProps>`

font-size:${RFValue(32)}px;
font-family:${({ theme }) => theme.fonts.medium};
color:${({ theme }) => theme.colors.title} ;

 ${(props) => props.type === "total" && css`
    color: ${props.theme.colors.shape};
 `}

`
export const LastTransaction = styled.Text<LastTransactionProps>`
    color: ${({ theme }) => theme.colors.text};
    font-family:${({ theme }) => theme.fonts.regular};
    font-size:${RFValue(12)}px;

    ${(props) => props.type === "total" && css`
    color: ${props.theme.colors.shape};
 `}
`


