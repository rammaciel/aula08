import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation'
import ListaDeLugaresTela from '../telas/ListaDeLugaresTela';
import { Platform } from "react-native";
import Cores from "../constantes/Cores";
import index from '../telas/index'

const LugaresNavigator = createStackNavigator(
    {
        Lugares: ListaDeLugaresTela,
    
        index: index
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Cores.primary : '',
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary
        }
    });

export default createAppContainer(LugaresNavigator);