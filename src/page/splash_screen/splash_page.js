import React, { useEffect } from 'react'
import { View, Image, SafeAreaView } from 'react-native'
import SplashScreenStyle from './splash_page_style'
import { StackActions } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux';
import { getApiListGreenhouse, getApiDashboard } from '../../redux/action'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from "@react-navigation/native"
import axios from 'axios';
import { listGreenhouse, dashboardApi } from '../../utils/api_link';

const SplashScreen = () => {

  const navigate = useNavigation()

  const dispatch = useDispatch()

  const checkDataToken = () => {
    AsyncStorage.getItem('token').then(async value => {
      console.log(value)
      if (value !== null) {
        await axios.get(dashboardApi, {
          headers: {
            'Authorization': 'Bearer ' + value
          }
        })
          .then(response => dispatch(getApiDashboard(response.data.data)))
          .catch(err => {
            AsyncStorage.clear()
            navigate.navigate('LoginPage')
          })
      }
      else {
        console.log('gak ada data')

        navigate.navigate('LoginPage')

      }
    }).catch(error => {
      console.log('ah gak ada data anjir')
      console.log(error)
      AsyncStorage.clear()

      navigate.navigate('LoginPage')

    })

    AsyncStorage.getItem('token').then(async value => {
      console.log(value)
      if (value !== null) {
        await axios.get(listGreenhouse, {
          headers: {
            'Authorization': 'Bearer ' + value
          }
        })
          .then(response => next(response.data.data))
          .catch(err => {
            AsyncStorage.clear()
            navigate.navigate('LoginPage')
          })
      }
      else {
        console.log('gak ada data')

        navigate.navigate('LoginPage')

      }
    }).catch(error => {
      console.log('ah gak ada data anjir')
      console.log(error)
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
    // console.log(response.data.data)
  }



  useEffect(() => {
    checkDataToken()
  }, []);


  return (

    <SafeAreaView style={SplashScreenStyle.container}>
      <View style={SplashScreenStyle.content}>
        <Image
          style={SplashScreenStyle.logo}
          source={
            require('../../../assets/images/Logo.png')
          } />
      </View>
    </SafeAreaView>
  )

}
export default SplashScreen