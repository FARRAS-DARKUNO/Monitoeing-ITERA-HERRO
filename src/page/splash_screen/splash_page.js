import { View,Image, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import SplashScreenStyle from './splash_page_style'
import { StackActions } from '@react-navigation/native'

export default class SplashScreen extends Component {
  
  render() {
    return (
      
      <SafeAreaView style={SplashScreenStyle.container}>
        <View style={SplashScreenStyle.content}>
          <Image
              style = {SplashScreenStyle.logo}
              source={
                require('../../../assets/Logo.png')
              }/>
        </View>
      </SafeAreaView>
    )
  }
}