import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    StatusBar,
    SafeAreaView,
    ImageBackground,
} from 'react-native';
import styles from './green_house_style';
import stylesGlobal from '../../utils/style_global';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import BarMonitoring from '../../component/bar_monitoring';
import BarControlling from '../../component/bar_controlling';
import { useDispatch, useSelector } from 'react-redux';

const GreenHousePage = ({ navigation }) => {

    const { menuMoCon } = useSelector(
        state => state.userReducer,
    );

    let imageTest = 'https://awsimages.detik.net.id/community/media/visual/2021/10/23/taman-prestasi-1_169.jpeg?w=1200'

    console.log(menuMoCon)
    return (
        <>
            <SafeAreaView style={stylesGlobal.surface} >
                <ScrollView>
                    <StatusBar
                        animated={true}
                        hidden={true} />
                    <ImageBackground
                        resizeMode="cover"
                        source={{ uri: imageTest }}
                        style={styles.container}
                    >
                        <View style={styles.imageBackgroundPlus}>
                            <View style={styles.backView}>
                                <Icon name="arrow-back" size={24} color="#ffff" />
                                <View style={stylesGlobal.space10} />
                                <Text style={[stylesGlobal.header2, { color: '#ffff' }]}>
                                    Green House 1
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.monitoringAndControlling}>
                        {
                            menuMoCon == 'monitoring'
                                ? <BarMonitoring />
                                : null
                        }
                        {
                            menuMoCon == 'controlling'
                                ? <BarControlling />
                                : null
                        }


                    </View>

                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default GreenHousePage;