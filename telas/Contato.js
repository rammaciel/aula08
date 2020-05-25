import React from 'react';

import { View, StyleSheet, Text, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import BotaoCabecalho from '../componentes/BotaoCabecalho';



const ListaDeLugaresTela = (props)=> {
    return (
        <View>
            {ListaDeLugaresTela}
        </View>
    )
}

ListaDeLugaresTela.navigationOptions = (dadosNav) => {
    return {
        headerTitle: 'Adicionar contato',
        headerRight:
            <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => { dadosNav.navigation.navigate("index") }}
                />
            </HeaderButtons>
    }
}


const estilos = StyleSheet.create({});

export default ListaDeLugaresTela;