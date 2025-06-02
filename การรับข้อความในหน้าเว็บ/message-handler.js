// message-handler.js
import { messaging } from './firebase-config.js';
import { onMessage } from 'firebase/messaging';

export function setupMessageHandler() {
  onMessage(messaging, (payload) => {
    console.log('Message received in foreground:', payload);
    
    // แสดง notification เมื่ออยู่ในหน้าเว็บ
    if (payload.notification) {
      showNotification(payload.notification);
    }
    
    // จัดการ data payload
    if (payload.data) {
      handleDataMessage(payload.data);
    }
  });
}

function showNotification(notification) {
  // สร้าง custom notification UI
  const notificationDiv = document.createElement('div');
  notificationDiv.className = 'custom-notification';
  notificationDiv.innerHTML = `
    <h4>${notification.title}</h4>
    <p>${notification.body}</p>
  `;
  
  document.body.appendChild(notificationDiv);
  
  // ลบ notification หลังจาก 5 วินาที
  setTimeout(() => {
    notificationDiv.remove();
  }, 5000);
}

function handleDataMessage(data) {
  // จัดการข้อมูลที่ส่งมาจาก server
  console.log('Data message:', data);
  
  // ตัวอย่าง: อัปเดต UI ตามข้อมูลที่ได้รับ
  if (data.action === 'update_counter') {
    const counter = document.getElementById('counter');
    if (counter) {
      counter.textContent = data.value;
    }
  }
}
