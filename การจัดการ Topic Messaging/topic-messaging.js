// topic-messaging.js
export async function subscribeToTopic(token, topicName) {
  try {
    const response = await fetch('/api/subscribe-topic', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        token: token,
        topic: topicName 
      }),
    });
    
    if (response.ok) {
      console.log(`Subscribed to topic: ${topicName}`);
    }
  } catch (error) {
    console.error('Error subscribing to topic:', error);
  }
}

// Server-side topic subscription
async function subscribeTokenToTopic(token, topic) {
  try {
    const response = await admin.messaging().subscribeToTopic([token], topic);
    console.log('Successfully subscribed to topic:', response);
  } catch (error) {
    console.error('Error subscribing to topic:', error);
  }
}

// ส่งข้อความไปยัง topic
async function sendToTopic(topicName, title, body) {
  const message = {
    notification: {
      title: title,
      body: body
    },
    topic: topicName
  };

  try {
    const response = await admin.messaging().send(message);
    console.log('Successfully sent message to topic:', response);
  } catch (error) {
    console.error('Error sending message to topic:', error);
  }
}
