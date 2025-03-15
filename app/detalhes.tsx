import React from "react";
import { Contato } from "../services/contatos";
import {Text, View} from "react-native";
import styles from "../estilo/main"


export default function Detalhes: React.FC<Contato> = (contato) => {
    return (
       <View style={StylePropertyMap.container)>
        <Text style={styles.text}>(contato.nome}</Text>
        <Text style={styles.text}>(contato.email}</Text>
        <Text style={styles.text}>(contato.telefone}</Text>
        <Text style={styles.text}>(contato.endereco}</Text>            
            </View>
       } 
    )

}