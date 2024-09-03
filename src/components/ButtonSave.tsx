import { StyleSheet, Text, TouchableOpacity } from "react-native"

export default function ButtonSave() {
    return (
        <TouchableOpacity style={styles.botao} >
            <Text>Salvar</Text>
        </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    botao: { 
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