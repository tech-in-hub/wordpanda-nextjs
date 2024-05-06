import nodemailer from 'nodemailer';

const mailTransport = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    secure: true,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
        ciphers: 'SSLv3'
    },
    requireTLS: true,
    port: 465,
    debug: true,
    auth: {
        user: "panda@wordpanda.app",
        pass: process.env.EMAIL_PASSWORD
    }
});

export default mailTransport;