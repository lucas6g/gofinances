import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons';
import { FlatList } from 'react-native'
import { BorderlessButton } from "react-native-gesture-handler";
import { Transaction } from './Dashboard'

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    flex: 1;
`

export const Header = styled.View`

    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    height:${RFPercentage(36)}px;
    padding-top:24px ;
    align-items: center;

`

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    
`

export const UserInfo = styled.View`
flex-direction: row;
align-items: center;


`



export const Photo = styled.Image`
 width:${RFValue(48)}px ;   
 height:${RFValue(48)}px ;
 border-radius: 10px;

`
export const User = styled.View`
 margin-left: 16px;
 

`
export const UserGreting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size:${RFValue(18)}px;
  font-family   :${({ theme }) => theme.fonts.regular} ;
    

`
export const UserName = styled.Text`
 color: ${({ theme }) => theme.colors.shape};
  font-size:${RFValue(18)}px;
  font-family   :${({ theme }) => theme.fonts.bold} ;
`

export const LogOutButton = styled(BorderlessButton)`
`


export const PowerIcon = styled(Feather)`
    color: ${({ theme }) => theme.colors.secundary};
    font-size:${RFValue(24)}px;
`
export const Cards = styled.ScrollView`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(14)}px; 
`


export const Transactions = styled.View`
    flex: 1;
    padding: 0 24px;
    margin-top: ${RFPercentage(12)}px;
    
   
`
export const Title = styled.Text`
     font-size:${RFValue(18)}px;
     font-family   :${({ theme }) => theme.fonts.regular} ;


`

export const TrasanctionsList = styled(FlatList as new () => FlatList<Transaction>)`


`

export const LoadingContainer = styled.View`
flex: 1;
    justify-content: center;
    align-items: center;

`