import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import styles from './detail_monitoring_style';
import stylesGlobal from '../../utils/style_global';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import CardDetail from '../../component/card_detail';
import MenuDetailGraphic from '../../component/menu_detail_grafik';
import MenuDetailRiwayat from '../../component/menu_detail_riwayat';
import GraphicScreen from '../../screen/graphic/graphic_screen';
import { useSelector } from 'react-redux';


const DetailMonitoringPage = ({ navigation }) => {

    const { menuGraRi } = useSelector(
        state => state.userReducer,
    );

    let dataDummie = {
        icon: 'https://png.pngtree.com/template/20190316/ourmid/pngtree-water-logo-image_79174.jpg',
        color: '#10B8DD',
        status: 1,
        value: 75,
        jenis: 'persen',
        unit: 'persen',
        name: 'Kelembaban Dah'
    }


    return (
        <SafeAreaView style={stylesGlobal.surface}>
            <StatusBar
                animated={true}
                hidden={true}
            />
            <View style={[styles.header, stylesGlobal.backgroundPrimer]}>
                <TouchableOpacity style={styles.buttonBack}>
                    <Icon name="arrow-back" size={24} color="#ffff" />
                    <View style={stylesGlobal.space10} />
                    <Text style={[stylesGlobal.header2, { color: '#ffff' }]}>
                        Green House 1
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={stylesGlobal.enter20} />
            <View style={styles.detail}>
                <Text style={[stylesGlobal.header2, stylesGlobal.primer]}>
                    Detail
                </Text>
                <Text style={[stylesGlobal.header3, stylesGlobal.primer]}>
                    2021-06-06 17:38:52
                </Text>
            </View>
            <CardDetail data={{
                icon: dataDummie.icon,
                color: dataDummie.color,
                status: dataDummie.status,
                value: dataDummie.value,
                jenis: dataDummie.jenis,
                unit: dataDummie.unit,
                name: dataDummie.name
            }} />
            <View style={stylesGlobal.enter20} />
            <View style={{ paddingHorizontal: 20 }}>
                {
                    menuGraRi == 'history' ?
                        <>
                            <MenuDetailRiwayat />
                            <View style={stylesGlobal.enter20} />
                        </>
                        : null
                }
                {
                    menuGraRi == 'graphic' ?
                        <>
                            <MenuDetailGraphic />
                            <View style={stylesGlobal.enter20} />
                            <GraphicScreen />
                        </>
                        : null
                }
            </View>

        </SafeAreaView>
    );
};

export default DetailMonitoringPage;