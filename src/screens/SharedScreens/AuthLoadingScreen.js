import React, { useEffect } from 'react'
import {
    View,
    StatusBar,
    ActivityIndicator,
    AsyncStorage,
    StyleSheet,
    Image
} from 'react-native'

const AuthLoadingScreen = ({navigation}) => {
    const bootstrap = async () => {

        const userToken = await AsyncStorage.getItem('userToken');
        navigation.navigate(userToken ? 'App' : 'Auth');
    }

    useEffect(() => {
        bootstrap()
    }, [])

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/imgs/vncare.png')} style={{ width: 250, height: 250, }} />
            <ActivityIndicator />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});

export default AuthLoadingScreen;