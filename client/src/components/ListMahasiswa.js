import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CardMahasiswa from './CardMahasiswa';

export default class ListMahasiswa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mahasiswas: []
    };
  }

  componentWillMount() {
    axios
      .get('http://localhost:5000/mahasiswa')
      .then(res => {
        this.setState({
          mahasiswas: res.data
        })
      })
    .catch(err =>{
      console.log('Error :' + err);
    })
  };


  render() {
    var mahasiswas = this.state.mahasiswas;
    let mahasiswasList;

    if(!mahasiswas) {
      mahasiswasList = "there is no mahasiswa record!";
    } else {
        mahasiswasList = mahasiswas.map((mahasiswa, k) =>
        <CardMahasiswa mahasiswa={mahasiswa} key={k} />
      );
    }

    return (
      <div className="MahasiswaList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Mahasiswa List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-mahasiswa" className="btn btn-outline-warning ">
                + Add New Mahasiswa
              </Link>
              <Link to="/jurusan" className="btn btn-outline-primary float-right">
                Jurusan
              </Link>
            </div>
          </div>

          <div className="list">
            {mahasiswasList}
          </div>
        </div>
      </div>
    );
  }
}