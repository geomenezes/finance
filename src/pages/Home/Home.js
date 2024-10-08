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
              label={data.label}
              icon={data.icon}
              onClick={() => navigation.navigate('Learn', { name: data.name, label: data.label })}
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
    label: "Previdência Privada",
    name: "previdencia",
    icon: require('../../assets/icons/previdencia.png'),
  },
  {
    label: "Caderneta de Poupança",
    name: "poupanca",
    icon: require('../../assets/icons/poupanca.png'),
  },
  {
    label: "Tesouro Direto",
    name: "tesouro",
    icon: require('../../assets/icons/tesouro.png'),
  },
  {
    label: "Fundos de Investimento",
    name: "fundos",
    icon: require('../../assets/icons/fundos.png'),
  },
  {
    label: "Renda Fixa",
    name: "fixa",
    icon: require('../../assets/icons/fixa.png'),
  },
  {
    label: "Renda Variável",
    name: "variavel",
    icon: require('../../assets/icons/variavel.png'),
  }
];
