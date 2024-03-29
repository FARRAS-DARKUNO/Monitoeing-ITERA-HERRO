import React, { useEffect } from 'react'
import { View, Image, SafeAreaView,TouchableNativeFeedback } from 'react-native'
import SplashScreenStyle from './splash_page_style'
import { useSelector, useDispatch } from 'react-redux';
import { getApiListGreenhouse, getApiDashboard } from '../../redux/action'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from "@react-navigation/native"
import axios from 'axios';
import { listGreenhouse, dashboardApi } from '../../utils/api_link';
import CreateBy from '../../component/createBy';

const SplashScreen = () => {

  const navigate = useNavigation()

  const dispatch = useDispatch()

  const checkDataToken = async () => {
    await AsyncStorage.getItem('token').then(async value => {
      if (value !== null || value !== '') {
        await axios.get(dashboardApi, {
          headers: {
            'Authorization': 'Bearer ' + value
          }
        })
          .then(response => dispatch(getApiDashboard(response)))
          .catch(err => {
            AsyncStorage.clear()
            navigate.navigate('LoginPage')
          })
      }
      else {

        navigate.navigate('LoginPage')

      }
    }).catch(() => {
      AsyncStorage.clear()

      navigate.navigate('LoginPage')

    })

    AsyncStorage.getItem('token').then(async value => {
      if (value !== null) {
        await axios.get(listGreenhouse, {
          headers: {
            'Authorization': 'Bearer ' + value
          }
        })
          .then(response => next(response))
          .catch(() => {
            AsyncStorage.clear()
            navigate.navigate('LoginPage')
          })
      }
      else {
        navigate.navigate('LoginPage')

      }
    }).catch(() => {
      AsyncStorage.clear()

      navigate.navigate('LoginPage')

    })


  }

  const next = (response) => {
    try {
      dispatch(getApiListGreenhouse(response))
    } catch (error) {
      console.log(error)
    } finally {
      navigate.navigate('BerandaPage')
    }
  }



  useEffect(() => {
    checkDataToken()
  },[]);


  return (

    <SafeAreaView style={SplashScreenStyle.container}>
      <View />
      <View style={SplashScreenStyle.content} >
        <TouchableNativeFeedback onPress={checkDataToken}>
        <Image
          
          style={SplashScreenStyle.logo}
          source={
            require('../../../assets/images/Logo.png')
          } />
        </TouchableNativeFeedback>
      </View>
      {/* <CreateBy /> */}
      <View />
    </SafeAreaView>
  )

}
export default SplashScreen