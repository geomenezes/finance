import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker'; // Certifique-se de importar corretamente
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'; // Substitua por um cabeçalho alternativo ou crie um novo

export default function EditProfile({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [genero, setGenero] = useState('');
  const [datanasc, setDataNasc] = useState({ day: '', month: '', year: '' });
  const [profileImage, setProfileImage] = useState(null);

  const handleSave = () => {
    // Função para salvar os dados alterados
    console.log('Dados salvos:', { nome, email, genero, datanasc });
  };

  const handleSelectImage = () => {
    const options = {
      mediaType: 'photo',
      noData: true,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Operação cancelada!');
      } else if (response.errorCode) {
        console.log('Erro ao adicionar imagem: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        setProfileImage(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={localStyles.container}>
      <Header navigation={navigation} title="Editar Perfil" />
      <View style={localStyles.content}>

      <View style={localStyles.header}>
        <Text style={localStyles.headerTitle}>Editar Perfil</Text>
        <TouchableOpacity onPress={handleSave}>
          <Image source={require('../../assets/img/edit.png')} style={localStyles.editIcon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleSelectImage} style={localStyles.profileImageContainer}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={localStyles.profileImage} />
        ) : (
          <Text style={localStyles.addImageText}>Adicionar Foto</Text>
        )}
      </TouchableOpacity>

      <View style={localStyles.form}>
        <TextInput
          style={localStyles.input}
          onChangeText={setNome}
          value={nome}
          placeholder="Nome completo"
          inputMode="default"
        />
        <TextInput
          style={localStyles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="E-mail"
          inputMode="email-address"
        />
        <View style={localStyles.generoContainer}>
          <TouchableOpacity
            style={[
              localStyles.generoBox,
              genero === 'F' && localStyles.generoSelecionado,
            ]}
            onPress={() => setGenero('F')}
          >
            <Text style={localStyles.generoTexto}>Feminino</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              localStyles.generoBox,
              genero === 'M' && localStyles.generoSelecionado,
            ]}
            onPress={() => setGenero('M')}
          >
            <Text style={localStyles.generoTexto}>Masculino</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              localStyles.generoBox,
              genero === 'Outro' && localStyles.generoSelecionado,
            ]}
            onPress={() => setGenero('Outro')}
          >
            <Text style={localStyles.generoTexto}>Outro</Text>
          </TouchableOpacity>
        </View>
        <View style={localStyles.dataNascContainer}>
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

      </View>

      <Footer navigation={navigation} />
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    flex: 1,
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
  profileImageContainer: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#CFCFCF',
  },
  addImageText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#CFCFCF',
    width: 120,
    height: 120,
    lineHeight: 120,
  },
  form: {
    flex: 1,
  },
  input: {
    backgroundColor: '#F0F0F0',
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
    backgroundColor: '#F0F0F0',
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
  dataNascContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputDataNasc: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    width: '30%',
    textAlign: 'center',
  },
});
