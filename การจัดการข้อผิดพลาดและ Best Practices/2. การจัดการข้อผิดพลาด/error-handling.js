// error-handling.js
export function handleFCMErrors(error) {
  switch (error.code) {
    case 'messaging/permission-blocked':
      console.error('User has blocked notifications');
      // แสดงข้อความแนะนำผู้ใช้
      showPermissionGuide();
      break;
      
    case 'messaging/token-unsubscribed':
      console.error('Token has been unsubscribed');
      // ลบ token จาก database
      removeTokenFromServer();
      break;
      
    case 'messaging/invalid-registration-token':
      console.error('Invalid registration token');
      // รีเฟรช token ใหม่
      refreshToken();
      break;
      
    default:
      console.error('FCM Error:', error);
  }
}
