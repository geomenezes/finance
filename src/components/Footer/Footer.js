import React from 'react'
import { Image, View } from 'react-native'
import styles from '../../assets/scss/icons.scss'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import home from '../../assets/icons/home.png';
import api from '../../assets/icons/api.png';
import spents from '../../assets/icons/spents.png';
import investments from '../../assets/icons/investments.png';
import perfil from '../../assets/icons/perfil.png';
import ButtonIcon from '../Buttons/ButtonIcon';

const icons = [
    {
        name: 'home',
        link: 'Home',
        url: '../../assets/icons/home.png'
    },
    {
        name: 'api',
        link: 'Quiz',
        url: '../../assets/icons/api.png'
    },
    {
        name: 'spents',
        link: 'Spents',
        url: '../../assets/icons/spents.png'
    },
    {
        name: 'investments',
        link: 'Investments',
        url: '../../assets/icons/investments.png'
    },
    {
        name: 'perfil',
        link: 'Profile',
        url: '../../assets/icons/perfil.png'
    }
]

export default function Footer({ name, navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
            {icons.map((e, key) => {

                let url = "../../assets/icons/" + e.name + ".png"

                return (
                    <ButtonIcon 
                        onClick={() => navigation.navigate(e.link)}
                        icon={home}
                        id={key}
                    />
                    // <FontAwesome.Button 
                    //     name={e.name}
                    //     style={styles.button}
                    //     key={key}
                    //     onPress={() =>
                    //         navigation.navigate(e.link)
                    //     } />
                    // <Image
                    //     style={styles.imgQuiz}
                    //     source = {home}
                    // />
                )})}
            </View>
        </View>
    )
}