import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useAppContext } from "../../context/AppContext";

const StudentDetails = () => {
  const { getStudent, student, loading } = useAppContext();

  const { id } = useParams();

  useEffect(() => {
    getStudent(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { _id, Nama, NIM, Prodi, Fakultas, Angkatan, Status } = student;

  if (!student || loading) return <h2>Loading</h2>;

  return (
    <div className='container' style={{ marginTop: "3rem", maxWidth: "40rem" }}>
      <h3 style={{ marginTop: "3rem", color: "green" }}>Student Details</h3>
      <div className='card' style={{ width: "30rem", marginTop: "2rem" }}>
        <div className='card-body'>
          <h4
            className='card-title'
            style={{ color: "brown", textTransform: "uppercase" }}
          >
            {Nama}
          </h4>
          <hr />
          <p className='card-text'>
            <strong>NIM: </strong> {NIM}
          </p>
          <p className='card-text'>
            <strong>Prodi: </strong> {Prodi}
          </p>
          <p className='card-text'>
            <strong>Fakultas: </strong> {Fakultas}
          </p>
          <p className='card-text'>
            <strong>Angkatan:</strong> {Angkatan}
          </p>
          <p className='card-text'>
            <strong>Status:</strong> {Status}
          </p>
          <hr />
          <Link
            to={`/students/edit/${_id}`}
            style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
            className='btn btn-success'
          >
            Edit
          </Link>{" "}
          <Link
            to='/'
            style={{ paddingLeft: "1.5rem", paddingRight: "1.5rem" }}
            className='btn btn-secondary'
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
