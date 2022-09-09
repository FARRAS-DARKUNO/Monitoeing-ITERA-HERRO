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

const DetailMonitoringPage = ({ navigation }) => {

    let image = 'https://png.pngtree.com/template/20190316/ourmid/pngtree-water-logo-image_79174.jpg'
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
            <View style={{ width: '100%', paddingHorizontal: 20 }}>
                <View style={[styles.realTime, { backgroundColor: '#10B8DD' }]}>
                    <View style={styles.dataRealtime}>
                        <View style={styles.cisrcle}>
                            <Image
                                style={{ height: 24, width: 24 }}
                                source={{ uri: image }}
                            />
                        </View>
                        <View style={stylesGlobal.space10} />
                        <View style={styles.textRealtime}>
                            <Text style={[stylesGlobal.header3, { color: '#ffff' }]}>
                                suhu riangan udara
                            </Text>
                            <Text style={[stylesGlobal.header2, { color: '#FFFF' }]}>{'75'}{'%'}</Text>
                        </View>
                    </View>
                    <View style={styles.checkOn}>
                        <View style={[{ height: 10, width: 10, borderRadius: 100 }, stylesGlobal.backgroundSecondary]} />
                        <Text style={[stylesGlobal.caption, stylesGlobal.primer]}> Online</Text>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
};

export default DetailMonitoringPage;