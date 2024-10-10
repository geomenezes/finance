import { Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";
import styles from "../../assets/scss/input.scss"
import index from '../../assets/scss/index.scss';
import button from "../../assets/scss/buttons.scss"
import typo from "../../assets/scss/typography.scss"
import Button from "../../components/Buttons/Button";
import { Pressable } from "react-native";
import { getSelic } from "../../services/Rates";
import { transformFloatUni } from "../../components/Utils/Functions";

function calcRend(type, invest, profitability, months) {

  var result;

  switch (type) {
    case 'previdencia':
      result = invest*(1 + profitability)**months
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
      result = invest*(1 + profitability)**months
      break;
    default:
      result = 0
  }

  return result.toFixed(2);
}

export default function Simulate({ type }) {
  
  const [date, setDate] = useState({ day: '', month: '', year: '' });
  const [invest, setInvest] = useState();
  const [seeResult, setSeeResult] = useState(false);
  const [result, setResult] = useState(0);
  const [profitability, setProfitability] = useState();
  const [prefixado, setPrefixado] = useState(true);
  const [period, setPeriod] = useState(0);
  const [selic, setSelic] = useState(10.75);
  const [taxaIsFixed, setTaxaIsFixed] = useState(false);
  const [taxaRend, setTaxaRend] = useState('a.a%');
  const [error, setError] = useState(0);

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

    setError(0)
    setSeeResult(false)

    var r;
    var months = 0;
    
    if(invest == null || profitability == null){
      setError(3)
      
    } else if((Number(date.year) < year) || (Number(date.year) == year && Number(date.month) <= month) 
      || Number(date.month) > 12 || Number(date.month) < 1){
      setError(1)

    } else if(invest <= 0 || profitability <= 0) {
      setError(2)

    } else {

      var valueInvest = transformFloatUni(invest);
      var valueProfi = transformFloatUni(profitability);

        if(type == 'previdencia')
        months = Number(date.year) - year;
      else {
        months += Number(date.month);
        if(type !== 'poupanca') {
          months += 12 - month;
          if(Number(date.year) - year > 1) {
            months += ((Number(date.year) - 1) - year) * 12;
          }
        }
      }
      
      r = calcRend(type, Number(valueInvest), valueProfi/100, months)
      
      setPeriod(months)
      setResult(r)
      setSeeResult(true)
    }
    
  }
  
    return (
      <View style={index.content2}>

        {(type == 'tesouro' || type == 'fixa') && 
        <View style={button.content_invest}>
            <Pressable style={prefixado ? button.invest_select : button.invest} 
            onPress={() => setPrefixado(true)}>
                <Text style={prefixado ? typo.textCenter_white : typo.textCenter}>Prefixado</Text>
            </Pressable>
            <Pressable style={prefixado ? button.invest : button.invest_select} 
            onPress={() => setPrefixado(false)}>
                <Text style={prefixado ? typo.textCenter : typo.textCenter_white}>Pós-fixado</Text>
            </Pressable>
        </View>}
        {type == 'poupanca' ?
        <>
          <Text style={typo.spaceAbove}>Quanto tempo deseja deixar seu dinheiro investido?</Text>
          
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
          <Text style={typo.spaceAbove}>Vencimento</Text>
          
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
          <Text style={typo.spaceAbove}>Rentabilidade {taxaRend}</Text>
          <TextInput
            style={styles.input}
            value={profitability}
            onChangeText={(text) => setProfitability(text)}
            placeholder=" %"
          />
        </View>

        <View>
          <Text style={typo.spaceAbove}>Quanto você quer investir
            {(type == 'poupanca' || type == 'tesouro' || type == 'previdencia' || type == 'fixa') && " mensalmente"}?</Text>
          <TextInput
            style={styles.input}
            value={invest}
            onChangeText={(text) => setInvest(text)}
          />
        </View>

        <View style={{ marginTop: 30, marginBottom: 20 }}>
          <Button 
            onPress={() => calcResult()}
            title="Calcular"
            style={button.calc} />
        </View>
        {seeResult &&
          <View>
            <Text style={{ fontSize: '15px' }}>Em {period} {type == 'previdencia' ? "ano(s)" : "mes(es)"} o resultado estimado é R$ {result} *</Text>
            <Text style={typo.spaceAbove}>*Valor Bruto</Text>

          {type == "variavel" &&
              <Text style={{ marginTop: 30, margin: 15 }}>
              Projeções de Renda variável devem se basear também em análises como crescimento de lucros, 
              receita e potencial de mercado ou movimentos futuros do fundo.</Text>}
            
            {!prefixado &&
              <Text style={{ fontSize: '15px' }}>Com base na Taxa Selic a {profitability} %</Text>}
          </View>
        }

        {error > 0 &&
          <View>
            {error == 1 &&
              <Text style={{ fontSize: '15px', color: 'red' }}>Data incorreta</Text>}
            {error == 2 &&
              <Text style={{ fontSize: '15px', color: 'red' }}>Valor incorreto</Text>}
            {error == 3 &&
              <Text style={{ fontSize: '15px', color: 'red' }}>Preencha todos os campos</Text>}
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