import styled from 'styled-components/native'
import { RectButton } from "react-native-gesture-handler";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'


export const Container = styled.View`
    flex: 1;
    align-items: center;


`
export const Header = styled.View`
    
    height: 70%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: flex-end;
    
`


export const LogoContainer = styled.View`
    align-items: center;
    margin-bottom: 40px;


`
export const LogoText = styled.Text`
    
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    color:${({ theme }) => theme.colors.shape} ;

`
export const Wrapper = styled.View`
    align-items: center;
    
    

`
export const Title = styled.Text`
     font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(30)}px;
    color:${({ theme }) => theme.colors.shape} ;

    text-align: center;
    margin-bottom: 80px;
    
    
    
    
    `
export const SigninTitle = styled.Text`
    font-size: ${RFValue(16)}px;
    color:${({ theme }) => theme.colors.shape} ;
    
    text-align: center;
    margin-bottom: 80px;
    font-family: ${({ theme }) => theme.fonts.regular};
    
`

export const SocialButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    color:${({ theme }) => theme.colors.title} ;
    flex: 1;
    text-align: center;
   
    
  

`
export const Footer = styled.View`
    padding: 0 32px;
    width: 100%;
    flex: 1;
    background-color: ${({ theme }) => theme.colors.secundary};
    
    
    `

export const SocialButton = styled(RectButton)`

width: 100%;
flex-direction: row;
margin-bottom: 16px;
background-color: ${({ theme }) => theme.colors.shape};
height: ${RFValue(56)}px;
border-radius: 5px;

align-items: center;



`
export const IconContainer = styled.View`
    height: 100%;
    border-right-width: 1px;
    border-right-color: ${({ theme }) => theme.colors.background};
    padding: 16px;

    justify-content: center;
    align-items: center;
    

`
export const FooterWrapper = styled.View`

    margin-top: ${RFPercentage(-4)}px;


`

