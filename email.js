const express = require('express')
const app = express()

const nodemailer = require('nodemailer')

const port = process.env.port || 3000

app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/public/login.html')
})

app.post('/', (req, res) =>{
    console.log(req.body)

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com.",
        port: 465,
        secure: true,
        auth: {
            user: "officialgymboost@gmail.com", 
            pass: "wjyugzgjuacndvlp"
        }
        })
    

    const mailOptions ={
        from: "GYM Boost <officialgymboost@gmail.com>",
        to: req.body.email,
        subject: "Parabens!! vc acaba de fazer login na GYM Boost",
        text: "Muito obrigado pela preferencia.",
        html:'<h1>Olá '+req.body.nome+'</h1> <p>Você fez cadastro no site da GYM Boost</p> <p>Clique no botao para confirmar seu login</p> <button>Confirmar Login</button>'
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error)
            res.send('error')
        }else{
            console.log('Email sent: ' + info.response)
            res.send('success')
        }
    })
})




app.listen(port, () =>{console.log('ta rolando')})