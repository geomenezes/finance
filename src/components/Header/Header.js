import React from 'react'
import { View, ImageBackground, StatusBar, Text } from 'react-native'
import styles from '../../assets/scss/index.scss'
import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import typo from '../../assets/scss/typography.scss'

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
                        size={24}
                        style={styles.goBack}
                        onPress={() => navigation.goBack()} /> }
                    {name &&
                    <View style={styles.around}>
                        <View style={styles.ladoAlado}>
                            <FontAwesome
                                name='user-o'
                                size={24} color="white" 
                                style={{ margin: '15px' }} />
                            <Text style={typo.hearder_text}>Olá, {name}</Text>
                        </View>
                        <View style={styles.logout}>
                            <MaterialIcons 
                                name="logout" 
                                size={24} 
                                color="white" />
                        </View>
                    </View>}
                    {/* {text && <Text style={typo.hearder_text2}>{text}</Text>} */}
                </View>
            </ImageBackground>
        </View>
    )
}