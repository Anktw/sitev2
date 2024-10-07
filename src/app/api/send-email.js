import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: email ? email : "no-reply@yourdomain.com",
        to: "at792226@gmail.com", 
        subject: "New Contact Message",
        text: `From: ${name ? name : "Anonymous"} \nEmail: ${email ? email : "Not provided"} \n\nMessage: ${message}`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending email: ", error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ message: "Only POST requests are allowed" });
  }
}
