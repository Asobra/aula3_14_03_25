import React, { useEffect, useState } from "react";
import { Contato, getContatoByid } from "../../services/contatos";
import {ActivityIndicator, Text, View, Image} from "react-native";
import styles from "../../estilo/main"
import { useLocalSearchParams } from "expo-router";

export default function Detalhes() {
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
          {contato.foto !== "#" ? (
            <Image source={{ uri: contato.foto }} style={styles.fotoGrande} />
          ) : (
            <View style={styles.semFoto}>
              <Text>Sem Foto</Text>
            </View>
          )}

          <Text style={styles.textDetalhes}>{contato.nome}</Text>
          <Text style={styles.textDetalhes}>{contato.email}</Text>
          <Text style={styles.textDetalhes}>{contato.telefone}</Text>
          <Text style={styles.textDetalhes}>{contato.endereco}</Text>            
        </>
      ): (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>  
  )
}