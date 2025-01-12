const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
//const pathNext = require('path');

function sendEmail(reportPath, toEmail) {
    //file check
    if (!fs.existsSync(reportPath)) {
        return console.log('File not found:', reportPath);
    }
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',    // SMTP server for Outlook
        port: 587,                        // Port for TLS
        secure: false,                    // Set to true for SSL
        auth: {
            user: 'merishi97@gmail.com', // Replace with your email
            pass: 'ixhf wyyj tigl igqj'    // Replace with your email password or app-specific password
            //xnbw iccn wkok muhg
        },
        tls: {
            rejectUnauthorized: false  // This disables the certificate validation
        }
    });

    // Set up email data
    const mailOptions = {
        from: 'merishi97@gmail.com',    
        to: 'merishi97@gmail.com ,rishi@spendflo.com,bharathi@spendflo.com',                   
        subject: 'API Test Report',          
        text: 'Hi Team, please find the attached test report.Regards,Rishi',
        attachments: [
            {
                filename: 'DashbaordReport.html',  // File name for the attachment
                path: reportPath,      // Path to the report file
                //pathNext:reportPath1,
                //path: 'E:\Bruno\Dashboards\Results\results.html',
                contentType: 'application/html'   // MIME type
            }
        ]
    };
console.log('Full report path:', path);  // Print path to debug
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error sending email:', error);
        }
        console.log('Email sent: ' + info.response);
    });
}

// Example usage
const ipath = require('path');
const reportPath = path.join(__dirname, 'Results', 'results.html');
//const reportPath1 = path.join(__dirname, 'Results', 'results.json');
console.log('Report path:', reportPath); 
const toEmail = 'merishi97@gmail.com';  
if (fs.existsSync(reportPath)) {
    console.log('File exists. Sending email...');
    sendEmail(reportPath, toEmail);
} else {
    console.log('File not found:', reportPath);
}

sendEmail(reportPath, toEmail);
