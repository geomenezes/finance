import { Text, View } from 'react-native';
import Header from '../../components/Header/Header';
import styles from '../../assets/scss/index.scss'
import Footer from '../../components/Footer/Footer';
import typo from '../../assets/scss/typography.scss'

export default function Investments({ navigation }) {
  return (
    <View style={styles.container}>
        <Header navigation={navigation} />
        <Text style={typo.title_alt}>Investimentos</Text>
        <Footer navigation={navigation} />
    </View>
  );
}