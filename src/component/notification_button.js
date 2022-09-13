import { View, Text, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import stylesGlobal from '../utils/style_global';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NotificationButton = ({ navigation }) => {
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
  return (
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
  )
}
export default NotificationButton;
