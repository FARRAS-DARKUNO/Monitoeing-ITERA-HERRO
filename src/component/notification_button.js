import { View, Text, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import stylesGlobal from '../utils/style_global';
import styles from './notification_button_style';
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
    },    {
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
            <View style={[stylesGlobal.backgroundOnError,styles.backgroundNotificationNumber,{top:19}]}>
                <Text style={stylesGlobal.body1}>{notif.length}</Text>
            </View>
    ) : (
        <View style={[styles.backgroundNotificationNumber,{top:19}]}>
        </View>
        )
    }
    {
        notif.length >= 9 ? (
            <View style={[stylesGlobal.backgroundOnError,styles.backgroundNotificationNumber]}>
                <Text style={stylesGlobal.body1}>9+</Text>
            </View>
    ) : (
        <View style={[styles.backgroundNotificationNumber,{top:19}]}>
        </View>
        )
    }
        <Ionicons name="notifications" size={24} color="#fff" style={[stylesGlobal.surface,styles.notificationIcon]}/>
</TouchableOpacity>
  )
}
export default NotificationButton;
