"use server"
import { NextResponse,NextRequest } from "next/server";
const nodemailer = require("nodemailer")
 

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

  }
  catch{}
}
    //     // ✅ สร้าง transporter
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.SMTP_EMAIL,         // อีเมลผู้ส่ง (Gmail)
//         pass: process.env.SMTP_PASSWORD,      // ต้องใช้ App Password (ไม่ใช่รหัสผ่านจริง)
//       },
//     });

//     // ✅ ส่งอีเมล
//     const mailOptions = {
//       from: `"${name}" <${email}>`,
//       to: process.env.SMTP_EMAIL, // ส่งหาตัวเอง
//       subject: "Contact from portfolio site",
//       text: message,
//     };

//     await transporter.sendMail(mailOptions);

//     return NextResponse.json({ success: true, message: "Email sent successfully" });
//   } catch (err) {
//     console.error("Error sending email:", err);
//     return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
//   }
// }
