import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Linking, Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import MyTextInput from '../components/MyTextInput'
import MyButton from '../components/MyButton';
import Loading from '../components/Loading'
import firebase from 'firebase';

import anhlogo from '../../assets/imgs/vnpt.png';

class LoginScreen extends React.Component {
    state = { email: '', password: '', error: '', loading: false }

    onLogin() {
        const { email, password } = this.state;
        this.setState({ loading: true, error: '' })

        // firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        //     .then(this.onLoginSuccess.bind())
        //     .catch(() => {
        //         this.setState({ error: 'false' })
        //     })

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this))
    }


    onLoginSuccess() {
        this.setState(
            {
                email: '',
                password: '',
                error: '',
                loading: false
            }
        )
    }

    onLoginFail() {
        this.setState(
            {
                error: 'Authentication Failed',
                loading: false,
            }
        )
    }

    renderButton() {
        if (this.state.loading) {
            return (
                <Loading size='small' />
            )
        }
        return (
            <TouchableOpacity style={{ width: 250, marginTop: 50, }}>
                <MyButton onPress={this.onLogin.bind(this)}>Đăng nhập</MyButton>
            </TouchableOpacity>
        )
    }

    renderinput() {
        this.setState(
            {
                error: 'false',
                loading: false,
            }
        )
        return (
            <Text>{this.state.email},,,{this.state.password}</Text>
        )
    }



    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.containerItem} >
                    <Image source={anhlogo} style={{ width: 300, height: 300, }} />
                    <View>
                        <TextInput
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                            style={styles.inputbox}
                            placeholder='user@gmail.com'
                            placeholderTextColor="gray">
                        </TextInput>
                        <TextInput style={styles.inputbox}
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                            secureTextEntry
                            placeholder='**************'
                            placeholderTextColor="gray">
                        </TextInput>
                    </View>

                    <View style={{ marginTop: 5, width: 250, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity>
                            <Text style={{ color: 'blue', textDecorationLine: 'underline', fontSize: 15 }} onPress={() => navigation.navigate('QmkScreen')}>Quên mật khẩu?
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        {this.renderButton()}
                    </View>
                    <View style={{ margin: 10, flex: 1, flexDirection: "row", justifyContent: 'space-around', }}>
                        <Text>Bạn chưa có tài khoản ? </Text>
                        <TouchableOpacity>
                            <Text style={{ color: 'blue', textDecorationLine: 'underline', fontSize: 15 }} onPress={() => navigation.navigate('Registry')}>Đăng ký tại đây.
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Text>{this.state.error}</Text>

                    {/* <TouchableOpacity style={{ width: 250, marginTop: 50, }}>
                        <MyButton onPress={() =>
                            navigation.replace('Home')
                        }>Đăng nhập</MyButton>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 250, marginTop: 50, }} onPress={this.renderinput}>
                        <Text>456</Text>
                    </TouchableOpacity> */}
                    <StatusBar style="auto" />
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
    },
    containerItem: {
        alignItems: 'center',
    },
    inputbox: {
        margin: 5,
        paddingLeft: 10,
        width: 250,
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 3,
    },

})

// backgroundColor: '#2183f3',

export default LoginScreen;