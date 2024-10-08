import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { VictoryPie } from 'victory-native';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Spents({ route, navigation }) {
  const { valorCasa, valorAlimentacao, valorSaude, valorEducacao, valorLazer, valorOutros } = route.params || {};

  const formatarValor = (valor) => isNaN(parseFloat(valor)) || valor === '' ? 0 : parseFloat(valor);

  const totalGastos =
    formatarValor(valorCasa) +
    formatarValor(valorAlimentacao) +
    formatarValor(valorSaude) +
    formatarValor(valorEducacao) +
    formatarValor(valorLazer) +
    formatarValor(valorOutros);

  const calcularPercentual = (valor) => {
    if (totalGastos === 0) return 0;
    return ((formatarValor(valor) / totalGastos) * 100).toFixed(2);
  };

  const screenWidth = Dimensions.get('window').width;

  const dadosGrafico = [
    { x: 'Casa', y: formatarValor(valorCasa), cor: '#338D81' },
    { x: 'Alimentação', y: formatarValor(valorAlimentacao), cor: '#0DA980' },
    { x: 'Saúde', y: formatarValor(valorSaude), cor: '#5FDDA0' },
    { x: 'Educação', y: formatarValor(valorEducacao), cor: '#A9DEBA' },
    { x: 'Lazer', y: formatarValor(valorLazer), cor: '#67C587' },
    { x: 'Outros', y: formatarValor(valorOutros), cor: '#01464D' },
  ];

  const imagensCategoria = {
    Casa: require('../../assets/img/casa.png'),
    Alimentação: require('../../assets/img/alimentacao.png'),
    Saúde: require('../../assets/img/saude.png'),
    Educação: require('../../assets/img/educacao.png'),
    Lazer: require('../../assets/img/lazer.png'),
    Outros: require('../../assets/img/outros.png'),
  };

  return (
    <View style={stylesRelatorio.container}>
      <Header navigation={navigation} />
      <View style={stylesRelatorio.content}>
        <View style={stylesRelatorio.header}>
          <Text style={stylesRelatorio.titulo}>Acompanhe o relatório dos seus gastos!</Text>
        </View>
        <Text style={stylesRelatorio.subtitulo}>Janeiro, 2024</Text>

        <VictoryPie
          data={dadosGrafico}
          colorScale={dadosGrafico.map(item => item.cor)}
          style={{ labels: { fill: "black" } }}
          padAngle={3}
          innerRadius={40}
          width={screenWidth}
          height={220}
        />

        <Text style={stylesRelatorio.totalTexto}>Total R$ {totalGastos.toFixed(2)}</Text>

        <View style={stylesRelatorio.categoriasContainer}>
          {dadosGrafico.map((categoria) => (
            <View key={categoria.x} style={stylesRelatorio.categoriaItem}>
              <View style={[stylesRelatorio.circuloIcone, { backgroundColor: categoria.cor }]}>
                <Image source={imagensCategoria[categoria.x]} style={stylesRelatorio.categoriaIcone} />
              </View>
              <View>
                <Text style={stylesRelatorio.categoriaTitulo}>{categoria.x}</Text>
                <Text style={stylesRelatorio.categoriaPorcentagem}>{calcularPercentual(categoria.y)}%</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={stylesRelatorio.buttonContainer}>
          <TouchableOpacity style={stylesRelatorio.addButton} onPress={() => navigation.navigate("AddSpents")}>
            <Image source={require('../../assets/img/plusSpents.png')} style={stylesRelatorio.addButtonImage} />
          </TouchableOpacity>
          <TouchableOpacity style={stylesRelatorio.editButton} onPress={() => navigation.navigate("EditSpents")}>
            <Image source={require('../../assets/img/editList.png')} style={stylesRelatorio.addButtonImage} />
          </TouchableOpacity>
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}

const stylesRelatorio = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    flex: 1,
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoriasColuna: {
    flexDirection: 'column',
    flex: 1,
    marginRight: 10,
  },
  categoriaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  circuloIcone: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  categoriaIcone: {
    width: 30,
    height: 30,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 80,
    left: 20,
    right: 20,
  },
  addButton: {
    backgroundColor: 'transparent',
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  editButton: {
    backgroundColor: 'transparent',
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  addButtonImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});
