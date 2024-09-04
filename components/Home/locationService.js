// src/utils/locationService.js
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the background task name
const LOCATION_TASK_NAME = 'GEOFENCE_TASK';

// Define the background task for location updates
TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
  if (error) {
    console.error(error);
    return;
  }
  if (data) {
    const { locations } = data;
    const [location] = locations;

    if (location) {
      console.log('Location in background:', location);
      // You can add geofencing logic here to check if within the geofence area
      // and call markAttendance() or any other function accordingly
    }
  }
});

// Check and request location permissions
export async function requestLocationPermission() {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    alert('Permission to access location was denied');
    return false;
  }

  // Request background location permissions
  const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
  if (backgroundStatus !== 'granted') {
    alert('Permission to access background location was denied');
    return false;
  }

  return true;
}

// Start monitoring location changes to simulate geofencing
export async function monitorLocation(geofenceArea, onEnterGeofence) {
  const hasStarted = await Location.hasStartedLocationUpdatesAsync(LOCATION_TASK_NAME);
  if (!hasStarted) {
    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.High,
      distanceInterval: 1, // Minimum distance in meters to trigger updates
      timeInterval: 5000, // Minimum time interval between location updates in milliseconds
      showsBackgroundLocationIndicator: true, // Show the background location indicator (only on iOS)
      foregroundService: {
        notificationTitle: 'GPS Attendance App',
        notificationBody: 'Location tracking is active.',
        notificationColor: '#FF0000',
      },
    });
  }
}

// Check if user is within a geofence area
function isWithinGeofence(latitude, longitude, geofenceArea) {
  const distance = getDistanceFromLatLonInKm(
    latitude,
    longitude,
    geofenceArea.latitude,
    geofenceArea.longitude
  );
  return distance <= geofenceArea.radius;
}

// Utility to calculate distance between two coordinates
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1);
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

// Mark attendance and save in AsyncStorage
export async function markAttendance() {
  const attendanceHistory =
    JSON.parse(await AsyncStorage.getItem('attendance')) || [];
  const newEntry = {
    date: new Date().toISOString(),
    status: 'Present',
  };
  attendanceHistory.push(newEntry);
  await AsyncStorage.setItem('attendance', JSON.stringify(attendanceHistory));
}
