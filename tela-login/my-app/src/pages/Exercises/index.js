

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

export default function Exercises() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/novoWallpaperExercises.png')}
                resizeMode='cover'
                style={styles.image}
            >

                <View style={styles.header}>
                    <Text style={styles.headerText}>Semana X</Text>
                    <View style={styles.div}>
                    <Text style={styles.headerTextDiv}>CONSCIÊNCIA FONOLÓGICA</Text>
                    </View>
                    
                </View>

                <View style={styles.containerLogo}>
                    <View style={styles.imageContainer}>
                        <TouchableOpacity
                            style={styles.logo}
                            onPress={() => navigation.navigate('Exercises')}
                        >
                            <Animatable.Image
                                animation='flipInY'
                                source={require('../../assets/cat.png')}
                                resizeMode='contain'
                                style={styles.logo}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.imageContainer}>
                        <TouchableOpacity
                            style={styles.logo}
                            onPress={() => navigation.navigate('UserData')}
                        >
                            <Animatable.Image
                                animation='flipInY'
                                source={require('../../assets/bloquinhos.png')}
                                resizeMode='contain'
                                style={styles.logo}
                            />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.imageContainer}>
                        <TouchableOpacity
                            style={styles.logo}
                            onPress={() => navigation.navigate('Progress')}
                        >
                            <Animatable.Image
                                animation='flipInY'
                                source={require('../../assets/pacman.png')}
                                resizeMode='contain'
                                style={styles.logo}
                            />
                        </TouchableOpacity>
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
    },
    header: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 36,
        width: '100%',
    },
    div:{
        backgroundColor: '#53bdeb',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    headerTextDiv:{
        color: 'white'
    },
    headerText: {
        fontFamily: 'sans-serif',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#667781',
    },

    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        width: '70px',
    },
    logo: {
        width: '100%',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text: {
        color: '#a1a1a1'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
})


