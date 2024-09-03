import { Image, StyleSheet, Text, View } from "react-native";

interface UserFeedProps {
  source: string,
  username: string,
  userSlug: string,
}

export default function UserFeed({ source, userSlug, username}: UserFeedProps) {
  return (
    <View style={styles.userContainer}>
      <Image source={{ uri: source }} style={styles.userImage} />
      <View style={styles.userInfo}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.userSlug}>{userSlug}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  userImage: {
    width: 60,
    height: 60,
    marginTop: 5,
    marginHorizontal: 7, 
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#FBDF4B'
  },
  userContainer: {
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    marginBottom: 16
  },
  userInfo:{
    marginTop: 8,
    padding: 2
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#484646'
  },
  userSlug: {
    fontSize: 14,
    fontWeight: 'medium',
    color: '#484646'
  },
})