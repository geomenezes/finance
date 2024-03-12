import React from 'react'
import { Pressable, StatusBar, StyleSheet, Text } from 'react-native'
import { View } from 'react-native-web'
import styles from '../../assets/scss/index.scss'
// import 'material-icons/iconfont/material-icons.css';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 :  64;

export default function Header({ name }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Pressable activeOpacity={0.9}>
                    <Text>icone</Text>
                </Pressable>
                <Text style={styles.username}>Olá, {name}</Text>
            </View>
        </View>
    )
}

// export default function Header({ name }) {
//     return (
//         <View className='container'>
//             <View className='content'>
//                 <Pressable activeOpacity={0.9}>
//                     <Text>icone</Text>
//                 </Pressable>
//                 <Text className='username'>Olá, {name}</Text>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#01464D',
//         paddingTop: statusBarHeight,
//         flexDirection: 'row',
//         paddingStart: 16,
//         paddingEnd: 16,
//         PaddingBottom: 44,
//     },
//     content: {
//         flex: 1,
//         alignItems: 'center',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     username: {
//         fontSize: 10,
//         color: '#fff',
//         fontWeight: 'bold',
//     },
//     buttonUser: {
//         width: 44,
//         height: 44,
//         backgroundColor: 'rgba(255, 255, 0.5)',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 44 / 2,
//     }
// })