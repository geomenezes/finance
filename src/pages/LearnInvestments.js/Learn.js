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

    const [about, setAbout] = useState(false);

    function changeScreen(value) {

        if(value == 0 && !about)
            setAbout(true)

        if(value == 1 && about)
            setAbout(false)

    }

    return (
      <View style={styles.container}>
          <Header navigation={navigation} />

                <View style={button.content_invest_line}>
                    <Pressable style={about ? button.invest_line : button.invest_select_line} 
                    onPress={() => changeScreen(1)}>
                        <Text style={typo.textCenter}>Simular</Text>
                    </Pressable>
                    <Pressable style={about ? button.invest_select_line : button.invest_line} 
                    onPress={() => changeScreen(0)}>
                        <Text style={typo.textCenter}>Sobre</Text>
                    </Pressable>
                </View>

                <Text style={typo.title}>{route.params.label}</Text>

                {about ? 
                    <About type={route.params.name} />
                :
                    <Simulate type={route.params.name} />
                }

          <Footer navigation={navigation} />
      </View>
    );
}