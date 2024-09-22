import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

export default function EditSpents({ route, navigation }) {

  // Verificando se os parâmetros estão disponíveis para extrair os valores
  const { descricao, valor, categoria, tipoLancamento } = route.params || {};

  if (!descricao || valor === undefined || !categoria || !tipoLancamento) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erro: Dados não disponíveis.</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.footerButton}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const imagensCategoria = {
    Casa: require('../../assets/img/casa.png'),
    Alimentação: require('../../assets/img/alimentacao.png'),
    Saúde: require('../../assets/img/saude.png'),
    Educação: require('../../assets/img/educacao.png'),
    Lazer: require('../../assets/img/lazer.png'),
    Outros: require('../../assets/img/outros.png'),
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Acompanhe o relatório dos seus gastos!</Text>
        <Text style={styles.monthText}>Janeiro, 2024</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <Image source={imagensCategoria[categoria]} style={styles.icon} />
          <View>
            <Text style={styles.descricao}>{descricao}</Text>
            <Text style={styles.categoria}>{categoria} | {tipoLancamento}</Text>
          </View>
          <Text style={[styles.valor, { color: valor < 0 ? 'red' : 'green' }]}>
            {valor < 0 ? `-R$ ${Math.abs(valor)}` : `R$ ${valor}`}
          </Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Image source={require('../../assets/img/editSpents.png')} style={styles.editIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.footerButton}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#01464D',
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  monthText: {
    fontSize: 16,
    color: '#FFF',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#FFF',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  descricao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#01464D',
  },
  categoria: {
    fontSize: 14,
    color: '#7A7A7A',
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  editIcon: {
    width: 20,
    height: 20,
  },
  footer: {
    padding: 10,
    alignItems: 'center',
  },
  footerButton: {
    fontSize: 16,
    color: '#0DA980',
    fontWeight: 'bold',
  },
  errorText: {
    textAlign: 'center',
    color: 'red',
  },
});
