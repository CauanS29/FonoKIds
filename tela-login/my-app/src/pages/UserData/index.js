

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

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'


export default function UserData() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/wallpaperDataUse.png')}
                resizeMode='cover'
                style={styles.image}
            >

                <View style={styles.header}>
                    <Animatable.Image
                        animation='flipInY'
                        source={require('../../assets/user.png')}
                        resizeMode='contain'
                        style={styles.logo}
                    />
                    <View style={styles.headerTextBlock}>
                        <View style={styles.div}>
                            <Text style={styles.headerTextDiv}>Cauan Santos Silva</Text>
                        </View>
                        <View style={styles.div}>
                            <Text style={styles.headerTextDiv}>12/09/2023</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.body}>
                    <View style={styles.headerTextBlock}>
                        <View style={styles.divBody}>
                            <Text style={styles.headerTextDiv}>DIAGNÓSTICO: </Text>
                        </View>
                        <View style={styles.divBody}>
                            <Text style={styles.headerTextDiv}>MÃE: </Text>
                        </View>
                        <View style={styles.divBody}>
                            <Text style={styles.headerTextDiv}>PAI: </Text>
                        </View>
                        <View style={styles.divBody}>
                            <Text style={styles.headerTextDiv}>HISTÓRICO FAMILIAR: </Text>
                        </View>
                        <View style={styles.divBody}>
                            <Text style={styles.headerTextDiv}>INÍCIO DA TERAPIA: </Text>
                        </View>
                        <View style={styles.divBody}>
                            <Text style={styles.headerTextDiv}>PREVISÃO DE TERMINO: </Text>
                        </View>
                        <View style={styles.divBody}>
                            <Text style={styles.headerTextDiv}>ÚLTIMA ATUALIZAÇÃO: </Text>
                        </View>
                        <View style={styles.divBody}>
                            <Text style={styles.headerTextDiv}>PROFISSIONAL RESPONSÁVEL: </Text>
                        </View>
                    </View>
                </View>

            </ImageBackground>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        paddingHorizontal: 10,
    },
    header: {
        marginTop: 60,
        marginBottom: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20,
    },
    logo: {
        width: 90,
        height: 90,
    },
    headerTextBlock: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '70%',
    },
    div: {
        backgroundColor: '#53bdeb',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    divBody: {
        backgroundColor: '#53bdeb',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 50,
        justifyContent: 'center',
        textAlign: 'left',
        marginBottom: 10,
    },
    headerTextDiv: {
        color: 'white'
    },
    bodyTextDiv: {
        textAlign: 'left',
    },
    headerText: {
        fontFamily: 'sans-serif',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#667781',
    },
})