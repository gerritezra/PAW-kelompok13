import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

export default class DetailMahasiswa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mahasiswa: {}
    };
  }

  componentWillMount() {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    axios
      .get('http://localhost:5000/mahasiswa/'+id)
      .then(res => {
        this.setState({
          mahasiswa: res.data
        })
      })
      .catch(err => {
        console.log("Error from DetailMahasiswa");
      })
      console.log(this.state.mahasiswa)
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:5000/mahasiswa/'+id)
      .then(res => {
        window.location.href = '/'
      })
      .catch(err => {
        console.log("Error form Delete");
      })
  };


  render() {

    const mahasiswa = this.state.mahasiswa;
    var Jurusan = "";
    var Gambar = "";
    if (mahasiswa.Detail != undefined) {
      Jurusan = mahasiswa.Detail.Nama
      Gambar = mahasiswa.Detail.Gambar
    }
    let MahasiswaItem = <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Nama</td>
            <td>{ mahasiswa.Nama }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>NIM</td>
            <td>{ mahasiswa.NIM }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Prodi</td>
            <td>{ mahasiswa.Prodi }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Status</td>
            <td>{ mahasiswa.Status }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Gambar</td>
            <td><img style={{width : "200px"}} src={"data:;base64,"+Gambar} alt="gambar" /></td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Jurusan</td>
            <td>{ Jurusan }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Angkatan</td>
            <td>{ mahasiswa.Angkatan }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="DetailMahasiswa">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  List Mahasiswa
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Mahasiswa Record</h1>
              <p className="lead text-center">
                  Detail Mahasiswa
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { MahasiswaItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,mahasiswa._id)}>Delete Mahasiswa</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-mahasiswa?id=${mahasiswa._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Mahasiswa
              </Link>
              <br />
            </div>

          </div>
        </div>
      </div>
    );
  }
}
