import React, { createContext, ReactNode, useState } from 'react';

import * as AuthSession from 'expo-auth-session'
import { User } from '../screens/Dashboard/DashboardStyles';

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect } from 'react';

const { CLIENT_ID } = process.env
const { REDIRECT_URI } = process.env


// formato dos dados no estado
interface AuthState {
    token: string;

}

interface AuthContextData {

    user: User
    signWhitGoogle: () => Promise<void>
    signOut: () => Promise<void>

}

interface User {
    id: string
    name: string
    email: string
    photo?: string
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData,
);


interface AuthProviderProps {
    children: ReactNode
}

interface AuthotizationResponse {
    params: {
        access_token: string
    }
    type: string

}





export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<User | null>({} as User)



    useEffect(() => {

        async function loadUserStorageData() {
            const userStorageData = await AsyncStorage.getItem('@gofinances:user')

            if (userStorageData) {
                const userLogged = JSON.parse(userStorageData) as User
                setUser(userLogged)
            }
        }

        loadUserStorageData()

    }, [])

    async function signWhitGoogle() {
        try {




            const RESPONSE_TYPE = 'token'
            const SCOPE = encodeURI('profile email')

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

            const { params, type } = await AuthSession.startAsync({ authUrl }) as AuthotizationResponse



            if (type === 'success') {
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`)
                const { id, email, given_name, picture } = await response.json()

                setUser({
                    id,
                    email,
                    name: given_name,
                    photo: picture

                })

            }

            await AsyncStorage.setItem('@gofinances:user', JSON.stringify(user))


        } catch (error) {
            throw new Error(error)
        }
    }

    async function signOut() {
        setUser(null)
        await AsyncStorage.removeItem('@gofinances:user')
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                signOut,
                signWhitGoogle
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}


