import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MaterialIcons } from '@expo/vector-icons'

import { Platform } from 'react-native'
import { Dashboard } from '../screens/Dashboard/Dashboard'
import { Register } from '../screens/Register/Register'
import { useTheme } from 'styled-components'
import { Resume } from '../screens/Resume/Resume'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
    const theme = useTheme()

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.secundary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                tabBarStyle: {
                    height: 88,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,

                }

            }}
        >
            <Screen
                name="Listagem"
                options={{
                    tabBarIcon: ({ size, color }) => {
                        return (
                            <MaterialIcons
                                name="format-list-bulleted"
                                size={size}
                                color={color}
                            />

                        )
                    }
                }}
                component={Dashboard}
            />
            <Screen

                name="Cadastrar"
                options={{
                    tabBarIcon: ({ size, color }) => {
                        return (
                            <MaterialIcons
                                name="attach-money"
                                size={size}
                                color={color}
                            />

                        )
                    }
                }}
                component={Register}
            />
            <Screen
                name="Resumo"

                options={{
                    tabBarIcon: ({ size, color }) => {
                        return (
                            <MaterialIcons
                                name="pie-chart"
                                size={size}
                                color={color}
                            />

                        )
                    }
                }}
                component={Resume}
            />
        </Navigator>
    )
}