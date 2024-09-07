import { Image, View } from "react-native";
import styles from '../../assets/scss/buttons.scss'
import Button from "./Button";

export default function ButtonIcon ({ icon, onClick, label, id }) {

    return (
        <View style={styles.view}>
            <Button
                key={id}
                style={styles.icon_button}
                onPress={onClick}
                title={label}>
                <Image source = {icon} />
            </Button>
        </View>
    )
}