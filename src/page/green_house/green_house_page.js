import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    ImageBackground,
} from 'react-native';
import styles from './green_house_style';
import stylesGlobal from '../../utils/style_global';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import BarMonitoring from '../../component/bar_monitoring';
import BarControlling from '../../component/bar_controlling';
import MonitoringScreen from '../../screen/monitoring/monitoring_screen';
import { useDispatch, useSelector } from 'react-redux';
import ContrillingScreen from '../../screen/controlling/controlling_screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getApiGeenhouseById } from '../../redux/action';
import Loading from '../../component/loading';

const GreenHousePage = ({ route, navigation }) => {

    const { id } = route.params

    const [isLoading, setLoading] = useState(true)

    const dispatch = useDispatch()

    const { menuMoCon, dataGreenhouseById } = useSelector(
        state => state.userReducer,
    );

    const getApiById = () => {
        AsyncStorage.getItem('token')
            .then(respons => {
                dispatch(getApiGeenhouseById(id, respons))
            }).finally(() => setLoading(false))
    }
    useEffect(() => {
        getApiById()
        return () => setLoading(true);
    }, []);
    return (
        <>
            {
                isLoading == false && dataGreenhouseById.data != undefined ?
                    <SafeAreaView style={[stylesGlobal.surface, { flex: 1 }]} >

                        <StatusBar
                            animated={true}
                            backgroundColor={'#09322D'} />
                        <ImageBackground
                            resizeMode="cover"
                            source={{ uri: dataGreenhouseById.data.image }}
                            style={styles.container}
                        >
                            <TouchableOpacity style={styles.imageBackgroundPlus} onPress={() => navigation.goBack()}>
                                <View style={styles.backView}>
                                    <Icon name="arrow-back" size={24} color="#ffff" />
                                    <View style={stylesGlobal.space10} />
                                    <Text style={[stylesGlobal.header2, { color: '#ffff' }]}>
                                        {dataGreenhouseById.data.name}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </ImageBackground>

                        <View style={styles.monitoringAndControlling}>

                            {
                                menuMoCon == 'monitoring' ?
                                    <>
                                        <BarMonitoring />
                                        <View style={stylesGlobal.enter20} />
                                        <MonitoringScreen data={{ idData: id }} />
                                    </>
                                    : null
                            }
                            {
                                menuMoCon == 'controlling' ?
                                    <>
                                        <BarControlling />
                                        <View style={stylesGlobal.enter20} />
                                        <ContrillingScreen data={{ idData: id }} />
                                    </>
                                    : null
                            }


                        </View>


                    </SafeAreaView>
                    : <Loading />
            }

        </>
    );
};

export default GreenHousePage;