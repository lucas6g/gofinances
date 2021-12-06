import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize'


export const Container = styled.View`

width: 100%;
`


export const ErrorMessage = styled.Text`
    color:${({ theme }) => theme.colors.attention};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(12)}px;

`