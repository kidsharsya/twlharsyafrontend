import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const PasienList = () => {
  const [pasiens, setPasien] = useState([]);

  useEffect(() => {
    getPasiens();
  }, []);

  const getPasiens = async () => {
    const response = await axios.get('https://hasrya-be.vercel.app/pasiens');
    setPasien(response.data);
  };

  const deletePasien = async (id) => {
    try {
      await axios.delete(`https://hasrya-be.vercel.app/pasiens/${id}`);
      getPasiens();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="table-responsive">
      <h1>Daftar</h1>
      <Container>
        <div className="mt-5 text-center">
          <h1>Daftar Data Pasien</h1>
        </div>
        <Link to="tambahpasien" type="button" class="mb-2 btn btn-success" role="button">
          Tambah (+)
        </Link>
        <div>
          <table class="table table-dark mt-2">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">NIK</th>
                <th scope="col">Nama Pasien</th>
                <th scope="col">Jenis Kelamin</th>
                <th scope="col">Alamat</th>
                <th scope="col">No Telepon</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {pasiens.map((pasien, index) => (
                <tr key={pasien._id}>
                  <td>{index + 1}</td>
                  <td>{pasien.nik}</td>
                  <td>{pasien.name}</td>
                  <td>{pasien.gender}</td>
                  <td>{pasien.alamat}</td>
                  <td>{pasien.telp}</td>
                  <td>
                    <Link to={`/pasien/editpasien/${pasien._id}`} type="button" class="btn btn-primary btn-sm mx-2">
                      Edit
                    </Link>
                    <button onClick={() => deletePasien(pasien._id)} type="button" class="btn btn-danger btn-sm">
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

export default PasienList;
