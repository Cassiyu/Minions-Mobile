import { Image, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

interface UserFeedProps {
  sourceImg: string,
  username: string,
  sourcePost: string,
  userSlug: string,
  comments: string,
  favoriteNumber: string,
  commentsNumber: string,
  shareNumber: string   
}

export default function Post({ sourceImg, username, sourcePost, userSlug, comments, commentsNumber, favoriteNumber, shareNumber}: UserFeedProps) {
  return (
    <View style={styles.borderContainer}>
        <View style={styles.userContainer}>
            <Image source={{ uri: sourceImg }} style={styles.userImage} />
            <View style={styles.textInfo}>
                <Text style={styles.username}>{username}</Text>
            </View>
        </View>
        <View style={styles.postContainer}>
            <Image source={{ uri: sourcePost }} style={styles.userPost} />
        </View>
        <View style={styles.reactionsContainer}>
            <MaterialIcons name="favorite-border" size={20} color={'#484646'} />
            <Text style={styles.reactionsPost}>{favoriteNumber}</Text>
            <MaterialIcons name="comment" size={20} color={'#484646'} style={{marginLeft: 6}}/>
            <Text style={styles.reactionsPost}>{commentsNumber}</Text>
            <MaterialIcons name="share" size={20} color={'#484646'} style={{marginLeft: 6}}/>
            <Text style={styles.reactionsPost}>{shareNumber}</Text>
        </View>
        <View style={styles.infoContainer}>     
            <Text style={styles.userSlug}>{userSlug}</Text>
            <Text style={styles.comments}>{comments}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    borderContainer:{
        borderWidth: 2,
        borderColor: '#FBDF4B',
        margin: 7,
        borderRadius: 8,
        marginBottom: 10
    },
    comments:{
        marginLeft: 6,
        color: 'black'
    },
    infoContainer:{
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        marginLeft: 12,
        marginTop: 5,
        marginBottom: 20
    },
    userPost:{
        width: '100%',
        height: 200,
    },
    reactionsPost:{
        fontSize: 8,
        marginLeft: 2,
        marginTop: 10
    },
    userImage: {
        width: 40,
        height: 40,
        marginTop: 5,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#FBDF4B'
    },
    reactionsContainer:{
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginTop: 5
    },
    userContainer: {
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        padding: 7
    },
    postContainer: {
        marginStart: 2,
        marginEnd: 2
    },
    textInfo:{
        padding: 5,
    },
    username: {
        marginTop: 7,
        marginLeft: 2,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#484646'
    },
    userSlug: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#484646'
    },
})