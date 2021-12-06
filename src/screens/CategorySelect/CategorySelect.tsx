
import React from 'react'

import { FlatList } from 'react-native-gesture-handler'
import { Button } from '../../components/Forms/Button/Button'
import { categories } from '../../utils/categories'
import {
    Container,
    Header,
    Title,
    Category,
    Icon,
    Name,
    Separator,
    Footer,


} from './CategorySelectStyles'


interface Category {
    key: string
    name: string
}

interface CategorySelectProps {
    category: Category
    setCategory: (category: Category) => void
    closeSelectCategory: () => void
}


export function CategorySelect({ category, closeSelectCategory, setCategory }: CategorySelectProps) {




    function handleSetCategory(category: Category) {
        setCategory(category)


    }

    return (
        <Container>
            <Header>
                <Title>Categorias</Title>
            </Header>
            <FlatList
                data={categories}
                style={{ flex: 1, width: '100%' }}
                keyExtractor={(item) => item.key}

                renderItem={({ item, index }) => {
                    return (
                        <Category
                            borderless={false}
                            selectedCategoryIndex={category.key === item.key ? index : null}

                            onPress={() => handleSetCategory(item)}
                        >
                            <Icon selectedCategoryIndex={category.key === item.key ? index : null} name={item.icon} />
                            <Name selectedCategoryIndex={category.key === item.key ? index : null} >{item.name} </Name>
                        </Category>
                    )
                }}

                ItemSeparatorComponent={Separator}

            />
            <Footer>
                <Button onPress={closeSelectCategory} >
                    Selecionar
                </Button>
            </Footer>
        </Container>

    )
}