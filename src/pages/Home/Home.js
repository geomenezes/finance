
import { Text, View } from 'react-native';
import Header from '../../components/Header/Header';
import styles from '../../assets/scss/index.scss'
import typo from '../../assets/scss/typography.scss'
import Footer from '../../components/Footer/Footer';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <Header name="Geovanna" />
        <Text style={typo.title_alt}>Home</Text>
        <Footer navigation={navigation} />
    </View>
  );
}