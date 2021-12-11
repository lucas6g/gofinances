
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from '@expo/vector-icons'



export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
  

`

export const Header = styled.View`
   background-color: ${({ theme }) => theme.colors.primary};

   width: 100%;
   height: ${RFValue(113)}px;
   
   align-items: center;
   justify-content: flex-end;

    padding-bottom: 19px;
`


export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color:${({ theme }) => theme.colors.shape} ;


`

export const ResumeContent = styled.ScrollView.attrs({
    contentContainerStyle: {
        padding: 24,
        alignItems: 'center',
    }
})
    `
`



export const ChartContainer = styled.View`
    width: 100%;
    align-items: center;
    margin-bottom:${RFValue(32)}px;

`



export const MonthSelect = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;

 
 `
export const MonthSelectButton = styled(BorderlessButton)`
    
 
 `
export const Icon = styled(Feather)`
   
font-size:${RFValue(24)}px;

`


export const MonthName = styled.Text`

    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    color:${({ theme }) => theme.colors.title} ;

 
 `


export const LoadingContainer = styled.View`
flex: 1;
    justify-content: center;
    align-items: center;

`