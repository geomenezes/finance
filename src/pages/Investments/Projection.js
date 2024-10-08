import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, Alert } from 'react-native';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import styles from '../../assets/scss/index.scss';
import typo from '../../assets/scss/typography.scss';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory-native';
import { getSelic } from '../../services/Rates';

export default function Projection({ route, navigation }) {
  const { investments } = route.params; 
  const [totalInvested, setTotalInvested] = useState(0);
  const [projectedTotal, setProjectedTotal] = useState(0);
  const [selic, setSelic] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSelic = async () => {
      try {
        const selicData = await getSelic(); 
        if (selicData && selicData.length > 0) {
          setSelic(selicData[0].valor);
        } else {
          throw new Error("Dados da Selic não encontrados.");
        }
      } catch (err) {
        setError('Erro ao buscar a Selic.');
        Alert.alert('Erro', 'Não foi possível carregar a taxa Selic. Verifique sua conexão e tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchSelic();
  }, []);

  useEffect(() => {
    // Calcula o total investido
    const total = investments.reduce((acc, inv) => acc + parseFloat(inv.value || 0), 0);
    setTotalInvested(total);

    // Calcula com base na Selic
    if (selic) {
      const selicDecimal = parseFloat(selic) / 100;
      const projected = total * Math.pow(1 + selicDecimal, 1); 
      setProjectedTotal(projected);
    }
  }, [investments, selic]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Header navigation={navigation} />
        <ActivityIndicator size="large" color="#0DA980" />
        <Footer navigation={navigation} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Header navigation={navigation} />
        <Text style={typo.error}>{error}</Text>
        <Footer navigation={navigation} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      <ScrollView>
        <Text style={typo.title_alt}>Projeção de Investimentos</Text>

        <Text>Total Investido: R$ {totalInvested.toFixed(2)}</Text>

        <Text>Projeção com Selic ({selic}%): R$ {projectedTotal.toFixed(2)}</Text>

        <VictoryChart domainPadding={20}>
          <VictoryAxis
            tickValues={[1, 2]}
            tickFormat={['Valor Investido', 'Projeção']}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => `R$ ${x.toFixed(0)}`}
          />
          <VictoryBar
            data={[
              { x: 1, y: totalInvested },
              { x: 2, y: projectedTotal },
            ]}
            style={{ data: { fill: '#0DA980' } }} 
          />
        </VictoryChart>
      </ScrollView>

      <Footer navigation={navigation} />
    </View>
  );
}
