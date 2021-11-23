import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAppContext } from "../../context/AppContext";

const AddStudent = () => {
  const { addStudent } = useAppContext();

  const history = useHistory();

  const [formData, setFormData] = useState({
    Nama : "",
	  NIM : "",
    Prodi : "",
    Fakultas : "",
    Angkatan : "",
    Status : "",
  });

  const { Nama, NIM, Prodi, Fakultas, Angkatan, Status } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddStudent = (e) => {
    e.preventDefault();

    addStudent(formData);

    setFormData({
      Nama : "",
      NIM : "",
      Prodi : "",
      Fakultas : "",
      Angkatan : "",
      Status : "",
    });

    history.push("/");
  };

  return (
    <div className='container' style={{ marginTop: "3rem", maxWidth: "40rem" }}>
      <h3 style={{ marginTop: "3rem", marginBottom: "2rem", color: "green" }}>
        Create a New Student
      </h3>
      <form onSubmit={handleAddStudent}>
        <div className='form-group'>
          <label>Nama</label>
          <input
            type='text'
            required
            className='form-control'
            name='Nama'
            value={Nama}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label>NIM</label>
          <input
            type='text'
            required
            className='form-control'
            name='NIM'
            value={NIM}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label>Program Studi</label>
          <input
            type='text'
            required
            className='form-control'
            name='Prodi'
            value={Prodi}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label>Fakultas</label>
          <input
            type='text'
            required
            className='form-control'
            name='Fakultas'
            value={Fakultas}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label>Angkatan</label>
          <input
            type='number'
            required
            className='form-control'
            name='Angkatan'
            value={Angkatan}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <label>Status</label>
          <input
            type='text'
            required
            className='form-control'
            name='Status'
            value={Status}
            onChange={handleChange}
          />
        </div>

        <div className='form-group'>
          <input
            type='submit'
            value='Create Student'
            className='btn btn-success'
          />{" "}
          <Link to='/' className='btn btn-secondary'>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
