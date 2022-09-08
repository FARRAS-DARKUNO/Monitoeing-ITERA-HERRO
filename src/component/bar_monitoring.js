import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    StatusBar,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
} from 'react-native';
import stylesGlobal from '../utils/style_global';

const BarMonitoring = () => {
    return (
        <View style={[stylesGlobal.backgroundPrimer, styles.navBar]}>
            <View style={styles.menuBar}>
                <View style={styles.monitoring}>
                    <Text style={[stylesGlobal.body1, stylesGlobal.primer]}>
                        Monitor
                    </Text>
                </View>
                <View style={styles.controlling}>
                    <Text style={[stylesGlobal.body1, stylesGlobal.surface]}>
                        Kontrol
                    </Text>
                </View>
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