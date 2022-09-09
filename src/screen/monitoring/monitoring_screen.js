import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import styles from './monitoring_style';
import stylesGlobal from '../../utils/style_global';
import ProgressCircle from 'react-native-progress-circle';
import PersenMonitoring from '../../component/persen_monitoring';

const MonitoringScreen = ({ navigation }) => {
    let DummieData = [
        {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFdJtYeN28Zsl_3Vc9PejqIWbhdKASLgC95ZuILxqHVhzP-F7XvmfHc34zIHRkifWDJU&usqp=CAU',
            color: '#3399FF',
            name: 'Kelembapan',
            status: 1,
            tanggal: '2021-06-06 17:38:51',
            jenis: 'persen',
            value: 50,
        }
    ]

    return (
        <View style={styles.container}>
            <PersenMonitoring data={{
                icon: DummieData[0].icon,
                color: DummieData[0].color,
                name: DummieData[0].name,
                status: DummieData[0].status,
                tanggal: DummieData[0].tanggal,
                jenis: DummieData[0].jenis,
                value: DummieData[0].value
            }} />
        </View>
    );
};

export default MonitoringScreen;