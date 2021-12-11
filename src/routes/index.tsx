import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'

import { AuthContext } from '../context/AuthContext'







export function Routes() {

    const { user } = useContext(AuthContext)

    return (
        <NavigationContainer>

            {user ? <AppRoutes /> : <AuthRoutes />}

        </NavigationContainer>

    )
}