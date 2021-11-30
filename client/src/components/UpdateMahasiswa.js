import React, { useState,Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Select from 'react-select';

class UpdateMahasiswa extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Nama: '',
        NIM:'',
        Prodi:'',
        Status:'',
        Gambar:'',
        Jurusan:'',
        Angkatan:'',
        jurusans_select:[],
        jurusans_selected:{}
    };
  }

  componentWillMount() {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    axios
      .get('http://localhost:5000/mahasiswa/'+id)
      .then(res => {
        this.setState({
            id: res.data._id,
            Nama: res.data.Nama,
            NIM: res.data.NIM,
            Prodi: res.data.Prodi,
            Status: res.data.Status,
            Gambar: res.data.Detail.Gambar,
            Jurusan: res.data.Jurusan,
            Angkatan: res.data.Angkatan,
        })
        var obj = {value:res.data.Jurusan,label:res.data.Detail.Nama}
        this.setState({
          jurusans_selected: obj
        })
        console.log(obj)
      })
      .catch(err => {
        console.log("Error from UpdateMahasiswa");
      })
      
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
      jurusans_selected:{value:e.value,label:e.label},
    });
  };
  onChangeAngkatan = e => {
    this.setState({ 
      Angkatan:e.target.value,
    });
  };

  onSubmit = e => {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
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
      .put('http://localhost:5000/mahasiswa/'+this.state.id, data,config)
      .then(res => {
        window.location.href = '/show-mahasiswa?id='+id
      })
      .catch(err => {
        console.log(err);
      })
  };


  render() {
    return (
      <div className="UpdateMahasiswa">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  List Mahasiswa
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Mahasiswa</h1>
              <p className="lead text-center">
                  Update Mahasiswa
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="Nama">Nama</label>
              <input
                type='text'
                placeholder='Nama Mahasiswa'
                name='Nama'
                className='form-control'
                value={this.state.Nama}
                onChange={this.onChangeNama}
                required="required"
              />
            </div>

            <div className='form-group'>
            <label htmlFor="Keterangan">NIM</label>
              <input
                type='number'
                placeholder='NIM Mahasiswa'
                name='NIM'
                className='form-control'
                value={this.state.NIM}
                onChange={this.onChangeNIM}
                required="required"
              />
            </div>

            <div className='form-group'>
            <label htmlFor="Keterangan">Prodi</label>
              <input
                type='text'
                placeholder='Prodi Mahasiswa'
                name='Prodi'
                className='form-control'
                value={this.state.Prodi}
                onChange={this.onChangeProdi}
                required="required"
              />
            </div>

            <div className='form-group'>
            <label htmlFor="Keterangan">Status</label>
              <input
                type='text'
                placeholder='Status Mahasiswa'
                name='Status'
                className='form-control'
                value={this.state.Status}
                onChange={this.onChangeStatus}
                required="required"
              />
            </div>

            <div className='form-group'>
            <label htmlFor="Keterangan">Gambar</label>
              <br/>
              <img style={{width : "200px"}} src={"data:;base64,"+this.state.Gambar} alt="gambar" />
              <input
                type='file'
                placeholder='Gambar Mahasiswa'
                name='Gambar'
                className='form-control'
                onChange={this.onChangeGambar}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="Keterangan">Jurusan</label>
              <Select 
                options = {this.state.jurusans_select} 
                value={this.state.jurusans_selected}
                // defaultValue ={this.state.jurusans_selected}
                // defaultInputValue ={this.state.jurusans_selected.label}
                onChange={this.onChangeJurusan}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="Keterangan">Angkatan</label>
              <input
                type='number'
                placeholder='Angkatan Mahasiswa'
                name='Angkatan'
                className='form-control'
                value={this.state.Angkatan}
                onChange={this.onChangeAngkatan}
                required="required"
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-outline-info btn-lg btn-block">Update Mahasiswa</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateMahasiswa;