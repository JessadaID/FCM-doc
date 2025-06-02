# ข้อดีและข้อจำกัดของ FCM
* ## ข้อดี

* ฟรีและเชื่อถือได้: ไม่มีค่าใช้จ่ายและมี uptime สูง (Google, 2024)
* Cross-platform: รองรับหลายแพลตฟอร์ม
* Scalable: รองรับการส่งข้อความจำนวนมาก
* Rich notifications: รองรับรูปภาพ, ปุ่ม, และ actions

* ## ข้อจำกัด

* ขึ้นอยู่กับ Google Services: ต้องพึ่งพาโครงสร้างพื้นฐานของ Google
* ข้อจำกัดขนาดข้อความ: payload สูงสุด 4KB
* การควบคุมจำกัด: ไม่สามารถควบคุม delivery timing อย่างละเอียด

## สรุป
Firebase Cloud Messaging เป็นเครื่องมือที่มีประสิทธิภาพสำหรับการส่ง push notifications ในแอปพลิเคชันเว็บ การใช้งานที่ถูกต้องต้องคำนึงถึงการจัดการ permissions, token management, และ error handling เพื่อให้ได้ประสบการณ์ผู้ใช้ที่ดี การวิจัยในอนาคตอาจศึกษาเพิ่มเติมเกี่ยวกับประสิทธิภาพการส่ง, อัตราการเปิดอ่าน, และผลกระทบต่อ user engagement

## อ้างอิง
Google. (2024). Firebase Cloud Messaging. Retrieved from https://firebase.google.com/docs/cloud-messaging

Firebase Documentation. (2024). Firebase Cloud Messaging for Web. Retrieved from https://firebase.google.com/docs/cloud-messaging/js/client

Mozilla Developer Network. (2024). Using the Notifications API. Retrieved from https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API

Web Push Protocol. (2024). RFC 8030 - Generic Event Delivery Using HTTP Push. Retrieved from https://tools.ietf.org/html/rfc8030

Google Developers. (2024). Web Push Notifications. Retrieved from https://developers.google.com/web/fundamentals/push-notifications
