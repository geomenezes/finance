import { Image, Linking, Text, TextInput, View } from "react-native";
import styles from '../../assets/scss/login.scss'
import Button from "../../components/Buttons/Button";
import { useState } from "react";
import typo from '../../assets/scss/typography.scss'

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <View style={styles.content}>
            <div style={styles.line}></div>
            <Text style={typo.hearder_text}>Acesse sua conta!</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                keyboardType="email"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPass}
                value={pass}
                placeholder="Senha"
                secureTextEntry={true}
            />
            <View style={styles.links}>
            <Text style={styles.link}
                onPress={() => navigation.navigate("Register")}>
                Primeiro acesso
            </Text>
            <Text style={{ color: '#0DA980' }}>
                ou
            </Text>
            <Text style={styles.link}
                onPress={() => navigation.navigate("ForgotPass")}>
                Esqueci minha senha
            </Text>
            </View>
            <Button
                style={styles.button}
                onPress={() => navigation.navigate("Home")}
                title="Entrar" />
            <Image
                style={styles.imgQuiz}
                source = {require('../../assets/img/bro.png')}
            />
        </View>
    )
}