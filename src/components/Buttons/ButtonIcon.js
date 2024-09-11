import { Image, Pressable } from "react-native";
import styles from '../../assets/scss/buttons.scss'

export default function ButtonIcon(props) {

    const { onClick, icon, id } = props;

    return (
        <Pressable style={styles.view} onPress={onClick} id={id}>
            <Image
                style={styles.icon_button}
                source={icon}
            />
        </Pressable>
    )
}