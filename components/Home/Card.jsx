import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styled from 'styled-components/native';
const Container = styled.View`
  /* flex: 1; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;
const Cards=styled.View`
width: 50%;
height: 180px;
background-color: #f5fcff;
border: 1px solid black;
border-radius: 10px;
padding: 10px;
`
const Title = styled.Text`
  margin-top: 5px;
  font-size: 10px;
  font-weight: bold;
  color: #333;
`;
const Image=styled.Image`
width: 100%;
height: 100px;
border-radius: 10px;
`
const Card = () => {
  return (
    <Container>
    <Cards>
    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB'}}></Image>
    <Title>Name-Lalu</Title>
    <Title>Age-6mon</Title>
    </Cards>
    <Cards>
    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB'}}></Image>
    <Title>Hello, Styled Components!</Title>
    </Cards>
  </Container>
  )
}

export default Card

const styles = StyleSheet.create({
})