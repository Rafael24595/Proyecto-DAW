const nodemailer = require('nodemailer');

class Mail{

    instance;

    mail = 'myvinyl.mostoles@gmail.com';
    pass = '1234ABCD';

    receiver = 'rafaelmostoles24595@gmail.com';
    subject = 'Correo enviado desde MyVinyl';
    message = 'Mensaje de prueba';

    transporter;

    constructor(){
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: this.mail,
                pass: this.pass
            }
        });

    }

    static getMailInstance(){
        if(!this.instance){
            this.instance = new Mail();
        }
        return this.instance;
    }

    setMailData(receiver, subject, message){
        this.receiver = receiver;
        this.subject = subject;
        this.message = message;
    }

    sendMail(receiver, subject, message){

        this.setMailData(receiver, subject, message);

        var mailOptions = {
            from: this.mail,
            to: this.receiver,
            subject: this.subject ,
            text: this.message
        };

        this.transporter.sendMail(mailOptions, ()=>{
            sucess=>{
                console.error(error);
            },
            err=>{
                console.log('Email sent: ' + info.response);
            }
        });

    }

}

module.exports ={Mail};