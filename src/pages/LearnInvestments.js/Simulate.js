import { Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import styles from "../../assets/scss/input.scss"
import index from '../../assets/scss/index.scss';
import button from "../../assets/scss/buttons.scss"
import typo from "../../assets/scss/typography.scss"
import Button from "../../components/Buttons/Button";
import { Pressable } from "react-native";
import { getSelic } from "../../services/Rates";

export default function Simulate({ type }) {
  
  const [date, setDate] = useState({ day: '', month: '', year: '' });
  const [invest, setInvest] = useState();
  const [rescue, setRescue] = useState();
  const [seeResult, setSeeResult] = useState(false);
  const [result, setResult] = useState(0);
  const [profitability, setProfitability] = useState();
  const [prefixado, setPrefixado] = useState(true);
  const [period, setPeriod] = useState(0);
  const [selic, setSelic] = useState(0);
  const [taxaIsFixed, setTaxaIsFixed] = useState(false);

  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  useEffect(() => {

    if(type == 'poupanca')
      setProfitability(0.5)

    const asyncFn = async () => {
      var value = await getSelic()
      var taxa = Number(value[0]?.valor)
      // taxa = (1+taxa)**(30-1)
      // taxa = (1+taxa)**(12-1)
      setSelic(taxa);
    };

    asyncFn();
  }, []);

  useEffect(() => {

    if(type == 'poupanca' || (type == 'tesouro' && !prefixado))
      setTaxaIsFixed(true)

    if (type == 'tesouro' && !prefixado)
      setProfitability(selic*100)

  }, [prefixado]);

  function calcResult() {
    var r;
    var months = 0;

    months += Number(date.month);
    if(type !== 'poupanca') {
      months += 12 - month;
      if(Number(date.year) - year > 1) {
        months += ((Number(date.year) - 1) - year) * 12;
      }
    }
    
    montantePorMes = invest*months
    rentabilidade = profitability/100;
    r = montantePorMes + (montantePorMes*rentabilidade)
    
    setPeriod(months)
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
        {type == 'poupanca' ?
        <>
          <Text>Quanto tempo deseja deixar seu dinheiro investido?</Text>
                  
          <View style={styles.inputDateV}>
            <TextInput
              style={styles.inputDate}
              placeholder="MM"
              value={date.month}
              onChangeText={(text) => setDate({ ...date, month: text })}
            />
          </View>
        </>
        :
        <>
          <Text>Vencimento</Text>
          
          <View style={styles.inputDateV}>
            {/* <TextInput
              style={styles.inputDate}
              placeholder="DD"
              value={date.day}
              onChangeText={(text) => setDate({ ...date, day: text })}
            /> */}
            <TextInput
              style={styles.inputDate}
              placeholder="MM"
              value={date.month}
              onChangeText={(text) => setDate({ ...date, month: text })}
            />
            <TextInput
              style={styles.inputDate}
              placeholder="AAAA"
              value={date.year}
              onChangeText={(text) => setDate({ ...date, year: text })}
            />
          </View>
        </>
        }

        <View pointerEvents={taxaIsFixed ? 'none' : ''}>
          <Text>Rentabilidade</Text>
          <TextInput
            style={styles.input}
            value={profitability}
            onChangeText={(text) => setProfitability(text)}
            placeholder=" %"
          />
        </View>

        <View>
          <Text>Quanto você quer investir{(type == 'poupanca' || type == 'tesouro' || type == 'previdencia') && " mensalmente"}?</Text>
          <TextInput
            style={styles.input}
            value={invest}
            onChangeText={(text) => setInvest(text)}
          />
          {/* <Text>Quanto você quer resgatar no futuro?</Text>
          <TextInput
            style={styles.input}
            value={rescue}
            onChangeText={(text) => setRescue(text)}
          /> */}
        </View>

        {type == 'fundos' &&
        <>
          <View style={styles.inputDateV}>
            <Text style={{ marginRight: 30 }}>Taxa de Administração</Text>
            <Text>IR</Text>
          </View>
          <View style={styles.inputDateV}>
            <TextInput
              style={styles.inputDate}
              value={date.month}
              onChangeText={(text) => setDate({ ...date, month: text })}
            />

            <TextInput
              style={styles.inputDate}
              value={date.year}
              onChangeText={(text) => setDate({ ...date, year: text })}
            />
          </View>
        </>
        }

        <Button 
          onPress={() => calcResult()}
          title="Calcular"
          style={button.calc} />

        {seeResult &&
          <View>
            <Text style={{ fontSize: '15px' }}>Em {period} meses o resultado estimado é R$ {result} *</Text>
            <Text>*Valor Bruto</Text>
            {!prefixado &&
              <Text style={{ fontSize: '15px' }}>Com base na Taxa Selic a {profitability} %</Text>}
          </View>
        }

        </View>
    );
  }