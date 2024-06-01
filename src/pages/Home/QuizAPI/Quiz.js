import { Text, View } from 'react-native';
import styles from '../../assets/scss/index.scss'
import Footer from '../../../components/Footer/Footer';

export default function Quiz () {
    return (
        <View style={styles.container}>
            {/* <Header name="Geovanna" /> */}
            <Text>Quiz</Text>
            {/* <StatusBar style="auto" /> */}
            <Footer />
            {console.log('quiz')}
        </View>
      );
}