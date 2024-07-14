
import { Text, View } from 'react-native';
import Header from '../../components/Header/Header';
import styles from '../../assets/scss/index.scss'
import typo from '../../assets/scss/typography.scss'
import Footer from '../../components/Footer/Footer';
import ButtonChoice from '../../components/Buttons/ButtonChoice';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <Header name="Geovanna" />
        {/* <Text style={typo.title_alt}>Home</Text> */}

        {actionsHome.map((data, key) => (
		<>
          <ButtonChoice 
            key={key}
            label={data.name} 
            // onClick={() => {
            //     setCurrentPoint(e.value)
            //     setSeeNext(true)
            //     changeColor(key, questions[step].alternatives)
            //     if(questions[step]?.reference)
            //         setReference([questions[step]?.reference])
            // }}
          />
		</>
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
]