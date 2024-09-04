// src/utils/backgroundLocationTask.js
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

const LOCATION_TASK_NAME = 'GEOFENCE_TASK';

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
      // Handle location update (e.g., check if within geofence, mark attendance, etc.)
    }
  }
});

export const startLocationTracking = async (geofenceArea) => {
  const hasStarted = await Location.hasStartedLocationUpdatesAsync(LOCATION_TASK_NAME);
  if (!hasStarted) {
    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.High,
      timeInterval: 5000, // Minimum time interval between location updates in milliseconds
      distanceInterval: 1, // Minimum distance interval between location updates in meters
      foregroundService: {
        notificationTitle: 'GPS Attendance App',
        notificationBody: 'Location tracking is active.',
        notificationColor: '#FF0000',
      },
    });
  }
};
