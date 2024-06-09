import { Image, View } from 'react-native';
import styles from '../../assets/scss/index.scss'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ButtonChoice from '../../components/Buttons/ButtonChoice';

export default function Quiz ({ navigation }) {
    return (
        <View style={styles.container}>
            <Header 
                text="Seja bem-vindo (a) ao teste de perfil de investidor. Deseja iniciar o questionário?"
                navigation={navigation} />
                <ButtonChoice label="Sim, vamos lá!" />
                <ButtonChoice label="Não, talvez mais tarde!" />
                <Image
                    // style={styles.tinyLogo}
                    source = {require('../../assets/img/list.png')}
                />
            <Footer navigation={navigation} />
        </View>
      );
}