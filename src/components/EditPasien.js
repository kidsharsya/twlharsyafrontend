import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditPasien = () => {
  const [nik, setNik] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Laki-laki/Perempuan');
  const [alamat, setAlamat] = useState('');
  const [telp, setTelp] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getPasienById();
  }, []);

  const getPasienById = async () => {
    const response = await axios.get(`https://hasrya-be.vercel.app/pasiens/${id}`);
    setNik(response.data.nik);
    setName(response.data.name);
    setGender(response.data.gender);
    setAlamat(response.data.alamat);
    setTelp(response.data.telp);
  };

  const updatePasien = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://hasrya-be.vercel.app/pasiens/${id}`, {
        nik,
        name,
        gender,
        alamat,
        telp,
      });
      navigate('/pasien');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card style={{ marginTop: '90px', marginBottom: '70px', height: '600px', width: '500px' }}>
        <Card.Body>
          <Card.Title className="text-center">Edit Data Pasien</Card.Title>
          <Form onSubmit={updatePasien}>
            <Form.Group className="mt-3 mb-3" controlId="formBasicEmail">
              <Form.Label>NIK</Form.Label>
              <Form.Control type="number" className="input" value={nik} onChange={(e) => setNik(e.target.value)} placeholder="Masukkan NIK" />
              <Form.Text className="text-muted">Harap masukkan NIK sesuai KTP!</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nama Pasien</Form.Label>
              <Form.Control type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama Pasien" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Jenis Kelamin</Form.Label>
              <Form.Control type="text" className="input" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Masukkan Jenis Kelamin" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Alamat</Form.Label>
              <Form.Control type="text" className="input" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Masukkan Alamat" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>No Telepon</Form.Label>
              <Form.Control type="number" className="input" value={telp} onChange={(e) => setTelp(e.target.value)} placeholder="Masukkan No Telepon" />
            </Form.Group>

            <Button className="mb-1" variant="success" type="submit" style={{ marginRight: '5px' }}>
              Update
            </Button>

            <Link to={`/pasien`}>
              <Button className="mb-1" variant="secondary" type="submit">
                Kembali
              </Button>
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EditPasien;
