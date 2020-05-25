import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native'

const ContatoInput = (props) => {
    const [nome, setNome] = useState('');
    const [celular, setCelular] = useState('');

    const capturarNome = (nome) => {
        setNome(nome)
    };

    const capturarCelular = (celular) => {
        setCelular(celular)
    };

    return (
        <View>
            <View style={styles.contatoView}>
                <TextInput
                    placeholder="Nome"
                    style={styles.nomeInputText}
                    onChangeText={capturarNome}
                    value={nome}
                />
            </View>
            <View style={styles.contatoView}>
                <TextInput
                    placeholder="Telefone"
                    style={styles.telefoneInputText}
                    onChangeText={capturarCelular}
                    value={celular}
                />
                
            </View>
            <Button
                    title={props.isEditando ? "Salvar" : '+'}
                    style={styles.textoreturn}
                    onPress={() => {
                        props.onAdicionarContato(nome, celular)

                        if (!props.isEditando) {
                            setNome('');
                            setCelular('');
                        }
                    }}
                />
        </View>
    );
}

const styles = StyleSheet.create({
    contatoView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    nomeInputText: {
        width: "100%",
        borderBottomColor: "green",
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 20
    },
    telefoneInputText: {
        width: "100%",
        borderBottomColor: "green",
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 20
    },
    textoreturn: {
        backgroundColor: "green",
        padding: 10,
        marginBottom: 10,
        color: "white",
        textAlign: 'center'
    },
    
});

export default ContatoInput;
