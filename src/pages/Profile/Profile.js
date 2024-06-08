import { Text, View } from 'react-native';
import Header from '../../components/Header/Header';
import styles from '../../assets/scss/index.scss'
import Footer from '../../components/Footer/Footer';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
        <Header navigation={navigation} />
        <Text>Perfil</Text>
        <Footer navigation={navigation} />
    </View>
  );
}