const nodemailer = require("nodemailer");

// Configurer le transporteur (avec vos informations d'identification)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "younousskouakou@gmail.com",
    pass: "younouss93",
  },
});

// Définir les options de l'e-mail
const mailOptions = {
  from: "younousskouakou@gmail.com",
  to: "younousskouakou@gmail.com",
  subject: "Test NodeMailer",
  text: "Hello from Node.js!",
};

// Envoyer l'e-mail
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log("Echec d'envoie d'email");
  } else {
    console.log("Email envoyé:", info.response);
  }
});