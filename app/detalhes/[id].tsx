import React, { useEffect, useState } from "react";
import { Contato, getContatoByid } from "../../services/contatos";
import {ActivityIndicator, Text, View} from "react-native";
import styles from "../../estilo/main"
import { useLocalSearchParams } from "expo-router";

const Detalhes: React.FC<Contato> = () => {

  const { id } = useLocalSearchParams();
  const [contato, setContato] = useState<Contato | null>(null);

  useEffect(() => {
    const carregarContato = async() => {
      const meuContato = await getContatoByid(id.toString());
      
      setContato(meuContato);
    };
    carregarContato();

  }, [])

  return (
    <View style={styles.container}>
      {contato ? (
        <>
          <Text style={styles.text}>{contato.nome}</Text>
          <Text style={styles.text}>{contato.email}</Text>
          <Text style={styles.text}>{contato.telefone}</Text>
          <Text style={styles.text}>{contato.endereco}</Text>            
        </>
      ): (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>  
  )
}