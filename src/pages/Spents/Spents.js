import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import Header from '../../components/Header/Header';
import styles from '../../assets/scss/index.scss'
import Footer from '../../components/Footer/Footer';
import typo from '../../assets/scss/typography.scss';


export default function Spents({ navigation }) {
  // Estados para os valores das categorias
  const [valorCasa, setValorCasa] = useState(0);
  const [valorAlimentacao, setValorAlimentacao] = useState(0);
  const [valorSaude, setValorSaude] = useState(0);
  const [valorEducacao, setValorEducacao] = useState(0);
  const [valorLazer, setValorLazer] = useState(0);
  const [valorOutros, setValorOutros] = useState(0);

  // Cálculo do total
  const totalGastos = parseFloat(valorCasa) + parseFloat(valorAlimentacao) + parseFloat(valorSaude) + parseFloat(valorEducacao) + parseFloat(valorLazer) + parseFloat(valorOutros);

  // Cálculo do percentual de cada categoria
  const calcularPercentual = (valor) => {
    if (totalGastos === 0) return 0;
    return ((parseFloat(valor) / totalGastos) * 100).toFixed(2);
  };

  // Dados para o gráfico
  const dadosGrafico = [
    { key: 1, amount: valorCasa, svg: { fill: '#4CAF50' } },
    { key: 2, amount: valorAlimentacao, svg: { fill: '#FFC107' } },
    { key: 3, amount: valorSaude, svg: { fill: '#FF5722' } },
    { key: 4, amount: valorEducacao, svg: { fill: '#03A9F4' } },
    { key: 5, amount: valorLazer, svg: { fill: '#009688' } },
    { key: 6, amount: valorOutros, svg: { fill: '#607D8B' } },
  ];

  return (
    <View style={stylesRelatorio.container}>
      <Header />
      <View style={stylesRelatorio.header}>
        <Text style={stylesRelatorio.titulo}>Acompanhe o relatório dos seus gastos!</Text>
      </View>

      <Text style={stylesRelatorio.subtitulo}>Janeiro, 2024</Text>

      <PieChart style={{ height: 200, marginVertical: 20 }} data={dadosGrafico} innerRadius="70%" />

      <Text style={stylesRelatorio.totalTexto}>Total R$ {totalGastos.toFixed(2)}</Text>

      <View style={stylesRelatorio.categoriasContainer}>
        <View style={stylesRelatorio.categoriaItem}>
          <Image source={require('../../assets/img/casa.png')} style={stylesRelatorio.categoriaIcone} />
          <View>
            <Text style={stylesRelatorio.categoriaTitulo}>Casa</Text>
            <TextInput
              style={stylesRelatorio.categoriaInput}
              keyboardType="numeric"
              value={valorCasa.toString()}
              onChangeText={setValorCasa}
              placeholder="R$"
            />
            <Text style={stylesRelatorio.categoriaPorcentagem}>{calcularPercentual(valorCasa)}%</Text>
          </View>
        </View>

        <View style={stylesRelatorio.categoriaItem}>
          <Image source={require('../../assets/img/alimentacao.png')} style={stylesRelatorio.categoriaIcone} />
          <View>
            <Text style={stylesRelatorio.categoriaTitulo}>Alimentação</Text>
            <TextInput
              style={stylesRelatorio.categoriaInput}
              keyboardType="numeric"
              value={valorAlimentacao.toString()}
              onChangeText={setValorAlimentacao}
              placeholder="R$"
            />
            <Text style={stylesRelatorio.categoriaPorcentagem}>{calcularPercentual(valorAlimentacao)}%</Text>
          </View>
        </View>

        <View style={stylesRelatorio.categoriaItem}>
          <Image source={require('../../assets/img/saude.png')} style={stylesRelatorio.categoriaIcone} />
          <View>
            <Text style={stylesRelatorio.categoriaTitulo}>Saúde</Text>
            <TextInput
              style={stylesRelatorio.categoriaInput}
              keyboardType="numeric"
              value={valorSaude.toString()}
              onChangeText={setValorSaude}
              placeholder="R$"
            />
            <Text style={stylesRelatorio.categoriaPorcentagem}>{calcularPercentual(valorSaude)}%</Text>
          </View>
        </View>

        <View style={stylesRelatorio.categoriaItem}>
          <Image source={require('../../assets/img/educacao.png')} style={stylesRelatorio.categoriaIcone} />
          <View>
            <Text style={stylesRelatorio.categoriaTitulo}>Educação</Text>
            <TextInput
              style={stylesRelatorio.categoriaInput}
              keyboardType="numeric"
              value={valorEducacao.toString()}
              onChangeText={setValorEducacao}
              placeholder="R$"
            />
            <Text style={stylesRelatorio.categoriaPorcentagem}>{calcularPercentual(valorEducacao)}%</Text>
          </View>
        </View>

        <View style={stylesRelatorio.categoriaItem}>
          <Image source={require('../../assets/img/lazer.png')} style={stylesRelatorio.categoriaIcone} />
          <View>
            <Text style={stylesRelatorio.categoriaTitulo}>Lazer</Text>
            <TextInput
              style={stylesRelatorio.categoriaInput}
              keyboardType="numeric"
              value={valorLazer.toString()}
              onChangeText={setValorLazer}
              placeholder="R$"
            />
            <Text style={stylesRelatorio.categoriaPorcentagem}>{calcularPercentual(valorLazer)}%</Text>
          </View>
        </View>

        <View style={stylesRelatorio.categoriaItem}>
          <Image source={require('../../assets/img/outros.png')} style={stylesRelatorio.categoriaIcone} />
          <View>
            <Text style={stylesRelatorio.categoriaTitulo}>Outros</Text>
            <TextInput
              style={stylesRelatorio.categoriaInput}
              keyboardType="numeric"
              value={valorOutros.toString()}
              onChangeText={setValorOutros}
              placeholder="R$"
            />
            <Text style={stylesRelatorio.categoriaPorcentagem}>{calcularPercentual(valorOutros)}%</Text>
          </View>
        </View>
      </View>

      <Footer />
    </View>
  );
}

const stylesRelatorio = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004D40',
  },
  subtitulo: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
  },
  totalTexto: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#004D40',
  },
  categoriasContainer: {
    marginBottom: 20,
  },
  categoriaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoriaIcone: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  categoriaTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004D40',
  },
  categoriaInput: {
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    width: 100,
    textAlign: 'center',
  },
  categoriaPorcentagem: {
    fontSize: 14,
    color: '#757575',
  },
});
