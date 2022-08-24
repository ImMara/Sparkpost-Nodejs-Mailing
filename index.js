const nodemailer = require("nodemailer");
const sparkPostTransport = require("nodemailer-sparkpost-transport");
const fs = require("fs");

const transporter = nodemailer.createTransport(
    sparkPostTransport({
    sparkPostApiKey:'*',
            endpoint:'https://api.eu.sparkpost.com'
        })
)

async function main (){
    try{
        const data = await transporter.sendMail({
            from:'Alan eraerts <no-reply@eraertsalan.be>',
            to:'alaneraerts@live.be',
            subject: 'Bienvenue sur eraertsalan.be',
            html: fs.readFileSync('./email-welcome.html')
        })
        console.log("EMAIL OK! : ",data);
    }catch (e) {
        console.log('error : ',e);
    }
}

main();