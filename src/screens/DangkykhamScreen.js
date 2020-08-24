import React, { useEffect, useState } from 'react'
import { TouchableOpacity, View, Text, StyleSheet, ScrollView, FlatList, ActivityIndicator } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { getQuanHeByTaikhoanId } from '../services/fetchAPI'
import { chuyenLoaiQuanHe } from '../services/xuly'


const MyDiv = (props) => {
    const styles = {
        button: {
            height: 120,
            alignSelf: 'stretch',
            alignContent: 'center',
            backgroundColor: '#ffd500',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#ffd500',
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

const DangkykhamScreen = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    chuyenLoaiQuanHe();
    useEffect(() => {
        getQuanHeByTaikhoanId(1)
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    return (
        <View style={styles.container}>
            <Text style={ styles.headerText }> Bạn đang đặt lịch khám cho ai ?</Text>
            {isLoading ? <ActivityIndicator /> :
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <MyDiv
                            onPress={() => navigation.navigate('ThongtindangkykhamScreen', { benhnhanid: item.benhnhanphu.id, loaiquanhe: item.loaiquanhe })}
                        >
                            {item.benhnhanphu.ten}  - {chuyenLoaiQuanHe(item.loaiquanhe)}
                        </MyDiv>
                    )}
                />
            }
            <View style={{ alignItems: 'flex-end', marginTop: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate('ThongtindangkykhamScreen')} >
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
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        padding: 10,
        backgroundColor:'white'
    },
    headerText:{ 
        color: '#0183fd', 
        fontWeight: 'bold', 
        fontSize: 18 
    }
})

export default DangkykhamScreen;