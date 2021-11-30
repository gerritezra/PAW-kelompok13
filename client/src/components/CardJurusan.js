import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const CardJurusan = (props) => {
    const jurusan = props.jurusan;

    return(
        <div className="card-container">
            <div className="desc">
                <h2>
                    { jurusan.Nama }
                </h2>
                <h3>{jurusan.Keterangan}</h3>
                <h3>
                    <Link to={`/show-jurusan?id=${jurusan._id}`} className="btn btn-primary">Detail</Link>
                </h3>
            </div>
        </div>
    )
};

export default CardJurusan;