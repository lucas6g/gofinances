import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Signin } from '../screens/Signin/Signin'


const { Navigator, Screen } = createNativeStackNavigator()


export function AuthRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }} >
            <Screen name="Signin" component={Signin} />
        </Navigator>
    )
}