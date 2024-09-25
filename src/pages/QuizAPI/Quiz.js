import { Image, View } from 'react-native';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ButtonChoice from '../../components/Buttons/ButtonChoice';
import styles from '../../assets/scss/quiz.scss'
import button from '../../assets/scss/buttons.scss';

export default function Quiz ({ navigation }) {
    return (
        <View style={styles.container}>
            <Header 
                text="Seja bem-vindo (a) ao teste de perfil de investidor. Deseja iniciar o questionário?"
                navigation={navigation} />

            <View style={button.contentBtn}>
                <View style={button.optionsBtn}>
                    <ButtonChoice label="Sim, vamos lá!" onClick={() => navigation.navigate("DoingQuiz")} />
                    <ButtonChoice label="Não, talvez mais tarde!" onClick={() => navigation.goBack()} />
                </View>
            </View>
            <Image
                style={styles.imgQuiz}
                source = {require('../../assets/img/list.png')}
            />
            <Footer navigation={navigation} />
        </View>
      );
}