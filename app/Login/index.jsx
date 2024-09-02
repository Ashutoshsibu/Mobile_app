import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dog from './../../assets/images/login.png'
import Colors from './../../constants/Colors'
import { useRouter } from 'expo-router';
const LoginScreen = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push('/home'); 
  };

  return (
    <View>
      <Image style={{ width: "100%", height: 400 }} source={Dog} />
      <View style={{ display: "flex", alignItems: "center", padding: 25 }}>
        <Text style={{ textAlign: "center", fontFamily: 'outfit-medium', fontSize: 30 }}>
          Ready To Make A New Friend
        </Text>
        <Text style={{ textAlign: "center", fontFamily: 'outfit', fontSize: 18, color: Colors.GRAY }}>
          Let's adopt the pet which you like and make their life happy again
        </Text>
        <Pressable 
          onPress={handlePress} 
          style={{ marginTop: 30, borderRadius: 10, padding: 15, alignItems: 'center', backgroundColor: Colors.PRIMARY, width: "100%" }}>
          <Text style={{ fontFamily: 'outfit-medium', fontSize: 20 }}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  )
};
export default LoginScreen

const styles = StyleSheet.create({})