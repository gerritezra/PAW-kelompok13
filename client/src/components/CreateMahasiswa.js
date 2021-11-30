import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import Select from 'react-select';

class CreateMahasiswa extends Component {
  constructor() {
    super();
    this.state = {
      Nama: '',
      NIM:'',
      Prodi:'',
      Status:'',
      Gambar:'',
      Jurusan:'',
      Angkatan:'',
      jurusans_select:[]
    };
  }
  
  componentDidMount() {
    axios
      .get('http://localhost:5000/jurusan')
      .then(res => {
        var obj = []
		    for (var jur of res.data) {
          obj.push({value:jur._id,label:jur.Nama})
        }
        this.setState({
          jurusans_select: obj
        })
      })
      .catch(err =>{
        console.log('Error from ListJurusan');
      })
  };

  onChangeNama = e => {
    this.setState({ 
      Nama: e.target.value,
    });
  };
  onChangeNIM = e => {
    this.setState({ 
      NIM:e.target.value,
    });
  };
  onChangeProdi = e => {
    this.setState({ 
      Prodi:e.target.value,
    });
  };
  onChangeStatus = e => {
    this.setState({ 
      Status:e.target.value,
    });
  };
  onChangeGambar = e => {
    this.setState({ 
      Gambar:e.target.files[0],
    });
  };
  onChangeJurusan = e => {
    this.setState({ 
      Jurusan:e.value,
    });
  };
  onChangeAngkatan = e => {
    this.setState({ 
      Angkatan:e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    
    const data = new FormData() 
    data.append('Nama', this.state.Nama)
    data.append('NIM', this.state.NIM)
    data.append('Prodi', this.state.Prodi)
    data.append('Status', this.state.Status)
    data.append('Jurusan', this.state.Jurusan)
    data.append('Angkatan', this.state.Angkatan)
    data.append('Gambar', this.state.Gambar)
    console.log(data)

    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
    }

    axios
      .post('http://localhost:5000/mahasiswa', data,config)
      .then(res => {
        window.location.href = '/'
      })
      .catch(err => {
        console.log(err);
      })
  };

  render() {
    return (
      <div className="CreateMahasiswa">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  List Mahasiswa
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Mahasiswa</h1>
              <p className="lead text-center">
                  Create Mahasiswa
              </p>
                <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <p>Nama</p>
                  <input
                    type='text'
                    name='Nama'
                    className='form-control'
                    onChange={this.onChangeNama}
                    required="required"
                  />
                </div>

                <div className='form-group'>
                  <p>NIM</p>
                  <input
                    type='number'
                    name='NIM'
                    className='form-control'
                    onChange={this.onChangeNIM}
                    required="required"
                  />
                </div>

                <div className='form-group'>
                  <p>Fakultas</p>
                  <input
                    type='text'
                    name='Prodi'
                    className='form-control'
                    onChange={this.onChangeProdi}
                    required="required"
                  />
                </div>

                <div className='form-group'>
                  <p>Status</p>
                  <input
                    type='text'
                    name='Status'
                    className='form-control'
                    onChange={this.onChangeStatus}
                    required="required"
                  />
                </div>

                <div className='form-group'>
                  <p>Gambar</p>
                  <input
                    type='file'
                    name='Gambar'
                    className='form-control'
                    onChange={this.onChangeGambar}
                    required="required"
                  />
                </div>

                <div className='form-group'>
                  <p>Jurusan</p>
                  <Select 
                    options = {this.state.jurusans_select} 
                    onChange={this.onChangeJurusan}
                    required="required"
                  />
                </div>

                <div className='form-group'>
                  <p>Angkatan</p>
                  <input
                    type='number'
                    name='Angkatan'
                    className='form-control'
                    onChange={this.onChangeAngkatan}
                    required="required"
                  />
                </div>

                <input
                    type="submit"
                    value="Submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateMahasiswa;