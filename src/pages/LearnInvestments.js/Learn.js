import { Pressable, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import typo from "../../assets/scss/typography.scss"
import button from "../../assets/scss/buttons.scss"
import styles from '../../assets/scss/index.scss';
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import About from "./About";
import Simulate from "./Simulate";

export default function Learn({ navigation, route }) {

    const [about, setAbout] = useState(true);

    function changeScreen(value) {

        if(value == 0 && !about)
            setAbout(true)

        if(value == 1 && about)
            setAbout(false)

    }

    return (
      <View style={styles.container}>
          <Header navigation={navigation} />

                <View style={button.content_invest}>
                    <Pressable style={about ? button.invest_select : button.invest} 
                    onPress={() => changeScreen(0)}>
                        <Text style={typo.title}>Sobre</Text>
                    </Pressable>
                    <Pressable style={about ? button.invest : button.invest_select} 
                    onPress={() => changeScreen(1)}>
                        <Text style={typo.title}>Simular</Text>
                    </Pressable>
                </View>

                <Text style={typo.title}>{route.params.name}</Text>

                {about ? 
                    <About />
                :
                    <Simulate />
                }

          <Footer navigation={navigation} />
      </View>
    );
}