import { Text, TextInput, View } from "react-native";
import styles from '../../assets/scss/login.scss'
import typo from '../../assets/scss/typography.scss'
import { useState } from "react";
import Button from "../../components/Buttons/Button";

export default function Register({ navigation }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <View style={styles.content}>
            <div style={styles.line}></div>
            <Text style={typo.hearder_text}>Seja bem-vindo(a)!</Text>
            <TextInput
                style={styles.inputR}
                onChangeText={setName}
                value={name}
                placeholder="Nome"
            />
            <TextInput
                style={styles.inputR}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                inputMode="email"
            />
            <TextInput
                style={styles.inputR}
                onChangeText={setPass}
                value={pass}
                placeholder="Senha"
                secureTextEntry={true}
            />
            <Button
                style={styles.button}
                onPress={() => navigation.navigate("Home")}
                title="Crie sua conta" />
        </View>
    )
}