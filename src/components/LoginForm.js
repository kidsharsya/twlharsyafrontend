import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Periksa apakah semua data terisi
    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // Kirim data login ke backend
      const response = await axios.post('https://hasrya-be.vercel.app/login', {
        username,
        password,
      });

      // Simpan token di cookie setelah login berhasil
      Cookies.set('token', response.data.token, { expires: 7 }); // Simpan token selama 7 hari

      navigate('/home');
      console.log(response.data); // Outputkan pesan dari backend

      // Reset form setelah berhasil login
      setUsername('');
      setPassword('');

      alert('Login berhasil');
    } catch (error) {
      console.log(error.response.data);
      alert('Email atau Password tidak cocok');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <Card.Title className="text-center">Login</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Masukkan email" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Masukkan password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button className="mt-4" variant="primary" type="submit" style={{ width: '100%' }}>
              Login
            </Button>
            <div className="mt-3 text-center">
              <p>
                Belum memiliki akun? <a href="/registrasi">Daftar disini</a>
              </p>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginForm;
