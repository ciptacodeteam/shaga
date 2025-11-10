import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { firstName, lastName, email, phone, message } = data;

    // konfigurasi transporter Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER, // email pengirim
        pass: process.env.SMTP_PASS, // app password (bukan password biasa)
      },
    });

    const mailOptions = {
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: 'shaga3729@gmail.com', // email kamu
      subject: `Pesan Baru dari ${firstName} ${lastName}`,
      html: `
        <h2>Pesan Baru dari Website</h2>
        <p><strong>Nama:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Nomor HP:</strong> ${phone}</p>
        <p><strong>Pesan:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), { status: 500 });
  }
}
