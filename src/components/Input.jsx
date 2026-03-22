import {TextInput, StyleSheet} from 'react-native'

export function Input({...rest})
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