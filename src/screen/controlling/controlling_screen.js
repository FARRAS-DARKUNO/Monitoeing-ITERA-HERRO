import React, { useState, useEffect } from 'react';
import {
    View,
    ScrollView,
} from 'react-native';
import styles from './controlling_style';
import CardMonitoring from '../../component/card_monitoring';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { getControllingById } from '../../redux/action';
import Loading from '../../component/loading';

const ContrillingScreen = (props) => {

    const id = props.data.idData

    const dispatch = useDispatch()

    const { dataControllingByid, menuMoCon } = useSelector(
        state => state.userReducer,
    );

    const getApiById = () => {
        AsyncStorage.getItem('token')
            .then(respons => {
                dispatch(getControllingById(id, respons))
            })
    }

    useEffect(() => {
        getApiById()
    }, [menuMoCon]);


    return (
        <>
            {
                dataControllingByid != undefined ?
                    <View style={styles.container}>
                        <ScrollView>
                            {dataControllingByid != undefined ?
                                dataControllingByid.map((value) => {
                                    return (
                                        < CardMonitoring data={{
                                            id: value.id,
                                            icon: value.icon,
                                            name: value.name,
                                            color: value.color,
                                            topic_broker: value.topic_broker,
                                            updated_at: value.updated_at,
                                            status_lifecycle: value.status_lifecycle,
                                        }} />
                                    )

                                })
                                : null
                            }

                        </ScrollView>
                    </View> :
                    <Loading />
            }
        </>

    );
};

export default ContrillingScreen;