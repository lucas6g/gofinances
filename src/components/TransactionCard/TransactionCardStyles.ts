import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";


interface AmauntProps {
    type: 'income' | 'outcome'
}


export const Container = styled.View`

background-color: ${({ theme }) => theme.colors.shape};
border-radius: 5px;
padding:17px 24px;
margin-bottom: 16px;

`

export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    margin-bottom: 16px;
    
    
    `
export const Amaunt = styled.Text<AmauntProps>`
font-size: ${RFValue(20)}px;
margin-top: 2px ;
font-family: ${({ theme }) => theme.fonts.regular};

${(props) => props.type === "income" && css`
        color: ${props.theme.colors.success} ;
    
    `}
${(props) => props.type === "outcome" && css`
        color: ${props.theme.colors.attention} ;
    
    `}



`
export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 19px;



`
export const Category = styled.View`
    flex-direction: row;
    align-items: center;


`
export const Icon = styled(Feather)`

font-size: ${RFValue(20)}px;
color: ${({ theme }) => theme.colors.text};
margin-right: 16px;

`
export const CategoryName = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};

`
export const Date = styled.Text`
      font-size: ${RFValue(14)}px;
      color: ${({ theme }) => theme.colors.text};
      font-family: ${({ theme }) => theme.fonts.regular};

`