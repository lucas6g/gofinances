import { useState } from 'react'
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




interface FormData {
    name: string
    amount: string
}

const validation = Yup.object().shape({
    name: Yup.string().required('Nome obrigatorio'),
    amount: Yup.number().typeError('Informe um valor numerico').positive().required('Coloca o Valor man ')

})


export function Register() {
    const [trasactionType, setTrasactionType] = useState('')
    const [isSelectModalOpen, setIsSelectModalOpen] = useState(false)

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validation)
    })



    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',

    })


    function handleRegister(data: FormData) {

        if (!trasactionType) {
            return Alert.alert('Seleciona um tipo aii')
        }
        if (category.key === 'category') {
            return Alert.alert('Escolhe uma categoria aii')
        }



        const transaction = {
            ...data,
            trasactionType,
            category: category.key

        }
        console.log(transaction)

    }

    function handleIsSelected(type: string) {
        if (type === 'income') {
            setTrasactionType('income')
        } else {

            setTrasactionType('outcome')

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