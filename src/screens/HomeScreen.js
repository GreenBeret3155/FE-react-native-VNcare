import React from 'react'
import { Alert, Button, Linking, Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container} >
            <Text>Home</Text>

        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    }
})

export default HomeScreen;

// import React from 'react'
// import {View , Text } from 'react-native'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import reducers from '../reducers'
// import {connect} from 'react-redux'

// class HosoScreen extends React.Component () {
//     render(){
//         console.log(this.props);
//         return;
//     }
// }

// const mapStatetoProps = state => {
//     return {libraries : state.libraries}
// }

// export default connect(mapStatetoProps)(HosoScreen);