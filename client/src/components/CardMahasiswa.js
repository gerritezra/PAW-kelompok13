import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const CardMahasiswa = (props) => {
    const mahasiswa = props.mahasiswa;

    return(
        <div className="card-container">
            <div className="desc">
                <img style={{width : "200px"}} src={"data:;base64,"+mahasiswa.Detail.Gambar} alt="gambar" />
                <h2>
                    Nama : { mahasiswa.Nama }
                </h2>
                <h3>NIM         : {mahasiswa.NIM}</h3>
                <h3>Prodi       : {mahasiswa.Prodi}</h3>
                <h3>Status      : {mahasiswa.Status}</h3>
                <h3>Angkatan    : {mahasiswa.Angkatan}</h3>
                <h3>Jurusan     : {mahasiswa.Detail.Nama}</h3>
                <h3>
                    <Link to={`/show-mahasiswa?id=${mahasiswa._id}`} className="btn btn-primary">Detail</Link>
                </h3>
            </div>
        </div>
    )
};

export default CardMahasiswa;