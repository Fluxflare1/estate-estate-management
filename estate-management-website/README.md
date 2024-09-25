# Estate Management Website

This is a simple estate management website with a contact form that sends emails using Node.js and Nodemailer.

## Directory Structure

- `backend/`: Contains the Node.js backend server.
- `frontend/`: Contains the static files for the frontend (HTML, CSS, JS).

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. **Backend**
   - Navigate to the `backend` directory.
   - Run `npm install` to install the dependencies.
   - Set up your email credentials in `server.js`.
   - Start the server with `node server.js`.

2. **Frontend**
   - Open `index.html` or `contact.html` in your browser.

### Contact Form

- Fill out the contact form in `contact.html`, and it will send an email to the specified address in the backend.

### Note

Make sure to adjust your email settings for Nodemailer, especially if using Gmail (e.g., enabling less secure app access or using an app password).
