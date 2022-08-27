const email = require('./email');

async function main (){
    email.getTemplate('email-promotion',{
        to:"alaneraerts@live.be",
        subject:"Bienvenue sur Eraerts alan",
    })
}

main();