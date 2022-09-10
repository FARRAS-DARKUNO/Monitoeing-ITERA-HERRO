import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions
} from 'react-native';
import stylesGlobal from '../../utils/style_global';
import styles from './graphic_style';
import SelectDropdown from 'react-native-select-dropdown'
import {
    LineChart,
} from "react-native-chart-kit";


const GraphicScreen = ({ navigation }) => {
    const screenWidth = Dimensions.get("window").width - 20;

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


    return (
        <View style={{ width: '100%' }}>
            <View style={styles.statistik}>
                <Text style={[stylesGlobal.header2, stylesGlobal.primer]}>
                    Statistik
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

            <View style={styles.graphicbar}>
                <LineChart
                    data={data}
                    width={screenWidth}
                    // style={styles.graphicbar}
                    height={250}
                    verticalLabelRotation={30}
                    chartConfig={{
                        backgroundGradientFrom: "#FFFF",
                        backgroundGradientFromOpacity: 1,
                        backgroundGradientTo: "#FFFF",
                        backgroundGradientToOpacity: 0.5,
                        color: (opacity = 1) => `rgba(20, 69, 62, ${opacity})`,
                        strokeWidth: 2,
                        barPercentage: 0.5,
                        useShadowColorFromDataset: false
                    }}
                    bezier
                />
            </View>
        </View>
    );
};

export default GraphicScreen;