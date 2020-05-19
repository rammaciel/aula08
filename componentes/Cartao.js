import React from 'react';
import { View, StyleSheet } from 'react-native';


const Cartao = (props) => {
    return (
        <View style={{...estilos.cartao}}>
            {props.children}
        </View>
    );
};

const estilos = StyleSheet.create({
    cartao: {
        shadowRadius: 1,
        color: '#FC9208',

    }
});

export default Cartao;
