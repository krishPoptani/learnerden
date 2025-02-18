import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const {
    firstName,
    lastName,
    email,
    phone,
    message,
    syllabus,
    class: userClass,
  } = body;

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PWD,
    },
  });

  // Create the dynamic HTML email template
  const emailTemplateAdmin = `
<div style="padding: 20px; font-family: Arial, sans-serif; background-color: #ffffff;">
  <!-- Header -->
  <h1 style="text-align: center; font-size: 30px; font-weight: bold; color: #2A497C; margin: 0 auto;">Global Learner Den</h1>

  <!-- Greeting -->
  <div style="max-width: 600px; padding-left: 5px;">
    <h2 style="font-size: 24px; font-weight: bold; color: #000000;">Hi Admin,</h2>

    <!-- Message -->
    <p style="font-size: 16px; color: #333333; margin: 10px 0;">
      We’ve received a new contact form submission. Below are the details:
    </p>

    <!-- Details -->
    <p style="font-size: 14px; color: #333333; margin: 10px 0;">
      <strong>First Name:</strong> ${firstName}<br>
      <strong>Last Name:</strong> ${lastName}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Phone:</strong> ${phone}<br>
      <strong>Class:</strong> ${userClass}<br>
      <strong>Syllabus:</strong> ${syllabus}<br>
      <strong>Message:</strong> ${message}<br>
    </p>

    <!-- New Line -->
    <p style="font-size: 16px; color: #333333; margin: 10px 0; text-align: left;">
      Please review this submission and follow up as necessary.
    </p>
  </div>

  <!-- Footer -->
  <p style="font-size: 14px; color: #888888; text-align: center; margin-top: 20px;">
    Thank you for using Global Learner Den!
  </p>
</div>
  `;

  const emailTemplateUser = `
    <div style="padding: 20px; font-family: Arial, sans-serif; background-color: #ffffff;">
      <h1 style="text-align: center; font-size: 30px; font-weight: bold; color: #2A497C; margin: 0 auto;">Global Learner Den</h1>

      <!-- Image in the middle -->
      <div style="text-align: center; margin: 20px 0;">
        <img src="https://drive.google.com/uc?export=view&id=1j03x1HA7sXJAZiRFzyteBH3wtLif85n6" alt="Global Learner Den" style="max-width: 100%; height: auto;" />
      </div>

      <!-- Greeting -->
      <h2 style="font-size: 24px; font-weight: bold; color: #000000;">Hi ${firstName},</h2>

      <p style="font-size: 16px; color: #333333; margin: 10px 0;">
        Thank you for contacting <a href="https://aieducationpro.com/" style="color: #4A3AFF; text-decoration: none;">Global Learner Den</a>! We’re thrilled to hear from you and excited to assist you on your learning journey.
      </p>

      <p style="font-size: 16px; color: #333333; margin: 20px 0;">
        Your inquiry has been received, and our team will review it carefully. We aim to respond within 24 hours. In the meantime, feel free to explore our website for more information on courses, programs, or events.
      </p>

      <p style="font-size: 16px; color: #333333; margin: 20px 0;">
        For more details, visit <a href="https://aieducationpro.com/" style="color: #2A497C; text-decoration: none;">Global Learner Den</a>.
      </p>

      <p style="font-size: 16px; color: #333333; margin-top: 30px;">
        Best Regards,<br>
        Global Learner Den Team
      </p>
    </div>
  `;

  // Mail options for Admin
  const mailOptionsAdmin = {
    from: process.env.EMAIL,
    to: "globallearnerden@gmail.com",
    bcc: ["saransh@healthiq.plus", "hemant@healthiq.plus"],
    subject: "Global Learner Den User Query",
    html: emailTemplateAdmin,
  };

  // Mail options for User
  const mailOptionsUser = {
    from: process.env.EMAIL,
    to: email,
    subject: "Thank you for contacting Global Learner Den",
    html: emailTemplateUser,
  };

  try {
    // Send email to Admin
    await transporter.sendMail(mailOptionsAdmin);

    // Send email to User
    await transporter.sendMail(mailOptionsUser);

    return NextResponse.json({
      success: true,
      message: "Emails sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
