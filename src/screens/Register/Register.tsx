import { useContext, useState } from 'react'
import React from 'react'

import { Button } from '../../components/Forms/Button/Button'

import { TrasactionTypeButton } from '../../components/Forms/TrasactionTypeButton/TrasactionTypeButton'
import { Container, Fields, Form, Header, Title, TrasactionTypeButtonContainer } from './RegisterStyles'
import { Select } from '../../components/Forms/Select/Select'


import { CategorySelect } from '../CategorySelect/CategorySelect'
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native'
import { InputForm } from '../../components/Forms/InputForm/InputForm'
import { useForm } from 'react-hook-form'

import * as Yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'
import AsyncStorage from '@react-native-async-storage/async-storage'

import uuid from 'react-native-uuid'

import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../context/AuthContext'







interface FormData {
    name: string
    amount: string
}


interface Transaction {
    id: string
    title: string
    amount: string
    date: string
    categoryKey: string
    type: 'income' | 'outcome'


}

type NavigationProps = {
    navigate: (screen: string) => void;
}

const validation = Yup.object().shape({
    name: Yup.string().required('Nome obrigatorio'),
    amount: Yup.number().typeError('Informe um valor numerico').positive().required('Coloca o Valor man ')

})


export function Register() {
    const [trasactionType, setTrasactionType] = useState<'income' | 'outcome' | ''>('')
    const [isSelectModalOpen, setIsSelectModalOpen] = useState(false)

    const { user } = useContext(AuthContext)

    const { control, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(validation)
    })



    const collectionKey = `@gofinances:transactions_user:${user.id}`




    const navigation = useNavigation<NavigationProps>()

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',

    })




    async function handleRegister(data: FormData) {

        if (!trasactionType) {
            return Alert.alert('Seleciona um tipo aii')
        }
        if (category.key === 'category') {
            return Alert.alert('Escolhe uma categoria aii')
        }



        const transaction = {
            id: String(uuid.v4()),
            title: data.name,
            amount: data.amount,
            type: trasactionType,
            categoryKey: category.key,
            date: String(new Date()),

        }


        try {
            const currentTransactions = await AsyncStorage.getItem(collectionKey)

            if (currentTransactions) {
                const trasactions: Transaction[] = JSON.parse(currentTransactions)
                trasactions.push(transaction)
                await AsyncStorage.setItem(collectionKey, JSON.stringify(trasactions))
            } else {

                await AsyncStorage.setItem(collectionKey, JSON.stringify([transaction]))
            }


            setCategory({
                key: 'category',
                name: 'Categoria',

            })
            setTrasactionType('')
            reset()

            navigation.navigate('Listagem')

        } catch (error) {
            console.log(error)
            Alert.alert("Não foi possivel  Salvar ")
        }

    }

    function handleIsSelected(type: 'income' | 'outcome') {
        if (type === 'income') {
            setTrasactionType("income")
        } else {

            setTrasactionType("outcome")

        }

    }

    function handleModalOpen() {
        setIsSelectModalOpen(true)
    }
    function handleModalClose() {
        setIsSelectModalOpen(false)
    }



    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
        >
            <Container>
                <Header>
                    <Title>Cadastro</Title>
                </Header>

                <Form >

                    <Fields>

                        <InputForm
                            name="name"
                            placeholder="Nome"
                            control={control}
                            autoCapitalize="sentences"
                            autoCorrect={false}
                            errorMessage={errors.name && errors.name.message}


                        />
                        <InputForm
                            name="amount"
                            placeholder="Preço"
                            control={control}
                            keyboardType="numeric"
                            errorMessage={errors.amount && errors.amount.message}
                        />

                        <TrasactionTypeButtonContainer>


                            <TrasactionTypeButton

                                borderless={false}
                                onPress={() => {
                                    handleIsSelected('income')
                                }}
                                type='income'
                                isSelected={trasactionType === 'income'}
                            >
                                Entrada
                            </TrasactionTypeButton>

                            <TrasactionTypeButton
                                borderless={false}
                                onPress={() => {
                                    handleIsSelected('outcome')
                                }} type='outcome'
                                isSelected={trasactionType === 'outcome'}
                            >
                                Saida
                            </TrasactionTypeButton>


                        </TrasactionTypeButtonContainer>

                        <Select
                            title={category.name}
                            onPress={handleModalOpen}
                        />

                    </Fields>

                    <Button
                        onPress={handleSubmit(handleRegister)}

                    >Cadastrar </Button>



                </Form>

                <Modal visible={isSelectModalOpen} >
                    <CategorySelect
                        category={category}
                        setCategory={(category) => { setCategory(category) }}
                        closeSelectCategory={handleModalClose}
                    />
                </Modal>


            </Container>
        </TouchableWithoutFeedback>
    )
}