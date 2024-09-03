import { View,Text, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

export default function ImagePost() {
    return (
      <View style={styles.imageContainer}>
        <Text style={styles.imageTitle}>Imagem</Text>
        <View style={styles.addImage}>
            <MaterialIcons name='add' size={40} color={'#484646'} />
            <Text style={styles.imageTitle}>Adicionar imagem</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    imageTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#484646'
      },
      imageContainer: {
        marginTop: 82,
        paddingHorizontal: 7
      },
      addImage: {
        height: 117,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#D9D9D9',
        borderRadius: 8,
        paddingHorizontal: 7,
        flexDirection: 'column'
      },
   
  })