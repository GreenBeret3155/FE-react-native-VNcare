import React from 'react'
import { Alert, Button, Linking, Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container} >
            <Image source={require('../../../assets/imgs/search-icon.png')} style={{height:250 , width: 250}} />
            <Text>Home</Text>

        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent: 'center'
    }
})

export default HomeScreen;

