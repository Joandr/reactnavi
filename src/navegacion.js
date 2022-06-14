import React from "react"
import {Text, View, StyleSheet} from "react-native"
// Importar botones de navegación
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
//Importar stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack" 
// Importar contenedor de las pantallas
import { NavigationContainer } from "@react-navigation/native"
// Importar pantallas
import InicioPantalla from "./pantallas/inicio"
import BombilloPantalla from "./pantallas/Bombillo"
import PrestamosPantalla from "./pantallas/prestamos"

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const HomeStackNavigator = createNativeStackNavigator();

function MyStack(){
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="homescreen"
            >

            <HomeStackNavigator.Screen
                 name="home"
                 component={Inicio}
            />
             <HomeStackNavigator.Screen
                 name="Stack"
                 component={Prestamos}
            />

            </HomeStackNavigator.Navigator>

    )
}

// Crear objetos tabs
const tab = createBottomTabNavigator();
// Funcion para crear los botones de navegación
function MyTabs(){
    return(
        <tab.Navigator
         initialRouteName="Home"
         screenOptions={{
            tabBarActiveTintColor: 'red',
         }}> 
            

            <tab.Screen 
            name="Bombillo" 
            component={BombilloPantalla}
            options={{
                tabBarLabel: 'Interruptor',
                tabBarIcon: ({ color, size}) => (
                    <MaterialCommunityIcons name="brightness-5" color={color} size={size}/>

                ),
                
                headerShown: false,

            }}
            />

<tab.Screen 
            name="Inicio" 
            component={InicioPantalla}
            options={{
                tabBarLabel: 'Inicio',
                tabBarIcon: ({ color, size}) => (
                    <MaterialCommunityIcons name="archive-cancel" color={color} size={size}/>

                ),
                
                headerShown: false,

            }}
            /> 
            
            <tab.Screen 
            name="Cotizador" 
            component={PrestamosPantalla}
            options={{
                tabBarLabel: 'Prestamos',
                tabBarIcon: ({ color, size}) => (
                    <MaterialCommunityIcons name="brightness-5" color={color} size={size}/>

                ),
                
                headerShown: false,

            }}
            />


        </tab.Navigator>
    );
}

// Funcion para colocar los botones de navegación en un contenedor
export default function Navegacion(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}
