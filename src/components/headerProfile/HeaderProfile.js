import React from 'react';
import { View, ImageBackground, StatusBar, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import typo from '../../assets/scss/typography.scss'; // Verifique se o caminho e o nome do arquivo estão corretos

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function HeaderProfile({ navigation, name }) {
    return (
        <View>
            <ImageBackground 
                source={require('../../assets/img/headerProfile.png')} // Verifique se o caminho está correto
                style={headerProfileStyles.background}
            >
                <View style={[headerProfileStyles.content, { paddingTop: statusBarHeight }]}>
                    {navigation && (
                        <FontAwesome.Button 
                            name='chevron-left'
                            style={headerProfileStyles.goBack}
                            onPress={() => navigation.goBack()} 
                        />
                    )}
                    {name && (
                        <Text style={typo.headerText}>Olá, {name}</Text> // Verifique se 'headerText' está definido em typography.scss
                    )}
                </View>
            </ImageBackground>
        </View>
    );
}

const headerProfileStyles = StyleSheet.create({
    background: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    goBack: {
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
});
