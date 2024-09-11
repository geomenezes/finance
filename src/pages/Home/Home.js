import { Text, View, StyleSheet } from 'react-native';
import Header from '../../components/Header/Header';
import styles from '../../assets/scss/index.scss';
import typo from '../../assets/scss/typography.scss';
import Footer from '../../components/Footer/Footer';
import ButtonChoice from '../../components/Buttons/ButtonChoice';
import Button from '../../components/Buttons/Button';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header name="Geovanna" />

    <View style={styles.buttonC}>
      <Button
        style={styles.centralButton}
        onPress={() => navigation.navigate('Spents')}
        title="Despesas e planejamento financeiro"
        icon={require('../../assets/icons/despesas.png')} 
      />
    </View>

      <View style={styles.content}>
      
        <View style={styles.options}>
          {actionsHome.map((data, key) => (
            <ButtonChoice 
              key={key}
              label={data.name}
              icon={data.icon}
              onClick={() => navigation.navigate('Learn', { name: data.name })}
            />
          ))}
        </View>
      </View>

      <Footer navigation={navigation} />

    </View>
  );
}

const actionsHome = [
  {
    name: "Previdência Privada",
    icon: require('../../assets/icons/previdencia.png'),
  },
  {
    name: "Caderneta de Poupança",
    icon: require('../../assets/icons/poupanca.png'),
  },
  {
    name: "Tesouro Direto",
    icon: require('../../assets/icons/tesouro.png'),
  },
  {
    name: "Fundos de Investimento",
    icon: require('../../assets/icons/fundos.png'),
  },
  {
    name: "Renda Fixa",
    icon: require('../../assets/icons/fixa.png'),
  },
  {
    name: "Renda Variável",
    icon: require('../../assets/icons/variavel.png'),
  }
];
