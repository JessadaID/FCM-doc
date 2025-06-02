// token-management.js
export function setupTokenRefreshHandler() {
  // ตรวจสอบการเปลี่ยนแปลงของ token
  messaging.onTokenRefresh(async () => {
    try {
      const newToken = await getToken(messaging);
      console.log('Token refreshed:', newToken);
      
      // อัปเดต token ใน server
      await updateTokenOnServer(newToken);
    } catch (error) {
      console.error('Error refreshing token:', error);
    }
  });
}

async function updateTokenOnServer(newToken) {
  await fetch('/api/update-token', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: newToken }),
  });
}
