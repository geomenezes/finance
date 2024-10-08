import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { VictoryPie } from 'victory-native';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function Investments({ route, navigation }) {
  const {
    valorTesouroDireto,
    valorCDB,
    valorLCI_LCA,
    valorFundosDI,
    valorAcoes,
    valorETFs,
    valorFundosMultimercado,
    valorFIIs,
    valorFundosRendaFixa,
    valorPGBL,
    valorVGBL,
  } = route.params || {};

  const formatarValor = (valor) => (isNaN(parseFloat(valor)) || valor === '' ? 0 : parseFloat(valor));

  const [totalInvestimentos, setTotalInvestimentos] = useState(0);

  useEffect(() => {
    const total =
      formatarValor(valorTesouroDireto) +
      formatarValor(valorCDB) +
      formatarValor(valorLCI_LCA) +
      formatarValor(valorFundosDI) +
      formatarValor(valorAcoes) +
      formatarValor(valorETFs) +
      formatarValor(valorFundosMultimercado) +
      formatarValor(valorFIIs) +
      formatarValor(valorFundosRendaFixa) +
      formatarValor(valorPGBL) +
      formatarValor(valorVGBL);

    setTotalInvestimentos(total);
  }, [valorTesouroDireto, valorCDB, valorLCI_LCA, valorFundosDI, valorAcoes, valorETFs, valorFundosMultimercado, valorFIIs, valorFundosRendaFixa, valorPGBL, valorVGBL]);

  const screenWidth = Dimensions.get('window').width;

  const dadosGrafico = [
    { x: 'Tesouro Direto', y: formatarValor(valorTesouroDireto), cor: '#338D81' },
    { x: 'CDB', y: formatarValor(valorCDB), cor: '#0DA980' },
    { x: 'LCI/LCA', y: formatarValor(valorLCI_LCA), cor: '#5FDDA0' },
    { x: 'Fundos DI', y: formatarValor(valorFundosDI), cor: '#A9DEBA' },
    { x: 'Ações (B3)', y: formatarValor(valorAcoes), cor: '#67C587' },
    { x: 'ETFs', y: formatarValor(valorETFs), cor: '#01464D' },
    { x: 'Fundos Multimercado', y: formatarValor(valorFundosMultimercado), cor: '#338D81' },
    { x: 'FIIs', y: formatarValor(valorFIIs), cor: '#0DA980' },
    { x: 'Fundos de Renda Fixa', y: formatarValor(valorFundosRendaFixa), cor: '#5FDDA0' },
    { x: 'PGBL', y: formatarValor(valorPGBL), cor: '#A9DEBA' },
    { x: 'VGBL', y: formatarValor(valorVGBL), cor: '#67C587' },
  ].filter(item => item.y > 0); // Remover categorias com valor zero

  return (
    <View style={stylesInvestimento.container}>
      <Header navigation={navigation} />
      <View style={stylesInvestimento.content}>
        <View style={stylesInvestimento.header}>
          <Text style={stylesInvestimento.titulo}>Acompanhe seus investimentos!</Text>
        </View>
        <Text style={stylesInvestimento.subtitulo}>Setembro, 2024</Text>

        <VictoryPie
          data={dadosGrafico}
          colorScale={dadosGrafico.map(item => item.cor)}
          style={{ labels: { fill: "black" } }}
          padAngle={3}
          innerRadius={40}
          width={screenWidth}
          height={220}
        />

        <Text style={stylesInvestimento.totalTexto}>Total: R$ {totalInvestimentos.toFixed(2)}</Text>

        <ScrollView contentContainerStyle={stylesInvestimento.scrollContainer} showsVerticalScrollIndicator={false}>
          <View style={stylesInvestimento.categoriasContainer}>
            {dadosGrafico.map((categoria) => (
              <View key={categoria.x} style={stylesInvestimento.categoriaItem}>
                <View style={[stylesInvestimento.retanguloCor, { backgroundColor: categoria.cor }]} />
                <View>
                  <Text style={stylesInvestimento.categoriaTitulo}>{categoria.x}</Text>
                  <Text style={stylesInvestimento.categoriaValor}>R$ {formatarValor(categoria.y).toFixed(2)}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}

const stylesInvestimento = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    flexGrow: 1,
  },
  header: {
    marginBottom: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004D40',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
    marginBottom: 20,
  },
  totalTexto: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#004D40',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 10,
  },
  categoriasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
  },
  categoriaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    width: '45%',
  },
  retanguloCor: {
    width: 7,
    height: 20,
    borderRadius: 5,
    marginRight: 25,
  },
  categoriaTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004D40',
  },
  categoriaValor: {
    fontSize: 14,
    color: '#757575',
  },
});
