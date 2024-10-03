import { Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import styles from "../../assets/scss/input.scss"
import index from '../../assets/scss/index.scss';
import button from "../../assets/scss/buttons.scss"
import typo from "../../assets/scss/typography.scss"
import Button from "../../components/Buttons/Button";
import { Pressable } from "react-native";
import { getSelic } from "../../services/Rates";

function calcRend(type, invest, profitability, months, prefixado, rescue, dividends) {

  var result;

  switch (type) {
    case 'previdencia':
        result = (invest * (((1 + (profitability/12))**months) - 1)/(profitability/12)) * (1 + (profitability/12));
        //Taxas e Regime de Tributação
        break;
    case 'poupanca':
      result = invest*(1 + profitability)**months
      break;
    case 'tesouro':
      result = invest*(1 + (profitability/12))**months
      //Taxas e Regime de Tributação
      //let ir = (lucro > 0) ? lucro * 0.15 : 0; // 15% de IRlet ir = (lucro > 0) ? lucro * 0.15 : 0; // 15% de IR
      break;
    case 'fundos':
      result = ((invest * months) * (profitability/12)) + invest
      // menos IR, inflação e taxa de adm
      break;
    case 'fixa':
      result = invest*(1 + (profitability/12))**months
      break;
    case 'variavel':
      result = (final - invest + dividends) / invest * 100
      //Dividendos recebidos durante o período
      break;
    default:
      result = 0
  }

  return result.toFixed(2);
}

export default function Simulate({ type }) {
  
  const [date, setDate] = useState({ day: '', month: '', year: '' });
  const [invest, setInvest] = useState();
  const [rescue, setRescue] = useState();
  const [seeResult, setSeeResult] = useState(false);
  const [result, setResult] = useState(0);
  const [profitability, setProfitability] = useState();
  const [dividends, setDividends] = useState();
  const [prefixado, setPrefixado] = useState(true);
  const [period, setPeriod] = useState(0);
  const [selic, setSelic] = useState(10.75);
  const [taxaIsFixed, setTaxaIsFixed] = useState(false);
  const [impostRend, setTmpostRend] = useState();
  const [taxaRend, setTaxaRend] = useState('a.a%');

  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  useEffect(() => {

    if(type == 'poupanca') {
      setProfitability(0.5)
      setTaxaRend('a.m%')
    }
    
    if ((type == 'tesouro' || type == 'fixa') && !prefixado)
      setProfitability(selic)

    const asyncFn = async () => {
      var value = await getSelic()
      var taxa = Number(value[0]?.valor)

      setSelic(taxa);
    };

    // asyncFn();
  }, []);

  useEffect(() => {

    if(type == 'poupanca' || ((type == 'tesouro' || type == 'fixa') && !prefixado))
      setTaxaIsFixed(true)
    else setTaxaIsFixed(false)

    if((type == 'tesouro' || type == 'fixa') && !prefixado)
      setProfitability(selic)

    setSeeResult(false)

  }, [prefixado]);

  function calcResult() {
    var r;
    var months = 0;
    if(type == 'previdencia')
      months = Number(date.year) * 12;
    else {
      months += Number(date.month);
      if(type !== 'poupanca') {
        months += 12 - month;
        if(Number(date.year) - year > 1) {
          months += ((Number(date.year) - 1) - year) * 12;
        }
      }
    }
    
    r = calcRend(type, Number(invest), profitability/100, months, prefixado, rescue)
    
    setPeriod(months)
    setResult(r)
    setSeeResult(true)
  }
  
    return (
      <View style={index.content2}>

        {(type == 'tesouro' || type == 'fixa') && 
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
            {type !== 'previdencia' &&
              <TextInput
                style={styles.inputDate}
                placeholder="MM"
                value={date.month}
                onChangeText={(text) => setDate({ ...date, month: text })}
              />}
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
          <Text>Rentabilidade {taxaRend}</Text>
          <TextInput
            style={styles.input}
            value={profitability}
            onChangeText={(text) => setProfitability(text)}
            placeholder=" %"
          />
        </View>

        <View>
          <Text>Quanto você quer investir
            {(type == 'poupanca' || type == 'tesouro' || type == 'previdencia' || type == 'fixa') && " mensalmente"}?</Text>
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

        {/* {type == 'fundos' &&
        <>
          <View style={styles.inputDateV}>
            <Text style={{ marginRight: 30 }}>Aliquota</Text>
            <Text>IR</Text>
          </View>
          <View style={styles.inputDateV}>
            <TextInput
              style={styles.inputDate}
              value={date.year}
              onChangeText={(text) => setDate({ ...date, year: text })}
            />

            <TextInput
              style={styles.inputDate}
              value={impostRend}
              onChangeText={(value) => setIimpostRend(value)}
            />

          </View>
        </>
        } */}

        {type == 'previdencia' &&
          <View>
            <Text>Aliquota de Imposto de Renda</Text>
            <TextInput
              style={styles.inputDate}
              value={impostRend}
              onChangeText={(value) => setIimpostRend(value)}
            />
          </View>
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


  //Tesouro IPCA+ (NTN-B):
  //Rendimento: Valor investido × [(1 + taxa de juros) × (1 + IPCA)] ^ (número de anos)

  //Poupança sobre a Taxa de Juros
  // Se a taxa Selic for maior que 8% ao ano, a poupança rende 0,5% ao mês + a variação da TR (Taxa Referencial).
  // Se a taxa Selic for igual ou menor que 8% ao ano, a poupança rende 70% da Selic + a variação da TR.

  // O IR em renda fixa é cobrado sobre o rendimento, com alíquotas que variam de acordo com o prazo:
  // 22,5% para aplicações de até 180 dias
  // 20% para de 181 a 360 dias
  // 17,5% para de 361 a 720 dias
  // 15% para acima de 720 dias