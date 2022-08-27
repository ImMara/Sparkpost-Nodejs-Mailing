const nodemailer = require('nodemailer');
const sparkPostTransport = require('nodemailer-sparkpost-transport');
const fs = require('fs');
const pug = require('pug');

class Email{

    prodTransporter;

    constructor() {
        this.prodTransporter = nodemailer.createTransport(
            sparkPostTransport({
                sparkPostApiKey:'*',
                endpoint:'https://api.eu.sparkpost.com'
            })
        )
        this.devTransporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "*",
                pass: "*"
            }
        })
    }

    async getTemplate(templateName,options,prod=false) {
        try{
            let data;
          const template = pug.renderFile(`./templates/${templateName}.pug`,options.metadata);
          if(prod){
              data = await this.prodTransporter.sendMail({
                  from:"Eraerts Alan <no-reply@eraertsalan.be>",
                  to: options.to,
                  subject: options.subject,
                  html:template,
              })
          }else{
              data = await this.devTransporter.sendMail({
                  from:"Eraerts Alan <no-reply@eraertsalan.be>",
                  to: options.to,
                  subject: options.subject,
                  html:template,
              })
          }

            console.log("EMAIL OK ! : ", data);
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = new Email();