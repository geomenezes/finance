import React from 'react'
import { View, ImageBackground, StatusBar, Text } from 'react-native'
import styles from '../../assets/scss/index.scss'
import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 :  64;

export default function Header({ name, text, navigation }) {

    let url = (name || text) ? 'src/assets/img/headerBig.png' : 'src/assets/img/headerSmall.png';

    return (
        <View>
            <ImageBackground source={url} style={styles.background}>
                <View style={styles.content}>
                    {navigation &&
                    <FontAwesome.Button 
                        name='chevron-left'
                        style={styles.goBack}
                        onPress={() => navigation.goBack()} /> }
                    {name &&
                    <FontAwesome
                        name='user-o'
                        size={18} color="white" />}
                    {name && <>
                        <Text style={styles.username}>Olá, {name}</Text>
                        <MaterialIcons name="logout" size={18} color="white" 
                            style={styles.logout} />
                    </>}
                    {text && <Text style={styles.text_title}>{text}</Text>}
                </View>
            </ImageBackground>
        </View>
    )
}