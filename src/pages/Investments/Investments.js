import { Text, View } from 'react-native';
import Header from '../../components/Header/Header';
import styles from '../../assets/scss/index.scss'
import Footer from '../../components/Footer/Footer';
import typo from '../../assets/scss/typography.scss'
import { get } from '../../services/Services';
import { useEffect, useState } from 'react';

export default function Investments({ navigation }) {

  const [selic, setSelic] = useState([]);

  useEffect(() => {
    getSelic()
  }, []);

  function getSelic() {
    get("https://api.bcb.gov.br/dados/serie/bcdata.sgs.11/dados/ultimos/1?formato=json")
    .then((data) => {
      setSelic(data)
      console.log(data)
    })
  }

  return (
    <View style={styles.container}>
        <Header navigation={navigation} />
        <Text style={typo.title_alt}>Investimentos</Text>
        <Text>Taxa Selic atual {selic[0]?.valor} ({selic[0]?.data})</Text>
        <Footer navigation={navigation} />
    </View>
  );
}