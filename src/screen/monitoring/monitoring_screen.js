import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import styles from './monitoring_style';
import stylesGlobal from '../../utils/style_global';
import ProgressCircle from 'react-native-progress-circle';
import PersenMonitoring from '../../component/persen_monitoring';
import DegreeMonitoring from '../../component/degree_monitoring';
import ElseMonitoring from '../../component/else_monitoring';

const MonitoringScreen = ({ navigation }) => {
    let DummieData = [
        {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFdJtYeN28Zsl_3Vc9PejqIWbhdKASLgC95ZuILxqHVhzP-F7XvmfHc34zIHRkifWDJU&usqp=CAU',
            color: '#3399FF',
            name: 'Kelembapan',
            status: 1,
            tanggal: '2021-06-06 17:38:51',
            jenis: 'persen',
            unit: 'persen',
            value: 50,
        },
        {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFdJtYeN28Zsl_3Vc9PejqIWbhdKASLgC95ZuILxqHVhzP-F7XvmfHc34zIHRkifWDJU&usqp=CAU',
            color: '#0B8559',
            name: 'Suhu Lingkungan',
            status: 0,
            tanggal: '2021-06-06 17:31:51',
            jenis: 'derajat',
            unit: 'Celcius',
            value: 29.8,
        },
        {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFdJtYeN28Zsl_3Vc9PejqIWbhdKASLgC95ZuILxqHVhzP-F7XvmfHc34zIHRkifWDJU&usqp=CAU',
            color: '#B7A925',
            name: 'Insensitas Cahaya',
            status: 1,
            tanggal: '2021-06-03 17:31:51',
            jenis: 'else',
            unit: 'Lux',
            value: 22139.8,
        },
        {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFdJtYeN28Zsl_3Vc9PejqIWbhdKASLgC95ZuILxqHVhzP-F7XvmfHc34zIHRkifWDJU&usqp=CAU',
            color: '#3399FF',
            name: 'Kelembapan',
            status: 1,
            tanggal: '2021-06-06 17:38:51',
            jenis: 'persen',
            unit: 'persen',
            value: 50,
        },
        {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFdJtYeN28Zsl_3Vc9PejqIWbhdKASLgC95ZuILxqHVhzP-F7XvmfHc34zIHRkifWDJU&usqp=CAU',
            color: '#0B8559',
            name: 'Suhu Lingkungan',
            status: 0,
            tanggal: '2021-06-06 17:31:51',
            jenis: 'derajat',
            unit: 'Celcius',
            value: 29.8,
        },
        {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFdJtYeN28Zsl_3Vc9PejqIWbhdKASLgC95ZuILxqHVhzP-F7XvmfHc34zIHRkifWDJU&usqp=CAU',
            color: '#B7A925',
            name: 'Insensitas Cahaya',
            status: 1,
            tanggal: '2021-06-03 17:31:51',
            jenis: 'else',
            unit: 'Lux',
            value: 22139.8,
        },
    ]

    return (
        <View style={{ height: '68%', width: '100%' }}>
            <ScrollView>
                <View style={styles.container}>
                    {
                        DummieData.map((placement) => {
                            if (placement.jenis == 'persen') {
                                return (
                                    <PersenMonitoring data={{
                                        icon: placement.icon,
                                        color: placement.color,
                                        name: placement.name,
                                        status: placement.status,
                                        tanggal: placement.tanggal,
                                        jenis: placement.jenis,
                                        value: placement.value,
                                        unit: placement.unit,
                                    }} />
                                )
                            }
                            else if (placement.jenis == 'derajat') {
                                return (
                                    <DegreeMonitoring data={{
                                        icon: placement.icon,
                                        color: placement.color,
                                        name: placement.name,
                                        status: placement.status,
                                        tanggal: placement.tanggal,
                                        jenis: placement.jenis,
                                        value: placement.value,
                                        unit: placement.unit,
                                    }} />
                                )
                            }
                            else if (placement.jenis == 'else') {
                                return (
                                    <ElseMonitoring data={{
                                        icon: placement.icon,
                                        color: placement.color,
                                        name: placement.name,
                                        status: placement.status,
                                        tanggal: placement.tanggal,
                                        jenis: placement.jenis,
                                        value: placement.value,
                                        unit: placement.unit,
                                    }} />
                                )
                            }
                        })
                    }
                </View>
            </ScrollView>
        </View>

    );
};

export default MonitoringScreen;