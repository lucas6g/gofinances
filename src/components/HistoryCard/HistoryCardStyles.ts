
import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

interface ContainerProps {
    color: string
}

export const Container = styled.View <ContainerProps>`
     background-color: ${({ theme }) => theme.colors.shape};
     width: 100%;
    height: ${RFValue(48)}px;
    
    border-radius: 5px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
   
    padding: 14px 24px;

    

   
    border-left-width: 5px;
    border-left-color: ${({ color }) => color};

    margin-bottom: 8px;
    

`


export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;
    color:${({ theme }) => theme.colors.title};
    `
export const Amount = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(15)}px;
    color:${({ theme }) => theme.colors.title};

`
