import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';

//usar quando usar o rect butom no modal 
import { GestureHandlerRootView, BorderlessButton } from "react-native-gesture-handler";




interface CategoryProps {

    selectedCategoryIndex: number

}

interface IconProps {

    selectedCategoryIndex: number


}

interface NameProps {

    selectedCategoryIndex: number


}

export const Container = styled(GestureHandlerRootView)`

flex: 1;
background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;
    background-color: ${({ theme }) => theme.colors.primary};

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
    

`
export const Title = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.regular};
    font-size:  ${RFValue(14)}px;

    color:${({ theme }) => theme.colors.shape} ;

`

export const Category = styled(BorderlessButton) <CategoryProps>`
    width: 100%;
    padding: 15px;
    flex-direction: row;
    align-items: center;

    ${({ selectedCategoryIndex, theme }) => selectedCategoryIndex !== null && css`
        background-color: ${theme.colors.secundary} ;
    
    `}

    

`
export const Icon = styled(Feather) <IconProps>`
   
    font-size:${RFValue(20)}px;
    margin-right: 16px;
    color: ${({ theme }) => theme.colors.title};


    ${({ selectedCategoryIndex, theme }) => selectedCategoryIndex !== null && css`
        color: ${theme.colors.shape} ;
    
    `}
    
    
`

export const Name = styled.Text<NameProps>`

font-family:${({ theme }) => theme.fonts.regular} ;
font-size:  ${RFValue(14)}px;
color: ${({ theme }) => theme.colors.title};

${({ selectedCategoryIndex, theme }) => selectedCategoryIndex !== null && css`
        color: ${theme.colors.shape} ;
    
    `}

`


export const Separator = styled.View`
height: 1px;
width: 100%;
background-color: ${({ theme }) => theme.colors.text};

`

export const Footer = styled.View`

    width: 100%;
    padding: 16px;

`


