import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation'
import Contatos from '../telas/Contato';
import { Platform } from "react-native";
import Cores from "../constantes/Cores";
import index from '../telas/index'

const LugaresNavigator = createStackNavigator(
    {
        Lugares: Contatos,
    
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