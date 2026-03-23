import {useState} from 'react';
import {View, Image, Text, 
  StyleSheet, ScrollView, 
  KeyboardAvoidingView, Platform} 
  from 'react-native';
import {Input} from '../components/Input';
import {Button} from '../components/Button'
import { router } from 'expo-router';

export default function Cadastro()
{
  return(
    <KeyboardAvoidingView 
    style={{flex: 1}}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.container}>
        <Image 
          source={require('../assets/logo.jpg')}
          style={styles.imagem} 
        />
        <Text style={styles.titulo}>Cadastre-se</Text>
        <Text style={styles.subtitulo}>Cadastre para fazer o acesso</Text>
        <View style={styles.Form}>
          <Input placeholder="E-mail" />
          <Input placeholder="Senha" secureTextEntry/>
          <Input placeholder="Confirmar Senha" secureTextEntry/>
          <Button label="Confirmar" activeOpacity={0.7}/>  
          <Text>Já tem uma conta?</Text>
          <Button onPress={() => router.back()} label="Entrar" activeOpacity={0.7}/>  
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 32
  },
  titulo: {
    fontSize: 30, 
    fontWeight: "700"
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "400"
  },
  imagem: {
    width: "100%",
    height: 330,
    marginTop: 40,
    borderRadius: 30
  },
  Form: {
    gap: 12,
    marginTop: 20,
    alignItems: 'center'
  }
})