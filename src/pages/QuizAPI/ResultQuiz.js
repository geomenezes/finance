import { Image, Text, View } from "react-native";
import styles from '../../assets/scss/quiz.scss'
import Header from "../../components/Header/Header";
import ActionButton from "../../components/Buttons/Action";

export default function ResultQuiz ({ route, navigation }) {

    const { profile } = route.params;

    return (
        <View>
            <Header navigation={navigation} />
            <Text style={styles.title_profile}>{profile.name}</Text>
            <Text style={{ margin: '10vw'}}>{profile.label}</Text>
            <Image
                style={styles.imgQuiz}
                source = {require('../../assets/img/rafiki.png')}
            />
            <ActionButton 
                label="Voltar"
                onClick={() => navigation.navigate("Home")} />
        </View>
    )
}