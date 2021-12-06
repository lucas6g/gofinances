import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
    width: 100%;
    padding: 18px;

    
    border-radius: 5px;
    margin-bottom: 8px;


    background-color: ${({ theme }) => theme.colors.secundary};

    justify-content: center;
    align-items: center;
   

`

export const ButtonText = styled.Text`
     color: ${({ theme }) => theme.colors.shape};
     font-size: ${RFValue(14)}px;
    font-family:${({ theme }) => theme.fonts.bold} ;


`