import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
    Text,
    AsyncStorage
} from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    RegistryScreen,
    HomeScreen,
    SuccessScreen,
    LoginScreen,
    HosoScreen,
    SettingsScreen,
    ThemlichkhamScreen,
    QmkScreen,
    ThongtindangkykhamScreen,
    DangkykhamScreen,
    KiemtrathongtinScreen,
    AuthLoadingScreen
} from './src/screens'
import CancelButton from './src/components/CancelButton'
import { Loading } from './src/components';
import { AntDesign } from '@expo/vector-icons';
import { firebase } from './src/firebase/config';

//theme
import { Theme } from './src/utils/theme'

//redux
import store from "./src/redux/store/configureStore"
import { connect, Provider } from 'react-redux'
import { gvActions } from './src/redux/actions'

import Hung from './routing'

function App() {
    return (
        <Provider store={store}>
            <Hung/>
        </Provider>
    )
}

export default App;