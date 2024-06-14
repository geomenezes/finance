import { View } from "react-native";
import styles from '../../assets/scss/index.scss'
import Button from "./Button";

export default function ActionButton ({ label, onClick }) {

    return (
        <View style={styles.action}>
            <Button
                style={styles.actionButton}
                onPress={onClick}
                title={label} />
        </View>
    )
}