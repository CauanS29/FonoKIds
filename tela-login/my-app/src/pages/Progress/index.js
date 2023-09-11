

import React from 'react' 
import { 
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    Text, 
    TextInput} from 'react-native'  

    import { useNavigation } from '@react-navigation/native'

export default function Progress(){
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <ImageBackground
            source={require('../../assets/wallpaperProgress.png')}
            resizeMode='contain' 
            style ={styles.image}
            >

            </ImageBackground>
        </View>
    )

        
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#E6B742',
       
    },
    image: {
        flex: 1,
        height: "100%",
    },
})