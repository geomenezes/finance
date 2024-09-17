import { Text, TextInput, View } from "react-native";
import { useState } from "react";
import styles from "../../assets/scss/input.scss"
import index from '../../assets/scss/index.scss';
import button from "../../assets/scss/buttons.scss"
import typo from "../../assets/scss/typography.scss"
import Button from "../../components/Buttons/Button";
import { Pressable } from "react-native";

export default function Simulate({ type }) {
  
  const [data, setData] = useState({ day: '', month: '', year: '' });
  const [invest, setInvest] = useState('');
  const [rescue, setRescue] = useState('');
  const [seeResult, setSeeResult] = useState(false);
  const [result, setResult] = useState(0);
  const [profitability, setProfitability] = useState(0);
  const [prefixado, setPrefixado] = useState(true);

  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  function calcResult() {
    let r;
    if(prefixado) {
      r = (invest*profitability)/100
    }
    setResult(r)
    setSeeResult(true)
  }
  
    return (
      <View style={index.content2}>

        {type == 'tesouro' && 
        <View style={button.content_invest}>
            <Pressable style={prefixado ? button.invest_select : button.invest} 
            onPress={() => setPrefixado(true)}>
                <Text style={typo.textCenter}>Prefixado</Text>
            </Pressable>
            <Pressable style={prefixado ? button.invest : button.invest_select} 
            onPress={() => setPrefixado(false)}>
                <Text style={typo.textCenter}>Pós-fixado</Text>
            </Pressable>
        </View>}
        
        <Text>Vencimento</Text>
        
        <View style={styles.inputDateV}>
          <TextInput
            style={styles.inputDate}
            placeholder="DD"
            value={data.day}
            onChangeText={(text) => setData({ ...data, day: text })}
          />
          <TextInput
            style={styles.inputDate}
            placeholder="MM"
            value={data.month}
            onChangeText={(text) => setData({ ...data, month: text })}
          />
          <TextInput
            style={styles.inputDate}
            placeholder="AAAA"
            value={data.year}
            onChangeText={(text) => setData({ ...data, year: text })}
          />
        </View>

        <View>
          <Text>Rentabilidade</Text>
          <TextInput
            style={styles.input}
            value={profitability}
            onChangeText={(text) => setProfitability(text)}
            // editable='false'
          />
        </View>

        <View>
          <Text>Quanto você quer investir mensalmente?</Text>
          <TextInput
            style={styles.input}
            value={invest}
            onChangeText={(text) => setInvest(text)}
          />
          <Text>Quanto você quer resgatar no futuro?</Text>
          <TextInput
            style={styles.input}
            value={rescue}
            onChangeText={(text) => setRescue(text)}
          />
        </View>

        <Button 
          onPress={() => calcResult()}
          title="Calcular"
          style={button.calc} />

        {seeResult &&
          <View>
            <Text>Resultado Estimado: {result}</Text>
          </View>
        }

        </View>
    );
  }