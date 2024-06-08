
import { Text, View } from 'react-native';
import Header from '../../components/Header/Header';
import styles from '../../assets/scss/index.scss'
import Footer from '../../components/Footer/Footer';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <Header name="Geovanna" />
        <Text>Home</Text>
        <Footer navigation={navigation} />
    </View>
  );
}