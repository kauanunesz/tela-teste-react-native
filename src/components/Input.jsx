import {TextInput, StyleSheet} from 'react-native'

export function Input({...rest})
// ...rest funciona para fazer a função/componente aceitar toda e qualquer propriedade, para não precisar importar cada propriedade, ou criar um tipo somente para ela; 
{
    return <TextInput style={styles.input} {...rest} />
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 40,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 16,
        paddingLeft: 12
    }
})