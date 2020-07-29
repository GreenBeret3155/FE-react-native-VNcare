import React from 'react'
import { View, Image ,Text} from 'react-native'
import MyButton from '../components/MyButton'
import anh from '../../assets/imgs/check.png'

const SuccessScreen = ({navigation}) =>{
    return(
        <View style={{padding:30}}>
            <Image source={anh} style={{marginTop:100,marginBottom:20, width: 80, height: 80,alignSelf: 'center'}} />
            <Text style={{marginBottom:100, alignSelf: 'center', fontSize:18}} >Bạn đã đăng ký tài khoản thành công</Text>
            <MyButton onPress={() => navigation.navigate('Login')} >ĐÓNG</MyButton>
        </View>
    )
}

export default SuccessScreen;