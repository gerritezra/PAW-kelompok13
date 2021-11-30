import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateJurusan extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Nama: '',
        Keterangan:'',
    };
  }

  componentWillMount() {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    axios
      .get('http://localhost:5000/jurusan/'+id)
      .then(res => {
        this.setState({
            Nama: res.data.Nama,
            Keterangan: res.data.Keterangan
        })
      })
      .catch(err => {
        console.log("Error from UpdateJurusan");
      })
  };

  onChangeNama = e => {
    this.setState({ 
      Nama: e.target.value,
    });
  };

  onChangeKeterangan = e => {
    this.setState({ 
      Keterangan: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');

    const data = {
        Nama: this.state.Nama,
        Keterangan: this.state.Keterangan
    };

    axios
      .put('http://localhost:5000/jurusan/'+id, data)
      .then(res => {
        window.location.href = '/show-jurusan?id='+id
      })
      .catch(err => {
        console.log("Error in UpdateJurusan!");
      })
  };


  render() {
    return (
      <div className="UpdateJurusan">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/jurusan" className="btn btn-outline-warning float-left">
                  List Jurusan
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Jurusan</h1>
              <p className="lead text-center">
                  Update Jurusan
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="Nama">Nama</label>
              <input
                type='text'
                placeholder='Nama Jurusan'
                name='Nama'
                className='form-control'
                value={this.state.Nama}
                onChange={this.onChangeNama}
                required="required"
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="Keterangan">Keterangan</label>
              <input
                type='text'
                placeholder='Keterangan Jurusan'
                name='Keterangan'
                className='form-control'
                value={this.state.Keterangan}
                onChange={this.onChangeKeterangan}
                required="required"
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">
                Update Jurusan
            </button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateJurusan;