

import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    Text,
    TextInput
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default function Exercises() {
    const navigation = useNavigation();

    return (
        <View styles={styles.container}>
            <ImageBackground
                source={require('../../assets/wallpaper.png')}
                resizeMode='cover'
                style={styles.image}
            >

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})


