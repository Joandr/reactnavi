import React from "react"
import {Text, View, StyleSheet, Image, ImageBackground} from "react-native"
import image from "../assets/img/fondoApp.jpg"

const InicioPantalla = () => {
    return(
        <View>
            <ImageBackground source={image} style={{width:'100%', height:'100%'}}>
                <Text style={{color:'white', fontSize:30, textAlign:"center", marginVertical:100, width:'100%', height:'100%'}}>
                lo hicimos entre los dos, ojo pues! 
                </Text>
            </ImageBackground>
            
        </View>
    )
}

export default InicioPantalla;