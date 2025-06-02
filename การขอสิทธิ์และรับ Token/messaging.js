// messaging.js
import { messaging } from './firebase-config.js';
import { getToken, onMessage } from 'firebase/messaging';

export async function requestPermissionAndGetToken() {
  try {
    // ขอสิทธิ์จากผู้ใช้
    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      
      // รับ registration token
      const token = await getToken(messaging, {
        vapidKey: 'your-vapid-key'
      });
      
      if (token) {
        console.log('Registration token:', token);
        // ส่ง token ไปยัง server เพื่อเก็บใน database
        await sendTokenToServer(token);
        return token;
      } else {
        console.log('No registration token available.');
      }
    } else {
      console.log('Unable to get permission to notify.');
    }
  } catch (error) {
    console.error('An error occurred while retrieving token:', error);
  }
}

async function sendTokenToServer(token) {
  // ส่ง token ไปยัง backend server
  await fetch('/api/save-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
  });
}
