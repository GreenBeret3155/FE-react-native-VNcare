import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Alert, Button, Linking, Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RegistryScreen from './src/screens/RegistryScreen';
import HomeScreen from './src/screens/HomeScreen'
import SuccessScreen from './src/screens/SuccessScreen';
import LoginScreen from './src/screens/LoginScreen';
import DangkykhamScreen from './src/screens/DangkykhamScreen'
import HosoScreen from './src/screens/HosoScreen'
import SettingsScreen from './src/screens/SettingsScreen'
import ThemlichkhamScreen from './src/screens/ThemlichkhamScreen'
import QmkScreen from './src/screens/QmkScreen'
import { AntDesign } from '@expo/vector-icons';

import firebase from 'firebase'
import Loading from './src/components/Loading';




const RootStack = createStackNavigator();
const LoginStack = createStackNavigator();
const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const styleHeader = {
    headerStyle: {
        backgroundColor: '#fff',
    },
    headerTintColor: 'black',
    headerTitleAlign: 'center',
    headerTitleStyle: {
        fontWeight: '600',
        elevation: 0,
    },
}

const MyDiv = (props) => {
    const styles = {
        button: {
            height: 35,
            alignSelf: 'stretch',
            alignContent: 'center',
            backgroundColor: '#2e3094',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#2e3094',
            justifyContent: 'center',
            marginLeft: 5,
            marginRight: 5
        },
        divStyle: {
            flexDirection: 'row',
            padding: 5
        },
        text: {
            color: '#fff',
            fontSize: 14,
            fontWeight: '700',
        }
    }
    return (
        <View style={props.style}>
            <TouchableOpacity onPress={props.onPress} style={[styles.button, props.stylenut]}>
                <View style={styles.divStyle}>
                    <View style={{ flex: 1 }} />
                    <Text style={[styles.text, props.styletext]}>{props.children}</Text>
                    <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                        <AntDesign name="right" size={14} color="#000" />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const HomeStack = createStackNavigator();

const HomeTab = () => {
    return (
        <HomeStack.Navigator initialRouteName='HomeScreen' >
            <HomeStack.Screen name='HomeScreen'
                component={HomeScreen}
                options={{
                    title: 'Trang chủ',
                    headerLeft: null,
                    headerStyle: {
                        backgroundColor: '#fff',
                        elevation: 0,
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: '600',
                    },
                    // headerShown: false,
                }} />
        </HomeStack.Navigator>
    )
}

const DKKStack = createStackNavigator();

const DangkykhamTab = ({ navigation }) => {
    return (
        <DKKStack.Navigator initialRouteName='DangkykhamScreen' >
            <DKKStack.Screen name='DangkykhamScreen'
                component={DangkykhamScreen}
                options={{
                    title: 'Đối tượng đăng ký khám',
                    headerStyle: {
                        backgroundColor: '#fff',
                        elevation: 0,
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: '600',
                    },
                }} />
            <DKKStack.Screen name='ThemlichkhamScreen'
                component={ThemlichkhamScreen}
                options={{
                    title: 'Thêm lịch khám',
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: '600',
                    },
                    headerRight: () => {
                        return (<MyDiv stylenut={{ backgroundColor: '#e6959b', borderColor: '#e6959b', }}
                            styletext={{ color: 'black', marginRight: 10 }}
                            onPress={() => navigation.push('DangkykhamScreen')}>Hủy</MyDiv>)
                    }
                }} />
        </DKKStack.Navigator>
    )
}

const HosoStack = createStackNavigator();

const HosoTab = () => {
    return (
        <HosoStack.Navigator initialRouteName='HosoScreen' >
            <HosoStack.Screen name='HosoScreen'
                component={HosoScreen}
                options={{
                    title: 'Hồ sơ sức khỏe',
                    headerStyle: {
                        backgroundColor: '#fff',
                        elevation: 0,
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: '600',
                    },
                }} />
        </HosoStack.Navigator>
    )
}

const SettingsStack = createStackNavigator();

const SettingsTab = () => {
    return (
        <SettingsStack.Navigator initialRouteName='SettingsScreen' >
            <SettingsStack.Screen name='SettingsScreen'
                component={SettingsScreen}
                options={{
                    title: 'Cài đặt',
                    headerLeft: null,
                    headerStyle: {
                        backgroundColor: '#fff',
                        elevation: 0,
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontWeight: '600',
                    },
                }} />
        </SettingsStack.Navigator>
    )
}

const TabsScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "HomeScreen") {
                        iconName = focused ? "ios-home" : "ios-home";
                    } else if (route.name === "DangkykhamScreen") {
                        iconName = focused ? "md-medkit" : "md-medkit";
                    } else if (route.name === "HosoScreen") {
                        iconName = focused ? "ios-list" : "ios-list";
                    } else {
                        iconName = focused ? "ios-settings" : "ios-settings";
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarLabel: ({ color }) => {
                    let labelName;
                    if (route.name === "HomeScreen") {
                        labelName = "Home";
                    } else if (route.name === "DangkykhamScreen") {
                        labelName = "Đăng ký khám";
                    } else if (route.name === "HosoScreen") {
                        labelName = "Hồ sơ";
                    } else {
                        labelName = "Cài đặt";
                    }
                    return <Text style={{ color: color, fontSize: 12, marginBottom: 3 }}> {labelName} </Text>
                }
            })}
            tabBarOptions={{
                activeBackgroundColor: '#b6d7a8',
                inactiveBackgroundColor: '#fff',
                activeTintColor: 'black',
                inactiveTintColor: 'gray',
                style: {
                    height: 65
                },
            }}
        >
            <Tab.Screen name="HomeScreen" component={HomeTab} />
            <Tab.Screen name="DangkykhamScreen" component={DangkykhamTab} />
            <Tab.Screen name="HosoScreen" component={HosoTab} />
            <Tab.Screen name="Settings" component={SettingsTab} />
        </Tab.Navigator>
    )
}

