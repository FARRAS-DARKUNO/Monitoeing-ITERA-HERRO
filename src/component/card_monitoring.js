import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Switch,
} from 'react-native';
import stylesGlobal from '../utils/style_global';
import axios from 'axios';
import { switchAkuator } from '../utils/api_link';
import Loading from './loading';

const CardMonitoring = (props) => {

    const data = props.data
    console.log(data.status_lifecycle)
    const [isLoading, setIsloading] = useState(false)

    const valueSwitchConvert = () => {
        if (data.status_lifecycle == 1) {
            return true
        }
        else {
            return false
        }
    }


    const [isEnabled, setIsEnabled] = useState(valueSwitchConvert);

    const toggleSwitch = () => {
        if (isEnabled == true) {
            axios.post(switchAkuator, {
                id_actuator: data.id,
                on_off_status: 0
            })
                .then(response => {
                    console.log(response)
                    setIsloading(false)
                    setIsEnabled(replace => !replace)
                })
        }
        else {
            axios.post(switchAkuator, {
                id_actuator: data.id,
                on_off_status: 1
            })
                .then(response => {
                    console.log(response)
                    setIsloading(false)
                    setIsEnabled(replace => !replace)
                })
        }
    };

    return (
        <>

            {
                !isLoading ?
                    <View style={styles.card}>
                        <View style={styles.titleAndIcon}>
                            <Image style={styles.imageIcon} source={{ uri: data.icon }} />
                            <View style={stylesGlobal.space10} />
                            <Text style={[stylesGlobal.header2, stylesGlobal.primer]}>
                                {data.name}
                            </Text>
                        </View>

                        <Switch
                            trackColor={{ false: "#767577", true: "#767577" }}
                            thumbColor={isEnabled ? data.color : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => {
                                setIsloading(true)
                                toggleSwitch()
                            }}
                            value={isEnabled}
                        />

                    </View> :
                    <Loading />
            }

        </>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 60,
        backgroundColor: '#ffff',
        borderRadius: 10,
        borderColor: '#171717',
        shadowOpacity: 1,
        elevation: 1,
        shadowRadius: 1,
        marginBottom: 10,
        padding: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    titleAndIcon: {
        flexDirection: 'row',

    },
    imageIcon: {
        height: 24,
        width: 24,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CardMonitoring