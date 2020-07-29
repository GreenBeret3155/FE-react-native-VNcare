import React from 'react'
import {Alert, Text, View, Image, StyleSheet, ScrollView, TextInput } from 'react-native'
import MyButton from '../components/MyButton'
import firebase from 'firebase'
import Loading from '../components/Loading'

const InputRegistry = (props) => {
    return (
        <View style={{ marginTop: 20, }}>
            <View style={styles.div} >
                <Text style={{ flex: 2, }}>{props.children}<Text style={{ color: 'red', }} >*</Text></Text>
                <TextInput
                    style={styles.inputbox}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    secureTextEntry={props.secureTextEntry}
                    placeholder={' ' + props.placeholder}
                    placeholderTextColor="gray" />
            </View>
        </View>
    )
}

class RegistryScreen extends React.Component {
    state = { email: '', password: '', error: '', loading: false }
    onRegistry() {
        const { email, password } = this.state
        const { navigation } = this.props
        this.setState({ error: '', loading: true })

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(Alert.alert(
                'Warning',
                'Enter email and password',
                [
                  {text: 'OK', onPress: () => () => navigation.push('SuccessScreen')},
                ],
                { cancelable: true }
              ))
            .catch(this.onRegistryFail.bind(this))
    }

    onRegistryFail() {
        this.setState({
            error: 'Đăng ký thất bại',
            loading: false,
        })
    }

    renderButton() {
        if (this.state.loading) {
            return (
                <Loading size="small" />
            )
        }
        return (
            <MyButton onPress={this.onRegistry.bind(this)} > Đăng ký tài khoản </MyButton>
        )
    }



    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.items}>
                    <InputRegistry
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                        placeholder='user@gmail.com'>
                        Tên đăng nhập
                    </InputRegistry>
                    <InputRegistry placeholder='Số điện thoại'>Số điện thoại</InputRegistry>
                    <InputRegistry
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                        placeholder='************'>
                        Mật khẩu
                    </InputRegistry>
                    <InputRegistry
                        value={this.state.password}
                        placeholder='************'>
                        Nhập lại mật khẩu
                    </InputRegistry>
                </View>
                <View style={{marginTop: 50}}>{this.renderButton()}</View>
                <Text>{this.state.error}</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        alignContent: 'center',
        justifyContent: 'center',
    },
    div: {
        flexDirection: "row",
        justifyContent: 'space-between',
        flexWrap: "wrap",
        alignItems: 'center',
    },
    inputbox: {
        flex: 3,
        height: 30,
        paddingLeft: 10,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 3,
    },
    children: {

        flexDirection: 'row',
    }
})

export default RegistryScreen;