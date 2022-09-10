import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from 'react-native';
import styles from './detail_monitoring_style';
import stylesGlobal from '../../utils/style_global';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import CardDetail from '../../component/card_detail';

const DetailMonitoringPage = ({ navigation }) => {

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

        </SafeAreaView>
    );
};

export default DetailMonitoringPage;