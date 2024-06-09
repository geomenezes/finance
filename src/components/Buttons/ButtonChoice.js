import { Button, View } from "react-native";

export default function ButtonChoice ({ label, onClick }) {
    <View style={{ backgroundColor: 'red' }}>
        <Button
            onPress={onClick}
            title={label} />
    </View>
}