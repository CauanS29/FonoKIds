
import React from 'react' 
import { 
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    Text } from 'react-native' 

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

const image = '../../assets/wallpaper.png'

export default function Welcome(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <ImageBackground
            source={require('../../assets/wallpaper.png')}
            resizeMode='cover' 
            style ={styles.image}
            >
        <View style={styles.header}>
            <Text style={styles.headerText}>Olá, Cauan!</Text>
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
        top: 16, 
        left: 0, 
        padding: 16, 
      },
      headerText: {
        fontFamily: 'sans-serif',
        fontSize: 36,
        fontWeight: 'bold',
        color: '#667781', 
      },
    containerLogo:{
        flex:2,
        backgroundColor: '#38a69d',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex:1,
        backgroundColor: '#FFF',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
    },
    text:{
        color: '#a1a1a1'
    },
    button:{
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
    buttonText:{
        fontSize: 18,
        color:'#FFF',
        fontWeight: 'bold',
    },
})
