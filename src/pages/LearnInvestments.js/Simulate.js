import { Text, TextInput, View } from "react-native";
import { useState } from "react";
import styles from "../../assets/scss/input.scss"
import index from '../../assets/scss/index.scss';

export default function Simulate({ navigation }) {
  
  const [data, setData] = useState({ day: '', month: '', year: '' });
  const [invest, setInvest] = useState('');
  const [rescue, setRescue] = useState('');
  
    return (
      <View style={index.content2}>
        
        <Text>Vencimento</Text>
        
        <View style={styles.inputDateV}>
          <TextInput
            style={styles.inputDate}
            placeholder="DD"
            value={data.day}
            onChangeText={(text) => setData({ ...data, day: text })}
          />
          <TextInput
            style={styles.inputDate}
            placeholder="MM"
            value={data.month}
            onChangeText={(text) => setData({ ...data, month: text })}
          />
          <TextInput
            style={styles.inputDate}
            placeholder="AAAA"
            value={data.year}
            onChangeText={(text) => setData({ ...data, year: text })}
          />
        </View>

        <View>
          <Text>Rentabilidade</Text>

        </View>

        <View>
          <Text>Quanto você quer investir mensalmente?</Text>
          <TextInput
            style={styles.input}
            value={invest}
            onChangeText={(text) => setInvest(text)}
          />
          <Text>Quanto você quer resgatar no futuro?</Text>
          <TextInput
            style={styles.input}
            value={rescue}
            onChangeText={(text) => setRescue(text)}
          />
        </View>
      </View>
    );
  }