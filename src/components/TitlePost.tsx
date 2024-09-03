import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function TituloPostagem() {
    return (
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Título</Text>
        <TextInput style ={styles.textInput} placeholder="Insira o título aqui ..."/>
      </View>
    )
}

const styles = StyleSheet.create({
    postTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#484646'
    },
    postContainer: {
        marginTop: 12,
        paddingHorizontal: 7
    },
    textInput: {
        height: 60,
        borderWidth: 1,
        backgroundColor: '#ffffff',
        borderColor: '#D9D9D9',
        borderRadius: 8,
        paddingHorizontal: 14
    },
  })