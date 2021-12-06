import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableOpacity } from 'react-native'

export const Container = styled(TouchableOpacity).attrs({
    activeOpacity: 0.7
})
    `

    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 5px;
    background-color:${({ theme }) => theme.colors.shape};

    padding: 18px 16px;
    margin-bottom: 16px;

`


export const Category = styled.Text`

 font-family:${({ theme }) => theme.fonts.regular} ;
 font-size: ${RFValue(14)}px;
 color: ${({ theme }) => theme.colors.text};
`

export const Icon = styled(Feather)`

font-size: ${RFValue(20)}px;
color: ${({ theme }) => theme.colors.text};
margin-right: 16px;



`