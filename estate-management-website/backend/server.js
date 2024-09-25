app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    // Insert into the database
    const query = 'INSERT INTO inquiries (name, email, message) VALUES (?, ?, ?)';
    db.query(query, [name, email, message], (error, results) => {
        if (error) {
            console.error('Error inserting data:', error);
            return res.status(500).send('Error saving inquiry');
        }

        // Sending the email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'your_email@gmail.com',
                pass: 'your_email_password'
            }
        });

        const mailOptions = {
            from: email,
            to: 'your_email@gmail.com',
            subject: 'New Inquiry from Contact Form',
            text: message
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).send('Error sending email');
            }
            res.send('Inquiry sent successfully!');
        });
    });
});
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'estate_management'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Your existing routes and Nodemailer configuration here

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., Gmail
    auth: {
        user: 'your-email@gmail.com', // Your email
        pass: 'your-email-password', // Your email password or app password
    },
});

// Endpoint to handle contact form submission
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'your-email@gmail.com', // Destination email
        subject: `Contact Form Submission from ${name}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Message sent: ' + info.response);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
