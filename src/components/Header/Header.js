import React from 'react'
import { Pressable, StatusBar, StyleSheet, Text } from 'react-native'
import { View } from 'react-native-web'
import styles from '../../assets/scss/index.scss'
// import 'material-icons/iconfont/material-icons.css';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 :  64;

export default function Header({ name }) {
    return (
        <View style={styles.containerHeader}>
            <View style={styles.content}>
                <Pressable activeOpacity={0.9}>
                    <Text>icone</Text>
                </Pressable>
                <Text style={styles.username}>Olá, {name}</Text>
            </View>
        </View>
    )
}