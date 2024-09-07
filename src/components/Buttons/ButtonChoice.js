import { View } from "react-native";
import styles from '../../assets/scss/quiz.scss'
import Button from "./Button";

export default function ButtonChoice ({ label, onClick, id, icon }) {

    return (
        <View style={styles.choiceView}>
            <Button
                id={id}
                style={styles.choice}
                onPress={onClick}
                title={label} 
                icon={icon} 
            />
        </View>
    )
}