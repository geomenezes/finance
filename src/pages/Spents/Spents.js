import { Text, View } from 'react-native';
import Header from '../../components/Header/Header';
import styles from '../../assets/scss/index.scss'
import Footer from '../../components/Footer/Footer';

export default function Spents({ navigation }) {
  return (
    <View style={styles.container}>
        <Header />
        <Text>Gastos</Text>
        <Footer navigation={navigation} />
    </View>
  );
}