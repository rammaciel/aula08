import React, { useState } from 'react';
import {FlatList,    StyleSheet,    Text,    View, TouchableOpacity,    Alert,   } from 'react-native';

import ContatoInput from '../componentes/ContatoInput';
import ContatoItem from '../componentes/ContatoItem';
import Cartao from '../componentes/Cartao';

const styles = StyleSheet.create({
    telaPrincipalView: {
        padding: 50
    },
    cartao: {
        margin: 50
    }
});

export default function App() {
    const [contatoVisualizado, setContatoVisualizado] = useState(null);
    const [isEditando, setIsEditando] = useState(false);

    const [contatos, setContatos] = useState('');
    const [contadorContatos, setContadorcontatos] = useState(10);

    const removerContato = (keyToRemove) => {
        Alert.alert(
            'Remover contato ' + keyToRemove + '?',
            '',
            [
                {
                    text: 'Não'
                },
                {
                    text: 'Sim',
                    onPress: () => {
                        setContatos (contatos => {
                            return contatos.filter((contato) => {
                                return contato.key !== keyToRemove
                            })
                        });
                    }
                }
            ]
        )
    };

    const verContato = (contato) => {
        setContatoVisualizado(contato);
    };

    const adicionarContato = (nome, celular) => {
        setContatos((contatos) => {
            setContadorcontatos(contadorContatos + 2);
            return [
                ...contatos,
                {
                    key: contadorContatos.toString(),
                    nome: nome,
                    celular: celular
                }
            ];
        });
    }

    const editarContato = (nome, celular) => {
        var contatosAtuais = contatos;

        var itemNovo = false;

        contatosAtuais.forEach((item) => {
            if (item.key == contatoVisualizado.key) {
                item.nome = nome
                item.celular = celular

                itemNovo = item;
            }
        })

        setIsEditando(false);
        setContatoVisualizado(null);
    }

    return (
        <View>
            {contatoVisualizado ? (
                <View style={styles.telaPrincipalView}>
                    <TouchableOpacity onPress={() => {
                        setIsEditando(false)
                        setContatoVisualizado(null)
                    }}>
                        <View>
                            <Text style={texto.textoreturn}>Voltar para a listagem</Text>
                        </View>
                    </TouchableOpacity>
                    {isEditando ? (
                        <View>
                            <ContatoInput onAdicionarContato={editarContato} isEditando={true} />
                        </View>
                    ) : (<View></View>)}
                    <Cartao estilos={styles.contatoItem}>
                        <ContatoItem
                            contato={contatoVisualizado}
                            onPress={verContato}
                            onDelete={removerContato}
                        />
                    </Cartao>
                    <TouchableOpacity onPress={() => {setIsEditando(true)}}>
                        <View>
                            <Text style={texto.textoeditar}>Editar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.telaPrincipalView}>
                    <View>
                        <ContatoInput onAdicionarContato={adicionarContato} isEditando={false} />
                    </View>
                    <FlatList
                        data={contatos}
                        renderItem={
                            contato => (
                                <Cartao estilos={styles.contatoItem}>
                                    <ContatoItem
                                        contato={contato.item}
                                        onPress={verContato}
                                        onDelete={removerContato}
                                    />
                                </Cartao>
                            )
                        }
                    />
                </View>
            )}
        </View>
    );
}

const texto = StyleSheet.create({
    textoreturn: {
        backgroundColor: "#FC9208",
        padding: 10,
        marginBottom: 10,
        color: "white",
        textAlign: 'center'
    },
    textoeditar: {
        backgroundColor: "#FC9208",
        padding: 10,
        marginTop: 20,
        color: "white",
        textAlign: 'center'
    },
});