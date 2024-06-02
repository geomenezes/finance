import { View } from 'react-native';
import styles from '../../assets/scss/index.scss'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

export default function Quiz () {
    return (
        <View style={styles.container}>
            <Header text="Seja bem-vindo (a) ao teste de perfil de investidor. Deseja iniciar o questionário?" />
            <Footer />
        </View>
      );
}