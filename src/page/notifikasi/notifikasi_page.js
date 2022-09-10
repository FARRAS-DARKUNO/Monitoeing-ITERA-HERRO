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
      <View style={{marginLeft:20,marginLeft:20, flexDirection:'row'}}>
        <TouchableOpacity>
          <MaterialIcons name="arrow-back" size={24} style={[stylesGlobal.onPrimary,{marginRight:20}]} />
        </TouchableOpacity>
        <Text style={[stylesGlobal.onPrimary,stylesGlobal.header2]}>Notifikasi</Text>
      </View>
    </View>
    {
      notif.map((item,index) => {
        return (
          <View style={[stylesGlobal.backgroundOnSecondary,{marginHorizontal:20,marginTop:20,justifyContent:'center',alignContent:'center'}]} key={index}>
            <View style={[{flexDirection:'row',justifyContent:'space-around',alignContent:'center',alignItems:'center'}]}>
              <View style={[stylesGlobal.backgroundPrimer,{width:60,height:60,justifyContent:'center',alignItems:'center',borderRadius:50}]} >
                <Feather name="alert-triangle" size={30} style={[stylesGlobal.onError]}/>
              </View>
              <View>
                <Text style={[stylesGlobal.onBackground,stylesGlobal.header3]}>{item.notifikasi}</Text>
                <Text style={[stylesGlobal.gray,stylesGlobal.header3]}>{item.waktu}</Text>
              </View>
              <TouchableOpacity style={[{justifyContent:"center"}]}>
                <Ionicons name="close" size={24}  style={[stylesGlobal.primer]}/>
              </TouchableOpacity>
            </View>
          </View>
        )
      })    
      }
  </View>
  )
}

export default NotifikasiPage;