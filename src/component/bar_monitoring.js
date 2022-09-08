import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import stylesGlobal from '../utils/style_global';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuMonotoringControlling } from '../redux/action';

const BarMonitoring = () => {
    const dispatch = useDispatch();

    const ChangeMenu = (data) => {
        dispatch(setMenuMonotoringControlling(data))
    }
    return (
        <View style={[stylesGlobal.backgroundPrimer, styles.navBar]}>
            <View style={styles.menuBar}>
                <View style={styles.monitoring}>
                    <Text style={[stylesGlobal.body1, stylesGlobal.primer]}>
                        Monitor
                    </Text>
                </View>
                <TouchableOpacity style={styles.controlling} onPress={() => {
                    ChangeMenu("controlling")

                }}>
                    <Text style={[stylesGlobal.body1, stylesGlobal.surface]}>
                        Kontrol
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navBar: {
        height: 50,
        width: '100%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginRight: 10,
    },
    menuBar: {
        width: "100%",
        height: '100%',
        flexDirection: 'row',
    },
    monitoring: {
        width: "50%",
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    controlling: {
        width: "50%",
        height: '100%',
        // backgroundColor: 'blue',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }

});
export default BarMonitoring