import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import scssStyles from '../../assets/scss/index.scss'; // Importação dos estilos SCSS
import typo from '../../assets/scss/typography.scss';
import Footer from '../../components/Footer/Footer';
import HeaderProfile from '../../components/headerProfile/HeaderProfile';

export default function EditProfile({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [genero, setGenero] = useState('');
  const [datanasc, setDataNasc] = useState({ day: '', month: '', year: '' });

  const handleSave = () => {
    // Função para salvar os dados alterados
  };

  return (
    <View style={scssStyles.container}>
      <HeaderProfile navigation={navigation} name={nome} />
      <View style={localStyles.header}>
        <Text style={localStyles.headerTitle}>Editar Perfil</Text>
        <TouchableOpacity onPress={handleSave}>
          <Image source={require('../../assets/img/edit.png')} style={localStyles.editIcon} />
        </TouchableOpacity>
      </View>
    
      <View style={localStyles.form}>
        <TextInput
          style={localStyles.input}
          onChangeText={setNome}
          value={nome}
          placeholder="Nome completo"
          keyboardType="default"
        />
        <TextInput
          style={localStyles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="E-mail"
          keyboardType="email-address"
        />
        <View style={localStyles.generoContainer}>
          <TouchableOpacity
            style={[
              localStyles.generoBox,
              genero === 'F' && localStyles.generoSelecionado
            ]}
            onPress={() => setGenero('F')}
          >
            <Text style={localStyles.generoTexto}>F</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              localStyles.generoBox,
              genero === 'M' && localStyles.generoSelecionado
            ]}
            onPress={() => setGenero('M')}
          >
            <Text style={localStyles.generoTexto}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              localStyles.generoBox,
              genero === 'Outro' && localStyles.generoSelecionado
            ]}
            onPress={() => setGenero('Outro')}
          >
            <Text style={localStyles.generoTexto}>Outro</Text>
          </TouchableOpacity>
        </View>
        <View style={localStyles.DataNascContainer}>
          <TextInput
            style={localStyles.inputDataNasc}
            placeholder="DD"
            value={datanasc.day}
            onChangeText={(text) => setDataNasc({ ...datanasc, day: text })}
          />
          <TextInput
            style={localStyles.inputDataNasc}
            placeholder="MM"
            value={datanasc.month}
            onChangeText={(text) => setDataNasc({ ...datanasc, month: text })}
          />
          <TextInput
            style={localStyles.inputDataNasc}
            placeholder="AAAA"
            value={datanasc.year}
            onChangeText={(text) => setDataNasc({ ...datanasc, year: text })}
          />
        </View>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  editIcon: {
    width: 24,
    height: 24,
  },
  form: {
    flex: 1,
  },
  input: {
    backgroundColor: '#CFCFCF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  generoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  generoBox: {
    backgroundColor: '#CFCFCF',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  generoSelecionado: {
    backgroundColor: '#A0A0A0',
  },
  generoTexto: {
    fontSize: 16,
    color: '#000',
  },
  DataNascContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputDataNasc: {
    backgroundColor: '#CFCFCF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    width: '30%',
  },
});
