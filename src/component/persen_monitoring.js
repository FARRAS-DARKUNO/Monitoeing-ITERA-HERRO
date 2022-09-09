import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import stylesGlobal from '../utils/style_global';
import ProgressCircle from 'react-native-progress-circle';

const PersenMonitoring = (props) => {

    let data = props.data

    return (
        <TouchableOpacity style={styles.persenData}>
            <View style={styles.insideCard}>
                <View style={styles.titleAndIcon}>
                    <Image source={{ uri: data.icon }} style={styles.imageIcon} />
                    <View style={stylesGlobal.space10} />
                    <Text style={[stylesGlobal.header3, { color: data.color }]}>
                        {data.name}
                    </Text>
                </View>

                <ProgressCircle
                    percent={data.value}
                    radius={30}
                    borderWidth={8}
                    color={data.color}
                    shadowColor="#F2F2F2"
                    bgColor="#fff"
                >
                    <Text style={{ fontSize: 14 }}>{data.value}{'%'}</Text>
                </ProgressCircle>

                <View style={{ alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[stylesGlobal.caption, stylesGlobal.primer]}>
                            {'Status : '}
                        </Text>
                        {
                            data.status == 1 ?
                                <Text style={[stylesGlobal.caption, stylesGlobal.secondary]}>
                                    online
                                </Text> :
                                <Text style={[stylesGlobal.caption, stylesGlobal.error]}>
                                    offline
                                </Text>
                        }

                    </View>
                    <Text style={stylesGlobal.caption}>
                        {data.tanggal}
                    </Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    insideCard: {
        width: '100%',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    persenData: {
        width: '49%',
        height: 180,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#171717',
        shadowOpacity: 1,
        borderRadius: 10,
        elevation: 1,
        shadowRadius: 10,
        padding: 20,
        alignItems: 'center',
        marginBottom: 10,
    },
    titleAndIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageIcon: {
        height: 24,
        width: 24,
        backgroundColor: 'red',
        resizeMode: 'stretch',
    },

});

export default PersenMonitoring;