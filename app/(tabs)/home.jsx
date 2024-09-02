import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Headers from '../../components/Home/Headers'
import Slider from '../../components/Home/Slider'
import Catagory from '../../components/Home/Catagory'
import Card from '../../components/Home/Card'

const Home = () => {
  return (
    <View style={{padding:20,marginTop:20}}>
    {/* <ScrollView showsVerticalScrollIndicator={false}> */}
     <Headers></Headers>
     <Slider></Slider>
     <Catagory></Catagory>
     <Card></Card>
     {/* </ScrollView> */}
    </View>
    
  )
}

export default Home

const styles = StyleSheet.create({})