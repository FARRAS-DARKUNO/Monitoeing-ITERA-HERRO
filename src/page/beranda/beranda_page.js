import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
    BackHandler,
    Alert,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import stylesGlobal from '../../utils/style_global';
import styles from '../beranda/beranda_style';
import NotificationButton from '../../component/notification_button';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firstDashboard, firstListGreenhouse } from '../../redux/action';
import Loading from '../../component/loading';

const BerandaPage = () => {

    const navigate = useNavigation()

    const { dataListGreenHouse, dataDashboard } = useSelector(
        state => state.userReducer,
    );

    const dispatch = useDispatch()

    const logout = () => {
        Alert.alert("Keluar", "Anda yakin ingin keluar ?", [
            {
                text: "Cancel",
                onPress: () => null,
                style: "cancel"
            },
            {
                text: "Logout", onPress: () => {
                    AsyncStorage.clear().then(() => navigate.navigate('LoginPage'))
                }
            }
        ]);
    }

    const CheckData = () => {
        console.log(dataDashboard.code != 200)
        if (dataDashboard.code != 200 || dataListGreenHouse.code != 200) {
            console.log('mencoba')
            AsyncStorage.getItem('token')
                .then(response => {
                    dispatch(firstDashboard(response))
                    dispatch(firstListGreenhouse(response))
                })
        }
    }

    useEffect(() => {
        CheckData()

        const backAction = () => {
            Alert.alert("Keluar", "Anda yakin ingin keluar ?", [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    return (
        <>
            {
                dataDashboard.code != 200 || dataListGreenHouse.code != 200 ?
                    <Loading /> :
                    <SafeAreaView style={[stylesGlobal.backgroundBackground, styles.container]} accessibilityElementsHidden>
                        <StatusBar
                            animated={true}
                            backgroundColor={'#09322D'} />
                        <View style={[stylesGlobal.backgroundBackground, stylesGlobal.backgroundPrimer, styles.profile]} >
                            <View style={{ marginLeft: '5%' }}>
                                <Text style={[stylesGlobal.onPrimary, stylesGlobal.header2]}>
                                    Hallo,
                                </Text>
                                <Text style={[stylesGlobal.secondary, stylesGlobal.header2]}>
                                    {'Penjaga Kebun'}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
                                <NotificationButton />
                                <TouchableOpacity onPress={logout}>
                                    <Icon name="logout" size={24} color="#ffff" />
                                </TouchableOpacity>

                            </View>
                        </View>
                        <View style={[stylesGlobal.backgroundBackground, stylesGlobal.backgroundPrimer, styles.date]}>
                            <View style={{ marginLeft: '5%' }}>
                                <Text style={[stylesGlobal.onPrimary, stylesGlobal.caption]}>
                                    {'Minggu,  05 Agustus 2022'}
                                </Text>
                            </View>
                            <View style={styles.greenHouseListTitleContainer}>
                                <Text style={[stylesGlobal.onPrimary, stylesGlobal.header2]}>
                                    List Greenhouse
                                </Text>
                                <Text style={[stylesGlobal.onPrimary, stylesGlobal.header3]} >
                                    {dataDashboard.data.greenhouse} Lokasi
                                </Text>
                            </View>
                        </View>
                        <View style={[stylesGlobal.backgroundPrimer, styles.shape]}>
                        </View>
                        <View style={[styles.scroll]}>
                            <View style={[stylesGlobal.surface, styles.scrollContainer]}>
                                <ScrollView >
                                    {dataListGreenHouse.data.map((item, index) => {
                                        return (
                                            <>

                                                <TouchableWithoutFeedback

                                                    onPress={() => navigate.navigate('GreenHousePage', {
                                                        id: item.id,
                                                    })}
                                                >
                                                    <View key={index.id}
                                                        style={[stylesGlobal.backgroundOnPrimary, styles.greenHouseCard]}>
                                                        <Image source={{
                                                            uri: item.image,
                                                        }} style={styles.greenHousePicture} />
                                                        <Text style={[stylesGlobal.primer, stylesGlobal.header3, { bottom: 10 }]}>
                                                            {item.name}
                                                        </Text>
                                                    </View>
                                                </TouchableWithoutFeedback>

                                                <View style={[stylesGlobal.backgroundBackground, styles.transparantBar]}>
                                                    <Text>
                                                    </Text>
                                                </View>


                                            </>

                                        )
                                    })}
                                </ScrollView>
                            </View>
                        </View>
                    </SafeAreaView>
            }
        </>

    );
};
export default BerandaPage;