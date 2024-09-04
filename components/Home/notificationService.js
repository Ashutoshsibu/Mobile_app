// src/utils/notificationService.js
import * as Notifications from 'expo-notifications';

// Configure notification settings
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

// Schedule a local notification
export function scheduleNotification(title, message) {
  Notifications.scheduleNotificationAsync({
    content: {
      title: title,
      body: message,
    },
    trigger: null,
  });
}
