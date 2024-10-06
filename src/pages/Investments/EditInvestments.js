import { View } from "react-native";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function EditInvestments({ route, navigation }) {
    const { investments } = route.params; 

    return (
      <View>
        <Header navigation={navigation} />
  
        <Footer navigation={navigation} />
      </View>
    );
  }
  