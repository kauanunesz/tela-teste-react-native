import {StyleSheet, TouchableOpacity, Text} from 'react-native';
export function Button({label, ...rest}){
    return(
        <TouchableOpacity {...rest} style={styles.container}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2876e2',
        width: "80%",
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8

    },
    text: {
        color: "#fff",
        fontWeight: 500,
        fontSize: 16
    }
})