import React, { useState } from 'react';
import axios from 'axios';

const Message = () => {
    const [message, setMessage] = useState('');
    const [recipient, setRecipient] = useState('');

    const handleSendMessage = async () => {
        await axios.post('/api/messages/', { content: message, recipient });
        setMessage('');
        setRecipient('');
        // Optionally, fetch messages again
    };

    return (
        <div>
            <h2>Send Message</h2>
            <input 
                type="text" 
                placeholder="Recipient ID" 
                value={recipient} 
                onChange={(e) => setRecipient(e.target.value)} 
            />
            <textarea 
                placeholder="Your message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default Message;
