import { Text, TextInput, View } from "react-native";
import { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from "@react-native-community/datetimepicker";

export default function Simulate({ navigation }) {
  


    return (
      <View>
          <Text>Simular</Text>
            <View>
                <RNDateTimePicker mode="time" />
            </View>
      </View>
    );
  }