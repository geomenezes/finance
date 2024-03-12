
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header/Header';
import { StatusBar } from 'react-native-web';

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Geovanna" />
        <Text>Pagina Home</Text>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
