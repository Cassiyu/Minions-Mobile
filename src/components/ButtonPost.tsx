import { StyleSheet, Text, TouchableOpacity } from "react-native"

export default function ButtonPost() {
    return (
        <TouchableOpacity style={styles.button} >
            <Text>Enviar</Text>
        </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    button: { 
        width: '50%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 60, 
        backgroundColor: '#FBDF4B', 
        marginHorizontal: 4, 
        marginTop: 90, 
        borderRadius: 8,
    }
  })