import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    // Create a nodemailer transporter (configure with your email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jamesandrewpike@gmail.com',
        pass: 'apmc urph xmbo doxw',
      },
    });

    // Compose the email
    const mailOptions = {
      from: 'jamesandrewpike@gmail.com',
      to: 'jedwards749@gmail.com',
      subject: 'New Contact Form Submission',
      text: `Name: ${firstName + lastName}\nEmail: ${email}\nNumber: ${phoneNumber}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent successfully');
    } catch (error) {
      res.status(500).send('Email not sent');
    }
  } else {
    res.status(405).end();
  }
}
