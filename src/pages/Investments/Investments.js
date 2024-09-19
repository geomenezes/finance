import { Text, View } from 'react-native';
import Header from '../../components/Header/Header';
import styles from '../../assets/scss/index.scss'
import Footer from '../../components/Footer/Footer';
import typo from '../../assets/scss/typography.scss'
import { get } from '../../services/Services';
import { useEffect, useState } from 'react';
import { getSelic } from '../../services/Rates';

export default function Investments({ navigation }) {

  const [selic, setSelic] = useState([]);

  useEffect(() => {
    
    const asyncFn = async () => {
      setSelic(await getSelic());
    };

    asyncFn();
  }, []);
  
  return (
    <View style={styles.container}>
        <Header navigation={navigation} />
        <Text style={typo.title_alt}>Investimentos</Text>
        <Text>Taxa Selic atual {selic[0]?.valor} ({selic[0]?.data})</Text>
        <Footer navigation={navigation} />
    </View>
  );
}