import React from 'react'
import { Pressable, StatusBar, StyleSheet, Text } from 'react-native'
import { View } from 'react-native-web'
import styles from '../../assets/scss/index.scss'
import Ionicons from '@expo/vector-icons/Ionicons';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 :  64;

export default function Header({ name, text }) {
    return (
        <View style={styles.containerHeader}>
            <View style={styles.content}>
                {name && <Pressable activeOpacity={0.9}>
                    <Ionicons name="person-circle-sharp" size={24} color="white" />
                </Pressable>}
                {name && <Text style={styles.username}>Olá, {name}</Text>}
                {text && <Text style={styles.text_title}>{text}</Text>}
            </View>
        </View>
    )
}