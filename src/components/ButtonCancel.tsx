import { StyleSheet, Text, TouchableOpacity } from "react-native"

export default function ButtonCancel() {
    return (
        <TouchableOpacity style={styles.button} >
        <Text style={styles.textButton}>Cancelar</Text>
    </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    button: { 
        width: '50%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 60, 
        backgroundColor: '#484646', 
        marginHorizontal: 4, 
        marginTop: 90, 
        borderRadius: 8,
    },
    textButton: {
        color: '#ffffff'
    }
  })