import React from "react";
import { Link } from "react-router-dom";

import { useAppContext } from "../../context/AppContext";

const StudentItem = ({ student }) => {
  const { deleteStudent } = useAppContext();

  return (
    <tr>
      <td>{student.Nama}</td>
      <td>{student.NIM}</td>
      <td>{student.Prodi}</td>
      <td>
        <Link className='btn btn-light btn-sm' to={`/students/${student._id}`}>
          Tampilkan
        </Link>{" "}
        <button
          className='btn btn-light btn-sm'
          onClick={() => deleteStudent(student._id)}
        >
          Hapus
        </button>
      </td>
    </tr>
  );
};

export default StudentItem;
