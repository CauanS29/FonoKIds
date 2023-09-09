

import React from 'react' 
import { 
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    Text, 
    TextInput} from 'react-native' 

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

const image = '../../assets/wallpaper.png'

export default function SignIn(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <ImageBackground 
            source={require('../../assets/wallpaper.png')}
            resizeMode='cover' 
            style ={styles.image}
            >
            <View style={styles.containerLogo}>
            <Animatable.Image
            animation='flipInY'
            source={require('../../assets/FonoLogo.png')}
            style={{ width: '100%'}}
            resizeMode='contain'
            >

            </Animatable.Image>
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                
                <Text style={styles.title}></Text>
                <TextInput
                placeholder='EMAIL:'
                style={styles.input}
                >
                </TextInput>
                
                <Text style={styles.title}></Text>
                <TextInput
                placeholder='SENHA:'
                style={styles.input}
                >
                </TextInput>

                
            </Animatable.View> 

            <Animatable.View delay={600} animation="fadeInUp" style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Welcome')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>

            </ImageBackground>
             
 
             
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    image:{
        flex:1,
       
    },
    containerLogo:{
        flex:2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex:1,
        opacity: 0.5,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart: '5%',
        paddingEnd: '5%',
        justifyContent: 'center',
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
      
    input:{
        backgroundColor:'#53bdeb',
        opacity: 0.8,
        borderRadius: 80,
        padding:8,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        marginBottom: 16, 
      },
      
      button: {
        backgroundColor:'#53bdeb',
        opacity: 0.8,
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
      }
})

