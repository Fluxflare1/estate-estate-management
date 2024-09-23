// frontend/src/components/LoginUser.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/users/login/', { email, password })
      .then(res => {
        console.log('Login success:', res.data);
      })
      .catch(err => {
        console.error('Login error:', err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginUser;
