import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Catagory = () => {
    const data=[
        {
         name:'Dog',
         img:"https://cdn-icons-png.freepik.com/256/1998/1998627.png?semt=ais_hybrid"
    },
    {
        name:'Bird',
        img:"https://cdn-icons-png.flaticon.com/512/6363/6363577.png"
    },
    {
        name:'Fish',
        img:"https://static-00.iconduck.com/assets.00/fish-icon-1982x2048-xxayvvtg.png"
    },
    {
        name:'Cat',
        img:"https://cdn-icons-png.freepik.com/256/1998/1998592.png?semt=ais_hybrid"
    }
]
const [sliderview,setSliderview]=useState(data);
const[selectpet,setSelectpet]=useState('Dog');
const slectpetsdata=(petdata)=>{
    setSelectpet(petdata);
}

return (
    <View style={styles.MainWrap}>
      <Text style={styles.TextWra}>Catagory</Text>
      {/* <View style={styles.MainContener}> */}
      <FlatList  
    //   horizontal={true}
    //   showsHorizontalScrollIndicator={false}
    numColumns={4}
      data={sliderview}
      renderItem={({item,index})=>(
      <TouchableOpacity onPress={()=>slectpetsdata(item.name)} style={styles.MainContener}>
        <View  style={selectpet==item.name?styles.Conteners:styles.Contener}>
            <Image style={styles.Imgs} source={{uri:item?.img}}></Image>
            <Text >{item.name}</Text>
        </View>
        </TouchableOpacity>
    
      )}
      ></FlatList>
             </View>
    // </View>
  )
}

export default Catagory

const styles = StyleSheet.create({
    MainWrap:{
        marginTop:20
    },
    TextWra:{
        fontFamily:'outfit-bold',
        fontSize:20
    },
    Imgs:{
        width:60,
        height:60,
        
    },
    Contener:{ 
    backgroundColor:"#ffdd69",
    padding:15,
    alignItems:'center',
    borderRadius:15,
    borderWidth:1,
    borderColor:'#050505',
    margin:5
    },
    Conteners:{ 
        backgroundColor:"#87ceee",
        padding:15,
        alignItems:'center',
        borderRadius:15,
        borderWidth:1,
        borderColor:'#050505',
        margin:5
        },
    MainContener:{
        flex:1

    }
})