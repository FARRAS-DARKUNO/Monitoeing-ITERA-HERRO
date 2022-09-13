import React,{useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import stylesGlobal from '../../utils/style_global';
import styles from '../beranda/beranda_style';
import Ionicons from 'react-native-vector-icons/Ionicons';
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

const [notif, setNotif] = useState([
    {
        id: 1,
        notifikasi:1
    },
    {
        id: 1,
        notifikasi:1
    },
    {
        id: 1,
        notifikasi:1
    },
    {
        id: 1,
        notifikasi:1
    },    {
        id: 1,
        notifikasi:1
    },
    {
        id: 1,
        notifikasi:1
    },    {
        id: 1,
        notifikasi:1
    },

]
);
const [notifications, setNotifications] = useState(null);
 
    return (
        <View style={[stylesGlobal.backgroundBackground,styles.container]}>
            <View style={[stylesGlobal.backgroundBackground,stylesGlobal.backgroundPrimer,styles.profile]} >
                <View style={{marginLeft:'5%'}}>
                <Text style={[stylesGlobal.onPrimary,stylesGlobal.header2]}>
                    Hallo,
                </Text>
                <Text style={[stylesGlobal.secondary,stylesGlobal.header2]}>
                    {akun[0].nama}
                </Text>
                </View>
                <TouchableOpacity>
                    {
                        notif.length > 0  && notif.length < 9 ? (
                            <View style={[stylesGlobal.backgroundOnError, { justifyContent: 'center', alignItems: 'center', alignContent: 'center', width: 19,top:19, height: 19, borderRadius: 14 }]}>
                                <Text style={stylesGlobal.body1}>{notif.length}</Text>
                            </View>
                    ) : (
                        <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center',width: 19, height: 19}}>
                        </View>
                        )
                    }
                    {
                        notif.length >= 9 ? (
                            <View style={[stylesGlobal.backgroundOnError, { justifyContent: 'center', alignItems: 'center', alignContent: 'center', width: 19, height: 19, borderRadius: 14 }]}>
                                <Text style={stylesGlobal.body1}>9+</Text>
                            </View>
                    ) : (
                        <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center',width: 19, height: 19}}>
                        </View>
                        )
                    }
                        <Ionicons name="notifications" size={24} color="#fff" style={[stylesGlobal.surface,{marginRight:10,left:-10,top:-12,zIndex:-1}]}/>
                </TouchableOpacity>
            </View>
            <View style={[stylesGlobal.backgroundBackground,stylesGlobal.backgroundPrimer,styles.date]}>
               <View style={{marginLeft:'5%'}}>
                    <Text style={[stylesGlobal.onPrimary,stylesGlobal.caption]}>
                        {akun[0].date}
                    </Text>
               </View> 
               <View style={{marginHorizontal:'5%', flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={[stylesGlobal.onPrimary,stylesGlobal.header2]}>
                        List Greenhouse
                    </Text>
                    <Text  style={[stylesGlobal.onPrimary,stylesGlobal.header3]} >
                        {akun[0].data.length} Place
                    </Text>
               </View>
            </View>
            <View style={[stylesGlobal.backgroundPrimer,styles.shape]}>
            </View>
                <View style={[styles.scroll]}>
                    <View style={[stylesGlobal.surface,{alignContent:'center',alignItems:'center',bottom:40}]}> 
                        <ScrollView >
                            <View>
                                {akun[0].data.map((item,index) => {
                                    return (
                                        <><TouchableOpacity key={index.id} style={[stylesGlobal.backgroundOnPrimary, {
                                            borderRadius: 5, width: 387, height: 250, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column', borderColor: '#171717',
                                            shadowOpacity: 0.8,
                                            elevation: 1,
                                        }]}>
                                            <Image source={item.gambar} style={{ marginVertical: 10, width: 362, height: 190, borderRadius: 5 }} />
                                            <Text style={[stylesGlobal.primer, stylesGlobal.header3, { bottom: 10 }]}>
                                                {item.nama}
                                            </Text>
                                        </TouchableOpacity><View style={[stylesGlobal.backgroundBackground, { width: '100%', height: '3%', top: 0, position: 'relative' }]}>
                                                <Text>
                                                </Text>
                                            </View></>
                            )})}
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
    );
};
export default BerandaPage;