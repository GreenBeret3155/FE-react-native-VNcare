import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet ,ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const MyDiv = (props) => {
    const styles = {
        button: {
            height: 120,
            alignSelf: 'stretch',
            alignContent: 'center',
            backgroundColor: '#b6d7a8',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#b6d7a8',
            marginTop: 10,
            justifyContent: 'center',
        },
        divStyle: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        textButton: {
            color: '#000',
            fontSize: 18,
            fontWeight: '700',
            margin: 10,
        }
    }
    return (
        <View style={props.style}>
            <TouchableOpacity onPress={props.onPress} style={styles.button}>
                <View style={styles.divStyle}>
                    <Text style={styles.textButton}>{props.children}</Text>
                    <AntDesign name="right" size={24} color="black" style={{ margin: 10, alignSelf: 'center' }} />
                </View>
            </TouchableOpacity>
        </View>
    )
}



const DangkykhamScreen = ({navigation}) => {
    return (
        <View style={{ flex:1, padding: 10 }}>
            <ScrollView>
            <Text style={{ color: 'blue', fontWeight: 'bold', fontSize: 18 }}> Bạn đang đặt lịch khám cho ai ?</Text>
            <MyDiv >Nguyễn Quang Liêm</MyDiv>
            <MyDiv onPress={() =>{navigation.navigate("ThemlichkhamScreen")}} >Nguyễn Thanh Chính - Con trai</MyDiv>
            <View style={{ alignItems: 'flex-end', marginTop: 20 }}>
                <TouchableOpacity >
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 30,
                        }} >+</Text>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 18,
                            marginTop: 7
                        }}> Thêm người khác</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </View>

    )
}

export default DangkykhamScreen;