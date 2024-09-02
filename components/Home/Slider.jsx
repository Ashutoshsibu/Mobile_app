import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Slider = () => {
    const data=[{
        name:'sibu',
        img: 'https://infohub.austincc.edu/wp-content/uploads/2022/07/SU22_Adopt-our-pets_923-x-523.png',
    },
    {
        name:'Ashutosh',
        img:"https://s3.amazonaws.com/imagesroot.rescuegroups.org/webpages/s8987nnyslleqn1y.jpg"
    }
]

const [sliderview,setSliderview]=useState(data);
  return (

    <View style={styles.mainwrap}>
      <FlatList 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={sliderview}
      renderItem={({item,index})=>(
        <View>
        {/* <Text>{item.name}</Text> */}
        <Image source={{uri:item?.img}}
            style={styles.image}
            ></Image>
        </View>
     ) }
      ></FlatList>
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
    image: {
    width: Dimensions.get('screen').width*0.9, // Adjust width as needed
    height: 200, // Adjust height as needed
    marginRight:10
  },
  mainwrap:{
    marginTop:20
  }
    
})