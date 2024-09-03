import { SafeAreaView, ScrollView, View } from "react-native";
import Header from "../components/Header";
import UserFeed from "../components/UserFeed";
import Post from "../components/Post";

const headerProps = {
  source: 'https://images.unsplash.com/photo-1555786750-7c3c2b9a6b0e?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}
const userProps = {
  source: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  username: 'Dev',
  userSlug: '@Dev'
}
const postProps = {
  sourceImg: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  username: 'Dev',
  sourcePost: 'https://s3-alpha-sig.figma.com/img/e385/ec8d/e651a5200be90551719b41bfd6e66469?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GfsaYxUFXSTN-6JLoQECE2FrRDGju6RLwEr3MlFKZeYA3AoTA2pbN8jbymgMV09qAqX-kTYIAfML~IJecHre1KnRWzmVD7Sl~IzuNytYEZBclCbP5q8MdtE1Y9UgpUc0HjMz89cx~0KGoVV3qcsYjxZceu0uFyqVzGV6bBy5JzmzSWWQs4uNV9anWvulmIlHvJxxdEMZ1NkHUs94mOGT-jK3xupL1dOBiGkhmaRnYljyA2P3afpdgil1QqYzHi5ngUxTx7vX7UBE3LgYL2NxJjkae14zdzPtBCgNMMJWZC1WiUzUogVF5YMHCKN6WkpF7yFT99q6c-GK~xYLIl9t9Q__',
  userSlug: '@Dev',
  comment: 'Da da da banana!!!',
  favoriteNumber: '2 mi',
  commentsNumber: '58k',
  shareNumber: '547.8k'
}
const postProps2 = {
  sourceImg: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  username: 'Dev',
  sourcePost: 'https://s3-alpha-sig.figma.com/img/1f40/ef48/12ee371e5b5656a32a407f4e94c0e085?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oFg-xn-Fr4CunB4Z-4PY6Zn~dNqQzzd1kAoZb5yKEr76-c0BRGLupZgW8RDQKN02ua3za8O5~vCSiw1qZcJazyjmNvw4HtXp9ND1sPa1sOZLTFk1aRwjopMVbSTOfekhGCKAzyox72M38nUqa3o1DsPHi6vd6Q7Ia7eDTn7CH3qSSgJmdAuZ~CS8Q64BnS~V84VUk44W9KPY7jvrA5HPVQ~W7zeRYHqQsksKIkAxxwu~wMKHwqmXwlvvvZt6Fa9lKbUqkG9sNelxvKvUJ5CfnFmEiQMnL3pL4pBXoK7m1JYMRxundy5XmjefPsJvkE59yOY0wnT58TKFSxrOai0RjQ__',
  userSlug: '@Dev',
  comment: 'Bananaaaa!!!',
  favoriteNumber: '1.5 mi',
  commentsNumber: '34k',
  shareNumber: '321.9k'
}

export default function Feed() {
  return (
    <SafeAreaView >
      <ScrollView>
        <View>
          <Header source={headerProps.source} />
          <UserFeed username='Dev' source={userProps.source} userSlug={userProps.userSlug} />
          <Post
            sourceImg={postProps.sourceImg}
            username={postProps.username}
            sourcePost={postProps.sourcePost}
            userSlug={postProps.userSlug}
            comments={postProps.comment}
            favoriteNumber={postProps.favoriteNumber}
            commentsNumber={postProps.commentsNumber}
            shareNumber={postProps.shareNumber}
          />
          <Post
            sourceImg={postProps2.sourceImg}
            username={postProps2.username}
            sourcePost={postProps2.sourcePost}
            userSlug={postProps2.userSlug}
            comments={postProps2.comment}
            favoriteNumber={postProps2.favoriteNumber}
            commentsNumber={postProps2.commentsNumber}
            shareNumber={postProps2.shareNumber}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}