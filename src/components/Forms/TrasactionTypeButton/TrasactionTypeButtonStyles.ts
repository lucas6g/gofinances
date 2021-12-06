import styled, { css } from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from "react-native-gesture-handler";


interface IconProps {
    type: 'income' | 'outcome'
}
interface ContainerProps {
    isSelected: boolean
    type: 'income' | 'outcome'

}

export const Container = styled(BorderlessButton) <ContainerProps>`
   
    padding: 18px;

    
    border-radius: 5px;
    margin-bottom: 8px;


    background-color: ${({ theme }) => theme.colors.background};

   
    align-items: center;
    flex-direction: row;
    justify-content: center;
    

    border: 2px solid ${({ theme }) => theme.colors.text} ;
    width: 49%;

    ${({ isSelected, type }) => isSelected && type === "income" && css`
    background-color : ${({ theme }) => theme.colors.success_light};
    border: none;
    
 `}
    ${({ isSelected, type }) => isSelected && type === "outcome" && css`
    background-color: ${({ theme }) => theme.colors.attention_light};
    border: none;
 `}
    
   

`

export const Icon = styled(Feather) <IconProps>`

font-size: ${RFValue(24)}px;
color: ${({ theme }) => theme.colors.success};
margin-right: 16px;

${(props) => props.type === "outcome" && css`
    color: ${({ theme }) => theme.colors.attention};
    
 `}


`

export const ButtonText = styled.Text`
     color: ${({ theme }) => theme.colors.title};
     font-size: ${RFValue(14)}px;
    font-family:${({ theme }) => theme.fonts.regular} ;


`