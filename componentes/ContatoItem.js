import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContatoItem = (props) =>{
    return (
        <TouchableOpacity onPress={props.onPress.bind(this, props.contato)} onLongPress={props.onDelete.bind(this, props.contato.key)}>
            <View style={styles.itemNaLista}>
                <Text>#{props.contato.key}</Text>
                <Text>Nome: {props.contato.nome}</Text>
                <Text>Celular: {props.contato.celular}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    itemNaLista: {
        padding: 10,
        backgroundColor: "#FC9208",
        borderColor: "#FC9208",
        marginBottom: 2,
        marginTop: 10,
        
    }
});

export default ContatoItem;
