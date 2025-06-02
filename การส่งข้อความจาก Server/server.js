// server.js
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('./path/to/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function sendNotificationToUser(userToken, title, body, data = {}) {
  const message = {
    notification: {
      title: title,
      body: body
    },
    data: data,
    token: userToken
  };

  try {
    const response = await admin.messaging().send(message);
    console.log('Successfully sent message:', response);
    return response;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}

// ตัวอย่างการใช้งาน
async function notifyUser() {
  const userToken = "user-registration-token-here";
  
  await sendNotificationToUser(
    userToken,
    "ข้อความใหม่",
    "คุณมีข้อความใหม่รออ่าน",
    { 
      messageId: "123",
      action: "open_message" 
    }
  );
}
