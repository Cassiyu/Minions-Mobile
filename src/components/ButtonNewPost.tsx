import { StyleSheet, View } from "react-native";
import ButtonPost from "./ButtonPost";
import ButtonCancel from "./ButtonCancel";

export default function BotoesNewPost() {
    return (
        <View style={styles.container}>
            <ButtonPost/>
            <ButtonCancel/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row', 
        justifyContent: 'center', 
        padding: 10,
    },
});
