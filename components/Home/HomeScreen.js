import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // Replace these with your office's latitude and longitude
  const officeLocation = {
    latitude: 12.991725,   // Example: San Francisco latitude
    longitude:  77.6758601 // Example: San Francisco longitude
  };
  
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let { coords } = await Location.getCurrentPositionAsync({});
    setLocation(coords);

    // Calculate the distance between office location and current location
    if (isLocationMatch(coords, officeLocation)) {
      Alert.alert('Success', 'You are at the office location!');
      console.log(location)
    } else {
      Alert.alert('Error', 'You are not at the office location.');
      console.log(location)
    }
  };

  const isLocationMatch = (currentLocation, officeLocation) => {
    const distance = getDistanceFromLatLonInKm(
      currentLocation.latitude,
      currentLocation.longitude,
      officeLocation.latitude,
      officeLocation.longitude
    );

    // Consider location matching within a radius of 0.1 km (~100 meters)
    return distance <= 0.1;
  };

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance App</Text>
      <Button title="Add Attendance" onPress={getLocation} />
      {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  errorText: {
    marginTop: 20,
    color: 'red',
  },
});
