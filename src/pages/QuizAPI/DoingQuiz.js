import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

const sampleData = [
  { key: 1, amount: 50, svg: { fill: '#4CAF50' } },
  { key: 2, amount: 30, svg: { fill: '#FFC107' } },
  { key: 3, amount: 20, svg: { fill: '#FF5722' } },
];

export default function RelatorioGastos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relatório de Gastos</Text>
      <PieChart style={{ height: 200, marginVertical: 20 }} data={sampleData} innerRadius="70%" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#004D40',
    textAlign: 'center',
    marginBottom: 20,
  },
});
