import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const DokterList = () => {
  const [dokters, setDokter] = useState([]);

  useEffect(() => {
    getDokters();
  }, []);

  const getDokters = async () => {
    const response = await axios.get('https://hasrya-be.vercel.app/dokters');
    setDokter(response.data);
  };

  const deleteDokter = async (id) => {
    try {
      await axios.delete(`https://hasrya-be.vercel.app/dokters/${id}`);
      getDokters();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="table-responsive">
      <h1>Daftar</h1>
      <Container>
        <div className="mt-5 text-center">
          <h1>Daftar Data Dokter</h1>
        </div>
        <Link to="tambahdokter" type="button" class="mb-2 btn btn-success" role="button">
          Tambah (+)
        </Link>
        <div>
          <table class="table table-dark mt-2">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Nama Dokter</th>
                <th scope="col">No STR</th>
                <th scope="col">Spesialis</th>
                <th scope="col">Jenis Kelamin</th>
                <th scope="col">Alamat</th>
                <th scope="col">No Telepon</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dokters.map((dokter, index) => (
                <tr key={dokter._id}>
                  <td>{index + 1}</td>
                  <td>{dokter.name}</td>
                  <td>{dokter.str}</td>
                  <td>{dokter.spesialis}</td>
                  <td>{dokter.gender}</td>
                  <td>{dokter.alamat}</td>
                  <td>{dokter.telp}</td>
                  <td>
                    <Link to={`/dokter/editdokter/${dokter._id}`} type="button" class="btn btn-primary btn-sm mx-2">
                      Edit
                    </Link>
                    <button onClick={() => deleteDokter(dokter._id)} type="button" class="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default DokterList;
