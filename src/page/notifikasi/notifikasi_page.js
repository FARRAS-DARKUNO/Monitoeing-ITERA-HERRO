import { View, Text, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import stylesGlobal from '../../utils/style_global'
import styles from '../notifikasi/notifikasi_style'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
const NotifikasiPage = () => {
  const [notif,setNotif] = useState([
    {
      id:1,
      notifikasi:'Melon Anda Sedang Tidak Sehat',
      waktu:'1 Jam yang lalu',
    },
    {
      id:1,
      notifikasi:'Melon Anda Sedang Tidak Sehat',
      waktu:'1 Jam yang lalu',
    },
  ])
  return (
    <View style={[styles.container,stylesGlobal.backgroundOnSecondary]}>
    <View style={[stylesGlobal.backgroundPrimer,styles.topBar]}>
      <View style={[styles.topBarContent]}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={24} style={[stylesGlobal.onPrimary,styles.arrowBackIcon]} />
        </TouchableOpacity>
        <Text style={[stylesGlobal.onPrimary,stylesGlobal.header2]}>Notifikasi</Text>
      </View>
    </View>
    {
      notif.map((item,index) => {
        return (
          <View style={[stylesGlobal.backgroundOnSecondary,styles.notificationField]} key={index}>
            <View style={[styles.notificationCard]}>
              <View style={[stylesGlobal.backgroundPrimer,styles.iconCard]} >
                <Feather name="alert-triangle" size={30} style={[stylesGlobal.onError]}/>
              </View>
              <View>
                <Text style={[stylesGlobal.onBackground,stylesGlobal.header3]}>{item.notifikasi}</Text>
                <Text style={[stylesGlobal.gray,stylesGlobal.header3]}>{item.waktu}</Text>
              </View>
            </View>
          </View>
        )
      })    
      }
  </View>
  )
}

export default NotifikasiPage;