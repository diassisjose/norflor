import nodemailer from "nodemailer"

let transporter = nodemailer.createTransport({
  host: 'email-ssl.com.br',
  port: 465,
  secure: true,
  auth: {
    user: 'contato@agenciadueto.com',
    pass: 'agenciadueto_1234'
  }
})

transporter.sendMail({
  from: "Equipe Dueto <contato@agenciadueto.com>",
  to: "designdueto@gmail.com",
  subject: "Oi, vamos tentar esse balacubaco?",
  text: "olá, vamos sim tentar colocar sabagaça pra funcionar",
  html: "olá meu nome é <a href='https://agenciadueto.com'>diassis</a> "
})
