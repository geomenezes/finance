import { Text, View, StyleSheet } from 'react-native';
import Header from '../../components/Header/Header';
import styles from '../../assets/scss/index.scss';
import typo from '../../assets/scss/typography.scss';
import Footer from '../../components/Footer/Footer';
import ButtonChoice from '../../components/Buttons/ButtonChoice';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header name="Geovanna" />
      
      <View style={styles.content}>
        <ButtonChoice
          label="Despesas e planejamento financeiro"
          onPress={() => navigation.navigate('Spents')}
          style={styles.centralButton}
        />
      </View>

      {actionsHome.map((data, key) => (
        <ButtonChoice 
          key={key}
          label={data.name}
        />
      ))}
      <Footer navigation={navigation} />
    </View>
  );
}

const actionsHome = [
  {
    name: "Previdência Privada",
    action: "",
    icon: "",
  },
  {
    name: "Caderneta de Poupança",
    action: "",
    icon: "",
  },
  {
    name: "Tesouro Direto",
    action: "",
    icon: "",
  },
  {
    name: "Fundos de Investimento",
    action: "",
    icon: "",
  },
  {
    name: "Renda Fixa",
    action: "",
    icon: "",
  },
  {
    name: "Renda Variável",
    action: "",
    icon: "",
  }
];

const customStyles = StyleSheet.create({
  centralButton: {
    backgroundColor: '#01464D',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
