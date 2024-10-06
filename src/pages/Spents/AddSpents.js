import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker, Alert } from 'react-native';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

export default function AddSpents({ navigation }) {
  const [tipoLancamento, setTipoLancamento] = useState(null);
  const [recorrencia, setRecorrencia] = useState(null);
  const [parceladoDesabilitado, setParceladoDesabilitado] = useState(false);
  const [quantidade, setQuantidade] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  const handleTipoLancamento = (tipo) => {
    setTipoLancamento(tipo);
    if (tipo === 'Receita') {
      setParceladoDesabilitado(true);
      setRecorrencia(null);
    } else {
      setParceladoDesabilitado(false);
    }
  };

  const handleRecorrencia = (tipo) => {
    setRecorrencia(tipo);
    if (tipo === 'Parcelado' || tipo === 'Fixo') {
      setQuantidade('');
      setPeriodo('');
    }
  };

  const handleSave = () => {
    if (!descricao || !valor || !tipoLancamento || (recorrencia === 'Parcelado' && !quantidade) || (recorrencia && !periodo)) {
      Alert.alert('Preencha todos os campos', 'Por favor, preencha todos os campos para salvar!', [{ text: 'OK' }]);
      return;
    }

    // Passa os dados para a tela Spents
    navigation.navigate('Spents', {
      novaDespesa: {
        descricao,
        valor: parseFloat(valor),
        tipoLancamento,
        recorrencia,
        quantidade,
        periodo,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Text style={styles.header}>Acompanhe o relatório dos seus gastos!</Text>
      
      <View style={styles.content}>
        <TextInput 
          style={[styles.input, styles.descricaoInput]} 
          placeholder="Digite a descrição aqui..." 
          placeholderTextColor="#7A7A7A" 
          value={descricao}
          onChangeText={setDescricao}
          multiline={true}
          numberOfLines={4}
        />
        <TextInput 
          style={styles.input}
          placeholder="R$"
          placeholderTextColor="#7A7A7A" 
          inputMode="numeric"
          value={valor}
          onChangeText={setValor}
        />

        <Text style={styles.label}>Categoria:</Text>
        <View style={styles.pickerContainer}>
          <Picker 
            style={styles.picker}
            selectedValue={descricao}
            onValueChange={(itemValue) => setDescricao(itemValue)}
          >
            <Picker.Item label="Outros" value="outros" />
            <Picker.Item label="Alimentação" value="alimentacao" />
            <Picker.Item label="Transporte" value="transporte" />
            <Picker.Item label="Casa" value="casa" />
            <Picker.Item label="Educação" value="educacao" />
            <Picker.Item label="Lazer" value="lazer" />
          </Picker>
        </View>

        <Text style={styles.label}>Data:</Text>
        <View style={styles.dateContainer}>
          <TextInput style={styles.dateInput} placeholder="dd" maxLength={2} inputMode="numeric" />
          <TextInput style={styles.dateInput} placeholder="mm" maxLength={2} inputMode="numeric" />
          <TextInput style={styles.dateInput} placeholder="aaaa" maxLength={4} inputMode="numeric" />
        </View>

        <Text style={styles.label}>Tipo de lançamento:</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, tipoLancamento === 'Receita' && styles.selectedButton]}
            onPress={() => handleTipoLancamento('Receita')}
          >
            <Text style={styles.buttonText}>Receita</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, tipoLancamento === 'Despesa' && styles.selectedButton]}
            onPress={() => handleTipoLancamento('Despesa')}
          >
            <Text style={styles.buttonText}>Despesa</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Recorrência:</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, recorrencia === 'Fixo' && styles.selectedButton]}
            onPress={() => handleRecorrencia('Fixo')}
          >
            <Text style={styles.buttonText}>Fixo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, recorrencia === 'Parcelado' && styles.selectedButton, parceladoDesabilitado && styles.disabledButton]}
            onPress={() => !parceladoDesabilitado && handleRecorrencia('Parcelado')}
            disabled={parceladoDesabilitado}
          >
            <Text style={styles.buttonText}>Parcelado</Text>
          </TouchableOpacity>
        </View>

        {(recorrencia === 'Parcelado' || recorrencia === 'Fixo') && (
          <View style={styles.extraContainer}>
            <TextInput
              style={styles.input}
              placeholder="Quantidade"
              value={quantidade}
              onChangeText={setQuantidade}
              inputMode="numeric"
            />
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={periodo}
                style={styles.picker}
                onValueChange={(itemValue) => setPeriodo(itemValue)}
              >
                <Picker.Item label="Semanas" value="semanas" />
                <Picker.Item label="Meses" value="meses" />
                <Picker.Item label="Anos" value="anos" />
              </Picker>
            </View>
          </View>
        )}

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>

      <Footer navigation={navigation} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    flex: 1,
  },
  header: {
    fontFamily: 'Roboto Flex',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#01464D',
  },
  input: {
    fontFamily: 'Roboto Flex',
    fontSize: 16,
    backgroundColor: '#F5F5F5',
    borderBottomColor: '#A9A9A9', 
    borderBottomWidth: 1, 
    paddingVertical: 12,
    marginVertical: 10,
    color: '#857777',
  },
  descricaoInput: {
    height: 100, 
    verticalAlign: 'top', 
  },
  pickerContainer: {
    backgroundColor: '#F5F5F5', 
    borderRadius: 10,
    marginVertical: 0,
  },
  picker: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    fontFamily: 'Roboto Flex',
    backgroundColor: '#F5F5F5',
    color: '#857777', 
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInput: {
    fontFamily: 'Roboto Flex',
    fontSize: 16,
    backgroundColor: '#F5F5F5',
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
    padding: 12,
    width: '30%',
    color: '#857777',
  },
  label: {
    fontFamily: 'Roboto Flex',
    fontSize: 16,
    marginTop: 20,
    color: '#857777',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedButton: {
    backgroundColor: '#0DA980',
  },
  disabledButton: {
    backgroundColor: '#CFCFCF',
  },
  buttonText: {
    fontFamily: 'Roboto Flex',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#857777',
  },
  extraContainer: {
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#0DA980',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  saveButtonText: {
    color: '#fff',
  }
});
