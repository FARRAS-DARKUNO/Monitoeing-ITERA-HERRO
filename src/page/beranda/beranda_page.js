import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import stylesGlobal from '../../utils/style_global';
import styles from '../beranda/beranda_style';
import NotificationButton from '../../component/notification_button';
const BerandaPage = ({ navigation }) => {
    const [akun, setAkun] = useState([
        {
            id: 1,
            nama: 'Mayonice',
            date: 'Minggu,  05 Agustus 2022',
            data: [{
                id: 1,
                nama: 'Greenhouse 1',
                gambar: require('../../../assets//images/greenhouse.jpg'),

            },
            {
                id: 2,
                nama: 'Greenhouse 2',
                gambar: require('../../../assets//images/greenhouse.jpg'),

            },
            {
                id: 3,
                nama: 'Greenhouse 3',
                gambar: require('../../../assets//images/greenhouse.jpg'),
            },

            ]
        }]);
    return (
        <View style={[stylesGlobal.backgroundBackground, styles.container]}>
            <View style={[stylesGlobal.backgroundBackground, stylesGlobal.backgroundPrimer, styles.profile]} >
                <View style={{ marginLeft: '5%' }}>
                    <Text style={[stylesGlobal.onPrimary, stylesGlobal.header2]}>
                        Hallo,
                    </Text>
                    <Text style={[stylesGlobal.secondary, stylesGlobal.header2]}>
                        {akun[0].nama}
                    </Text>
                </View>
                <NotificationButton />
            </View>
            <View style={[stylesGlobal.backgroundBackground, stylesGlobal.backgroundPrimer, styles.date]}>
                <View style={{ marginLeft: '5%' }}>
                    <Text style={[stylesGlobal.onPrimary, stylesGlobal.caption]}>
                        {akun[0].date}
                    </Text>
                </View>
                <View style={styles.greenHouseListTitleContainer}>
                    <Text style={[stylesGlobal.onPrimary, stylesGlobal.header2]}>
                        List Greenhouse
                    </Text>
                    <Text style={[stylesGlobal.onPrimary, stylesGlobal.header3]} >
                        {akun[0].data.length} Lokasi
                    </Text>
                </View>
            </View>
            <View style={[stylesGlobal.backgroundPrimer, styles.shape]}>
            </View>
            <View style={[styles.scroll]}>
                <View style={[stylesGlobal.surface, styles.scrollContainer]}>
                    <ScrollView >
                        {akun[0].data.map((item, index) => {
                            return (
                                <>

                                    <TouchableWithoutFeedback

                                        onPress={() => console.log('mantap')}
                                    >
                                        <View key={index.id}
                                            style={[stylesGlobal.backgroundOnPrimary, styles.greenHouseCard]}>
                                            <Image source={item.gambar} style={styles.greenHousePicture} />
                                            <Text style={[stylesGlobal.primer, stylesGlobal.header3, { bottom: 10 }]}>
                                                {item.nama}
                                            </Text>
                                        </View>
                                    </TouchableWithoutFeedback>

                                    <View style={[stylesGlobal.backgroundBackground, styles.transparantBar]}>
                                        <Text>
                                        </Text>
                                    </View>


                                </>

                            )
                        })}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};
export default BerandaPage;