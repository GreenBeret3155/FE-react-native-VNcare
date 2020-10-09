import React, { useEffect } from 'react'
import {
    View,
    ActivityIndicator,
    AsyncStorage,
    StyleSheet,
    Image
} from 'react-native'

const AuthLoadingScreen = ({navigation}) => {
    // const bootstrap = async () => {
    //     let userToken;

    //     try {
    //       userToken = await AsyncStorage.getItem('userToken');
    //     } catch (e) {
    //       // Restoring token failed
    //     }
  
    //     // After restoring token, we may need to validate it in production apps
  
    //     // This will switch to the App screen or Auth screen and this loading
    //     // screen will be unmounted and thrown away.
    //     dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    //   ;
  
    // }

    // useEffect(() => {
    //     bootstrap()
    // }, [])

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/imgs/vncare.jpg')} style = {{width:100}} />
            <ActivityIndicator />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#fff'
    },
});

export default AuthLoadingScreen;