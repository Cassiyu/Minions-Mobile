import { RouteProp } from "@react-navigation/native";
import { RootStackParamsList } from "../types/navigation";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Header";
import User from "../components/User";
import TitlePost from "../components/TitlePost";
import ButtonNewPost from "../components/ButtonNewPost";
import ImagePost from "../components/ImagePost";


type ProfileScreenRouteProp = RouteProp<RootStackParamsList, 'New'>

type Props = {
  route?: ProfileScreenRouteProp
}

const headerProps = {
  source: 'https://images.unsplash.com/photo-1555786750-7c3c2b9a6b0e?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}

const userProps = {
  source: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  username: 'Dev',
  userSlug: '@Dev'
}
export default function NewPost({ }: Props) {

    
  return (
    <SafeAreaView >
      <ScrollView>
        <Header source={headerProps.source} />
        <User userId='0' username='Dev' source={userProps.source} userSlug={userProps.userSlug} />
        <TitlePost/>
        <ImagePost/>
        <ButtonNewPost/>
      </ScrollView>
    </SafeAreaView>
  )
}