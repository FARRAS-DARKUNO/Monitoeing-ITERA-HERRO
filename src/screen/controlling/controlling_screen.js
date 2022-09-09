import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    Switch,
} from 'react-native';
import styles from './controlling_style';
import stylesGlobal from '../../utils/style_global';
import CardMonitoring from '../../component/card_monitoring';


const ContrillingScreen = ({ navigation }) => {

    let dataDummie = [
        {
            icon: 'https://toppng.com/uploads/preview/cooling-pump-icon-water-pump-motor-icon-11553442155hp1pvj9tkv.png',
            name: 'Pompa Air',
            color: "#007BFF",
        },
        {
            icon: 'https://toppng.com/uploads/preview/cooling-pump-icon-water-pump-motor-icon-11553442155hp1pvj9tkv.png',
            name: 'Kipas Angin',
            color: "#57A519",
        },
        {
            icon: 'https://toppng.com/uploads/preview/cooling-pump-icon-water-pump-motor-icon-11553442155hp1pvj9tkv.png',
            name: 'Kecap Geliga',
            color: "#007BFF",
        },
        {
            icon: 'https://toppng.com/uploads/preview/cooling-pump-icon-water-pump-motor-icon-11553442155hp1pvj9tkv.png',
            name: 'Balsem cap Gajah',
            color: "#396D10",
        },
        {
            icon: 'https://toppng.com/uploads/preview/cooling-pump-icon-water-pump-motor-icon-11553442155hp1pvj9tkv.png',
            name: 'Pompa Air',
            color: "#007BFF",
        },
        {
            icon: 'https://toppng.com/uploads/preview/cooling-pump-icon-water-pump-motor-icon-11553442155hp1pvj9tkv.png',
            name: 'Kipas Angin',
            color: "#57A519",
        },
        {
            icon: 'https://toppng.com/uploads/preview/cooling-pump-icon-water-pump-motor-icon-11553442155hp1pvj9tkv.png',
            name: 'Kecap Geliga',
            color: "#007BFF",
        },
        {
            icon: 'https://toppng.com/uploads/preview/cooling-pump-icon-water-pump-motor-icon-11553442155hp1pvj9tkv.png',
            name: 'Balsem cap Gajah',
            color: "#396D10",
        },
    ]

    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    dataDummie.map((value) => (
                        <CardMonitoring data={{
                            icon: value.icon,
                            name: value.name,
                            color: value.color
                        }} />
                    ))
                }

            </ScrollView>
        </View>
    );
};

export default ContrillingScreen;