import { Text, TextInput, View } from "react-native";
import { useState } from "react";

export default function Simulate({ navigation }) {
  
  const [data, setData] = useState({ day: '', month: '', year: '' });
  const [invest, setInvest] = useState('');
  const [rescue, setRescue] = useState('');
   
    return (
      <View>
        <View>
          <Text>Vencimento</Text>
          <TextInput
            placeholder="DD"
            value={data.day}
            onChangeText={(text) => setData({ ...data, day: text })}
          />
          <TextInput
            placeholder="MM"
            value={data.month}
            onChangeText={(text) => setData({ ...data, month: text })}
          />
          <TextInput
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
            value={invest}
            onChangeText={(text) => setInvest(text)}
          />
          <Text>Quanto você quer resgatar no futuro?</Text>
          <TextInput
            value={rescue}
            onChangeText={(text) => setRescue(text)}
          />
        </View>
      </View>
    );
  }