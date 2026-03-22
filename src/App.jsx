import 
{View, Image, 
Text, StyleSheet, 
ScrollView, KeyboardAvoidingView, Platform}
from 'react-native';
import {Input} from './components/Input';
import {Button} from './components/Button'

export default function MeuApp()
{
  return(
    <KeyboardAvoidingView 
    style={{flex: 1}}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.container}>
        <Image 
          source={require('./assets/logo.jpg')}
          style={styles.imagem} 
        />
        <Text style={styles.titulo}>Entrar</Text>
        <Text style={styles.subtitulo}>Acesse sua conta com E-mail e senha</Text>
        <View style={styles.Form}>
          <Input placeholder="E-mail"/>
          <Input placeholder="Senha" secureTextEntry/>
          <Button label="Entrar" activeOpacity={0.7}/>
          <Text>Não tem uma conta? </Text>  
          <Button label="Cadastre-se" activeOpacity={0.7}/>  
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