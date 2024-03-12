
import { Text, View } from 'react-native';
import Header from '../../components/Header/Header';
import { StatusBar } from 'react-native-web';
import styles from '../../assets/scss/index.scss'

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Geovanna" />
        <Text>Pagina Home</Text>
        <StatusBar style="auto" />
    </View>
  );
}