import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useAppContext } from "../../context/AppContext";

const EditStudent = () => {
  const { editStudent, student} = useAppContext();

  const history = useHistory();

  const [formData, setFormData] = useState({
    Nama : student.Nama,
    NIM : student.NIM,
    Prodi : student.Prodi,
    Fakultas : student.Fakultas,
    Angkatan : student.Angkatan,
    Status : student.Status,
  });

  const { Nama, NIM, Prodi, Fakultas, Angkatan, Status } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditStudent = (e) => {
    e.preventDefault();

    editStudent(student._id, formData);

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
      <h3 style={{ color: "green", marginBottom: "2rem", marginTop: "3rem" }}>
        Update Student
      </h3>
      <form onSubmit={handleEditStudent}>
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
      </form>
    </div>
  );
};

export default EditStudent;
