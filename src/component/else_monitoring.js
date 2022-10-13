import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import stylesGlobal from '../utils/style_global';
import axios from 'axios';
import { sensorBroker } from '../utils/api_link';

const ElseMonitoring = (props) => {

    let data = props.data

    const [value, setValue] = useState(0)
    const [refresh, setRefresh] = useState(true)
    const [first, checkFirst] = useState(true)

    const onRefreshSatu = () => {
        setTimeout(() => {
            axios.get(sensorBroker + data.id)
                .then(response => {
                    setValue(response.data.data[0].value)
                    console.log(response.data.data[0].value)
                    setRefresh(true)
                })
        }, 1000)
    }

    const onRefreshDua = () => {
        setTimeout(() => {
            axios.get(sensorBroker + data.id)
                .then(response => {
                    setValue(response.data.data[0].value)
                    console.log(response.data.data[0].value)
                    setRefresh(false)
                })
        }, 1000)
    }

    const getDataApiWebBroker = () => {
        axios.get(sensorBroker + data.id)
            .then(response => {
                setValue(response.data.data[0].value)
                console.log(response.data.data[0].value)
                setRefresh(false)
            })
    }

    const onRefreshFinal = () => {
        if (refresh == false) {
            onRefreshSatu()
            // console.log('satu')
        }
        if (refresh == true) {
            onRefreshDua()
            // console.log('dua')
        }
    }

    useEffect(() => {
        if (first == true) {
            getDataApiWebBroker()
        }
        else {
            onRefreshFinal()
        }

        return () => checkFirst(false)
    }, [refresh, first])

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

                <View style={{ alignItems: 'center' }}>
                    {
                        value > data.range_max || value < data.range_min ?
                            <Text style={[stylesGlobal.header2, stylesGlobal.error]}>
                                {value}
                            </Text> :
                            <Text style={[stylesGlobal.header2, { color: data.color }]}>
                                {value}
                            </Text>
                    }
                    {
                        value > data.range_max || value < data.range_min ?
                            <Text style={[stylesGlobal.header2, stylesGlobal.error]}>
                                {data.unit}
                            </Text> :
                            <Text style={[stylesGlobal.header2, { color: data.color }]}>
                                {data.unit}
                            </Text>
                    }
                </View>

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
        resizeMode: 'stretch',
    },

});

export default ElseMonitoring;