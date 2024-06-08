import React from 'react'
import { View } from 'react-native-web'
import styles from '../../assets/scss/icons.scss'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const icons = [
    {
        name: 'home',
        link: 'Home',
    },
    {
        name: 'list',
        link: 'Quiz',
    },
    {
        name: 'money',
        link: 'Spents',
    },
    {
        name: 'flag',
        link: 'Investments',
    },
    {
        name: 'user-o',
        link: 'Profile',
    }
]

export default function Footer({ name, navigation }) {
    return (
        <View style={styles.container}>
        {icons.map((e, key) => {
            return (
                <FontAwesome.Button 
                    name={e.name}
                    style={styles.button}
                    key={key}
                    onPress={() =>
                        navigation.navigate(e.link)
                    } />
            )})}
        </View>
    )
}