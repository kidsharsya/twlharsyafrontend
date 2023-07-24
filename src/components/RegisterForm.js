import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Fungsi untuk mengatur cookie
  const setCookie = (name, value, options = {}) => {
    Cookies.set(name, value, options);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Periksa apakah semua data terisi
    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // Kirim data registrasi ke backend
      const response = await axios.post('https://hasrya-be.vercel.app/register', {
        username,
        password,
      });

      // Simpan token di cookie setelah registrasi berhasil
      setCookie('token', response.data.token, { expires: 7 }); // Simpan token selama 7 hari

      navigate('/login');
      console.log(response.data); // Outputkan pesan dari backend

      // Reset form setelah berhasil registrasi
      setUsername('');
      setPassword('');

      alert('Registrasi berhasil');
    } catch (error) {
      console.log(error.response.data);
      alert('Akun email sudah terdaftar');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <Card.Title className="text-center">Registrasi</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Masukkan Email" value={username} onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Masukkan password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button className="mt-4" variant="primary" type="submit" style={{ width: '100%' }}>
              Daftar
            </Button>
            <div className="mt-3 text-center">
              <p>
                Sudah memiliki akun? <a href="/login">Login disini</a>
              </p>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RegisterForm;
