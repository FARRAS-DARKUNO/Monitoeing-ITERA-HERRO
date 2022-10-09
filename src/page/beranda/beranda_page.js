import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    BackHandler,
    Alert
} from 'react-native';
import stylesGlobal from '../../utils/style_global';
import styles from '../beranda/beranda_style';
import NotificationButton from '../../component/notification_button';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const BerandaPage = () => {

    const navigate = useNavigation()

    const { dataListGreenHouse, dataDashboard } = useSelector(
        state => state.userReducer,
    );


    useEffect(() => {
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

    console.log(dataDashboard)

    return (
        <View style={[stylesGlobal.backgroundBackground, styles.container]}>
            <View style={[stylesGlobal.backgroundBackground, stylesGlobal.backgroundPrimer, styles.profile]} >
                <View style={{ marginLeft: '5%' }}>
                    <Text style={[stylesGlobal.onPrimary, stylesGlobal.header2]}>
                        Hallo,
                    </Text>
                    <Text style={[stylesGlobal.secondary, stylesGlobal.header2]}>
                        {'Penjaga Kebun'}
                    </Text>
                </View>
                <NotificationButton />
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
                        {dataDashboard.greenhouse} Lokasi
                    </Text>
                </View>
            </View>
            <View style={[stylesGlobal.backgroundPrimer, styles.shape]}>
            </View>
            <View style={[styles.scroll]}>
                <View style={[stylesGlobal.surface, styles.scrollContainer]}>
                    <ScrollView >
                        {dataListGreenHouse.map((item, index) => {
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
        </View>
    );
};
export default BerandaPage;