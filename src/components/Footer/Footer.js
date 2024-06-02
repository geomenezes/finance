import React from 'react'
import { Button, Pressable, StatusBar, StyleSheet, Text } from 'react-native'
import { View } from 'react-native-web'
import styles from '../../assets/scss/icons.scss'
import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const icons = [
    {
        name: 'home',
        link: 'Home',
    },
    {
        name: 'checklist',
        link: 'Quiz',
    },
    {
        name: 'savings',
        link: 'x',
    },
    {
        name: 'flag',
        link: 'x',
    },
    {
        name: 'person',
        link: 'x',
    }
]

export default function Footer({ name }) {
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