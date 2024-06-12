import { Text, View } from "react-native";

export default function ResultQuiz ({ route, navigation }) {

    const { profile } = route.params;

    return (
        <View>
            <Text>{profile.name}</Text>
            <Text>{profile.label}</Text>
        </View>
    )
}