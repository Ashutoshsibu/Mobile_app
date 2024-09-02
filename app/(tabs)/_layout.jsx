import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Clors from './../../constants/Colors'

const TabLayout = () => {
  return (
  <Tabs screenOptions={{tabBarActiveTintColor:Clors.PRIMARY}}>
   <Tabs.Screen name='home'
   options={{
    title:'Home',
    headerShown:false,
    tabBarIcon:({color})=><FontAwesome name="home" size={24} color={color} />
   }}/>
   <Tabs.Screen name='profile'options={{
    title:'Profile',
    headerShown:false,
    tabBarIcon:({color})=><Ionicons name="people" size={24} color={color}/>
   }}></Tabs.Screen> 
   <Tabs.Screen name='favorite'
   options={{
    title:'Favorate',
    headerShown:false,
    tabBarIcon:({color})=><FontAwesome name="heart" size={24} color={color} />
   }}></Tabs.Screen> 
   <Tabs.Screen name='inbox'
   options={{
    title:'Index',
    headerShown:false,
    tabBarIcon:({color})=><Ionicons name="logo-wechat" size={24} color={color}/>
   }}></Tabs.Screen> 
</Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({})