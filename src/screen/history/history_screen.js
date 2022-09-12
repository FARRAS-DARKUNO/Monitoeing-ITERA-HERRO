import React from 'react';
import {
    ScrollView,
    View,
    Text,
} from 'react-native';
import styles from './history_style';
import stylesGlobal from '../../utils/style_global';
import SelectDropdown from 'react-native-select-dropdown'

const HistoryScreen = ({ navigation }) => {

    const countries = [2021, 2022, 2023, 2024]
    const bulan = ['Januari', 'Februari', 'Maret', "April", "Mei", 'Juni', "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

    const data = {
        labels: ["1", "2", "3", "4"],
        datasets: [
            {
                data: [20.3, 45.2, 28.4, 20.2],
                color: (opacity = 1) => `rgba(20, 69, 62, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
    };

    const dataAvarage = [
        {
            date: '27-07-2001',
            value: '27.76747',
        },
        {
            date: '27-07-2001',
            value: '27.76747',
        },
        {
            date: '27-07-2001',
            value: '27.76777',
        },
        {
            date: '27-07-2001',
            value: '27.70747',
        },
        {
            date: '27-07-2001',
            value: '27.76747',
        },
        {
            date: '27-07-2001',
            value: '27.76747',
        },
        {
            date: '27-07-2001',
            value: '27.76777',
        },
        {
            date: '27-07-2001',
            value: '27.70747',
        },
        {
            date: '27-07-2001',
            value: '27.76747',
        },
        {
            date: '27-07-2001',
            value: '27.76747',
        },
        {
            date: '27-07-2001',
            value: '27.76777',
        },
        {
            date: '27-07-2001',
            value: '27.70747',
        },
    ]


    return (
        <View style={{ width: '100%' }}>
            <View style={styles.statistik}>
                <Text style={[stylesGlobal.header2, stylesGlobal.primer]}>
                    Rata-rata
                </Text>
                <View style={styles.viewBottom}>
                    <SelectDropdown
                        data={countries}
                        buttonStyle={styles.buttonSelectYear}
                        buttonTextStyle={styles.textButton}
                        defaultValue={countries[0]}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                    />

                    <SelectDropdown
                        data={bulan}
                        buttonStyle={styles.buttonSelectMonth}
                        buttonTextStyle={styles.textButton}
                        defaultValue={bulan[0]}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                    />
                </View>

            </View>
            <View style={stylesGlobal.enter20} />
            <View style={styles.scrolling}>
                <ScrollView>
                    {
                        dataAvarage.map((note) => (

                            <>

                                <View style={styles.dataAvarage}>
                                    <View>
                                        <Text style={[stylesGlobal.header2, stylesGlobal.onBackground]}>
                                            Kelambaban
                                        </Text>
                                        <Text style={[stylesGlobal.body2, stylesGlobal.onBackground]}>
                                            {note.date}
                                        </Text>
                                    </View>
                                    <View style={[styles.valueAvarage, { backgroundColor: '#10B8DD' }]}>
                                        <Text style={[stylesGlobal.header3, stylesGlobal.surface, { paddingHorizontal: 10 }]}>
                                            {note.value}
                                        </Text>
                                    </View>
                                </View>

                            </>

                        ))
                    }

                </ScrollView>
            </View>

        </View>
    );
};

export default HistoryScreen;