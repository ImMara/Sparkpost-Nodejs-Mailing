const nodemailer = require("nodemailer");
const sparkPostTransport = require("nodemailer-sparkpost-transport");

const transporter = nodemailer.createTransport(
    sparkPostTransport({
    sparkPostApiKey:'*',
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