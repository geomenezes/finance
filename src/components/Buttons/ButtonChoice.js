import { Button, View } from "react-native";
import styles from '../../assets/scss/quiz.scss'

export default function ButtonChoice ({ label, onClick }) {

    return (
        <View style={styles.choiceView}>
            <Button
                style={styles.choice}
                onPress={onClick}
                title={label} />
        </View>
    )
}