import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditDokter = () => {
  const [name, setName] = useState('');
  const [str, setStr] = useState('');
  const [spesialis, setSpesialis] = useState('');
  const [gender, setGender] = useState('Laki-laki');
  const [alamat, setAlamat] = useState('');
  const [telp, setTelp] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getDokterById();
  }, []);

  const getDokterById = async () => {
    const response = await axios.get(`https://hasrya-be.vercel.app/dokters/${id}`);
    setName(response.data.name);
    setStr(response.data.str);
    setSpesialis(response.data.spesialis);
    setGender(response.data.gender);
    setAlamat(response.data.alamat);
    setTelp(response.data.telp);
  };

  const updateDokter = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://hasrya-be.vercel.app/dokters/${id}`, {
        name,
        str,
        spesialis,
        gender,
        alamat,
        telp,
      });
      navigate('/dokter');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card style={{ marginTop: '90px', marginBottom: '70px', height: '700px', width: '500px' }}>
        <Card.Body>
          <Card.Title className="text-center">Edit Data Dokter</Card.Title>
          <Form onSubmit={updateDokter}>
            <Form.Group className="mt-3 mb-3" controlId="formBasicEmail">
              <Form.Label>Nama Dokter</Form.Label>
              <Form.Control type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Masukkan Nama Dokter" />
              <Form.Text className="text-muted">Harap masukkan nama lengkap!</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>STR(Surat Tanda Registrasi)</Form.Label>
              <Form.Control type="text" className="input" value={str} onChange={(e) => setStr(e.target.value)} placeholder="Masukkan STR" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Spesialis</Form.Label>
              <Form.Control type="text" className="input" value={spesialis} onChange={(e) => setSpesialis(e.target.value)} placeholder="Masukkan Spesialisasi" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Jenis Kelamin</Form.Label>
              <Form.Control type="text" className="input" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="Masukkan Jenis Kelamin" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Alamat</Form.Label>
              <Form.Control type="text" className="input" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Masukkan Alamat" />
              <Form.Text className="text-muted">Harap Masukkan Alamat Lengkap!</Form.Text>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>No Telepon</Form.Label>
              <Form.Control type="number" className="input" value={telp} onChange={(e) => setTelp(e.target.value)} placeholder="Masukkan No Telepon" />
            </Form.Group>

            <Button className="mb-1" variant="success" type="submit" style={{ marginRight: '5px' }}>
              Update
            </Button>

            <Link to={`/dokter`}>
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

export default EditDokter;
