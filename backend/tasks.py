const cron = require('node-cron');
const db = require('./database'); // MySQL connection
const nodemailer = require('nodemailer');

cron.schedule('0 0 * * *', () => { // Runs daily at midnight
    const query = 'SELECT * FROM leases WHERE DATEDIFF(start_date, CURDATE()) <= 30';
    db.query(query, (error, results) => {
        if (error) throw error;
        results.forEach(lease => {
            sendEmailNotification(lease.tenant_email, lease);
        });
    });
});

const sendEmailNotification = (email, lease) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your_email@gmail.com', // Replace with your email
            pass: 'your_email_password' // Replace with your email password
        }
    });

    const mailOptions = {
        from: 'your_email@gmail.com', // Sender's email
        to: email, // Recipient's email
        subject: 'Lease Notification',
        text: `Your lease for property ID ${lease.id} is about to start in less than 30 days.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Property, Tenant

@receiver(post_save, sender=Property)
def notify_tenant_of_price_change(sender, instance, **kwargs):
    tenants = instance.tenants.filter(is_approved=True)
    for tenant in tenants:
        # Send a notification or email to the tenant for approval
        pass
# backend/tasks.py
from .notifications.utils import create_notification

@shared_task
def send_payment_reminders():
    tenants = User.objects.filter(groups__name='Tenants')
    for tenant in tenants:
        # Logic for sending reminders
        message = "Reminder: Your payment is due soon!"
        create_notification(tenant, message)
        # (Optionally) Send an email to tenant with the reminder
