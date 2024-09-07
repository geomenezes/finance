import React from 'react'
import { View } from 'react-native'
import styles from '../../assets/scss/icons.scss'
import ButtonIcon from '../Buttons/ButtonIcon';

const icons = [
    {
        name: 'home',
        link: 'Home',
        url: require('../../assets/icons/home.png')
    },
    {
        name: 'api',
        link: 'Quiz',
        url: require('../../assets/icons/api.png')
    },
    {
        name: 'spents',
        link: 'Spents',
        url: require('../../assets/icons/spents.png')
    },
    {
        name: 'investments',
        link: 'Investments',
        url: require('../../assets/icons/investments.png')
    },
    {
        name: 'perfil',
        link: 'Profile',
        url: require('../../assets/icons/perfil.png')
    }
]

export default function Footer({ name, navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
            {icons.map((e, key) => {

                return (
                    <ButtonIcon 
                        onClick={() => navigation.navigate(e.link)}
                        icon={e.url}
                        id={key}
                    />
                )})}
            </View>
        </View>
    )
}