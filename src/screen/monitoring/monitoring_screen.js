import React, { useEffect, useState } from 'react';
import {
    View,
    ScrollView,
    Text,
} from 'react-native';
import styles from './monitoring_style';
import PersenMonitoring from '../../component/persen_monitoring';
import DegreeMonitoring from '../../component/degree_monitoring';
import ElseMonitoring from '../../component/else_monitoring';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { getMonitoringById } from '../../redux/action';
import Loading from '../../component/loading';

const MonitoringScreen = (props) => {

    const id = props.data.idData

    const dispatch = useDispatch()

    const { dataMonitoringByid } = useSelector(
        state => state.userReducer,
    );

    const getApiById = () => {
        AsyncStorage.getItem('token')
            .then(respons => {
                console.log('ini monitor' + id)
                dispatch(getMonitoringById(id, respons))
            })
    }
    useEffect(() => {
        getApiById()
    }, []);

    return (
        <>
            {
                dataMonitoringByid != undefined ?
                    <View style={{ height: '68%', width: '100%' }}>
                        <ScrollView>
                            <View style={styles.container}>
                                {
                                    dataMonitoringByid.map((placement) => {
                                        console.log('hallooooo')
                                        if (placement.category.name == 'Persen') {
                                            return (
                                                <PersenMonitoring data={{
                                                    brand: placement.brand,
                                                    icon: placement.icon,
                                                    color: placement.color,
                                                    name: placement.name,
                                                    status: 1,
                                                    tanggal: '2021-06-06 17:38:51',
                                                    jenis: 'persen',
                                                    unit: placement.unit_measurement,
                                                    value: 50,
                                                    id: placement.id,
                                                    range_min: placement.range_min,
                                                    range_max: placement.range_max,
                                                }} />
                                            )
                                        }
                                        else if (placement.category.name == 'Derajat') {
                                            return (
                                                <DegreeMonitoring data={{
                                                    brand: placement.brand,
                                                    icon: placement.icon,
                                                    color: placement.color,
                                                    name: placement.name,
                                                    status: 1,
                                                    tanggal: '2021-06-06 17:38:51',
                                                    unit: 'persen',
                                                    unit: placement.unit_measurement,
                                                    value: 50,
                                                    id: placement.id,
                                                    range_min: placement.range_min,
                                                    range_max: placement.range_max,
                                                }} />
                                            )
                                        }
                                        else if (placement.category.name == 'Lainnya') {
                                            return (
                                                <ElseMonitoring data={{
                                                    brand: placement.brand,
                                                    icon: placement.icon,
                                                    color: placement.color,
                                                    name: placement.name,
                                                    status: 1,
                                                    tanggal: '2021-06-06 17:38:51',
                                                    jenis: 'persen',
                                                    unit: placement.unit_measurement,
                                                    value: 50,
                                                    id: placement.id,
                                                    range_min: placement.range_min,
                                                    range_max: placement.range_max,
                                                }} />
                                            )
                                        }
                                    })
                                }
                            </View>
                        </ScrollView>
                    </View> :
                    <Loading />
            }

        </>


    );
};

export default MonitoringScreen;