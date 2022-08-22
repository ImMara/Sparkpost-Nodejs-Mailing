const nodemailer = require("nodemailer");
const sparkPostTransport = require("nodemailer-sparkpost-transport");

const transporter = nodemailer.createTransport(
    sparkPostTransport({
    sparkPostApiKey:'2c9efd4ebb99d78d3c72a81488e3c3a9074a418b',
            endpoint:'https://api.eu.sparkpost.com'
        })
)

async function main (){
    try{
        const data = await transporter.sendMail({
            from:'no-reply@eraertsalan.be',
            to:'alaneraerts@live.be',
            subject: 'Bienvenue sur eraerts alan.be',
            text:'Bienvenue sur mon site, Pour tous contact attendez quelque jours'
        })
        console.log("EMAIL OK! : ",data);
    }catch (e) {
        console.log('error : ',e);
    }
    

}

main();