const MainStackScreen = () => {
    return (
        <MainStack.Navigator initialRouteName="Home" screenOptions={styleHeader}>
            <MainStack.Screen name="Home"
                component={TabsScreen}
                options={{
                    title: 'Trang tab',
                    headerShown: false,
                }} />
        </MainStack.Navigator>

    )
}

class App extends React.Component {
    state = { loggedIn: null };

    UNSAFE_componentWillMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyArXI-E5a6iTP_doKuPLxm4Yaz6389iMUk",
            authDomain: "auth1-3d411.firebaseapp.com",
            databaseURL: "https://auth1-3d411.firebaseio.com",
            projectId: "auth1-3d411",
            storageBucket: "auth1-3d411.appspot.com",
            messagingSenderId: "495596778773",
            appId: "1:495596778773:web:4afe17225103c90e4d251c",
            measurementId: "G-ZEC4BLPK32"
        };
        // Initialize Firebase

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        })
    }
    renderContent() {
        const { navigation } = this.props
        switch (this.state.loggedIn) {
            case true:
                return (
                    <NavigationContainer>
                        <RootStack.Navigator initialRouteName="Main" >
                            <RootStack.Screen
                                name="Main"
                                component={MainStackScreen}
                                options={{ headerShown: false }}
                            />
                        </RootStack.Navigator>
                    </NavigationContainer>
                );
            case false:
                return (
                    <NavigationContainer>
                        <LoginStack.Navigator initialRouteName="Login" screenOptions={styleHeader} >
                            <LoginStack.Screen name="Login"
                                component={LoginScreen}
                                options={{
                                    title: 'Login page',
                                    headerShown: false,
                                }} />
                            <LoginStack.Screen name="Registry"
                                component={RegistryScreen}
                                options={{
                                    title: 'Thông tin tài khoản',
                                    // headerLeft: null,
                                    // headerRight: () => <Button style={{color: '#fff'}} onPress={() => navigation.goBack()}  title='Hủy đăng ký' />
                                }} />
                            <LoginStack.Screen name="SuccessScreen"
                                component={SuccessScreen}
                                options={{
                                    headerShown: false
                                }} />
                            <LoginStack.Screen name="QmkScreen"
                                component={QmkScreen}
                                options={{
                                    title: 'Quên mật khẩu'
                                }} />
                        </LoginStack.Navigator>
                    </NavigationContainer>
                );
            default:
                return <Loading size="large" />;
        }
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.renderContent()}
            </View>
        )
    }
}


export default App;