import React from 'react'
import { Button, Pressable, StatusBar, StyleSheet, Text } from 'react-native'
import { View } from 'react-native-web'
import styles from '../../assets/scss/icons.scss'
import { MaterialIcons } from '@expo/vector-icons';

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
        {icons.map(e => {
            return (
                <Button
                    onPress={() =>
                        navigation.navigate(e.link)
                    }>
                        <MaterialIcons name={e.name} size={24} color="black" />
                </Button>
            )})}
        </View>
    )
}