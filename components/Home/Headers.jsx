import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import Color from './../../constants/Colors'

export class Headers extends Component {
  render() {
    return (
      <View style={{display:"flex",justifyContent:"space-between",flexDirection:'row',alignItems:'center'}}>
       <View>
        <Text style={{
            fontFamily:"outfit-bold",
            fontSize:20,
            color:`${Color.PRIMARY}`,
            }}> Welcom, </Text>
        
        <Text style={{fontFamily:"outfit",fontSize:15,fontFamily:"outfit-medium"}}> Ashutosh </Text>
        </View>
        <Image source={{ uri: "https://picsum.photos/104/104" }} style={{ width: 70, height: 70,borderRadius:99 }} />

      </View>
    )
  }
}

export default Headers
