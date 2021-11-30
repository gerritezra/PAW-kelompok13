import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateJurusan extends Component {
  constructor() {
    super();
    this.state = {
      Nama: '',
      Keterangan:'',
    };
  }

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

    const data = {
      Nama: this.state.Nama,
      Keterangan: this.state.Keterangan
    };

    axios
      .post('http://localhost:5000/jurusan', data)
      .then(res => {
        window.location.href = '/jurusan'
      })
      .catch(err => {
        console.log(err);
      })
  };

  render() {
    return (
      <div className="CreateJurusan">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/jurusan" className="btn btn-outline-warning float-left">
                  List Jurusan
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Jurusan</h1>
              <p className="lead text-center">
                  Create Jurusan
              </p>

              <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Nama Jurusan'
                    name='Nama'
                    className='form-control'
                    onChange={this.onChangeNama}
                    required="required"
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Keterangan Jurusan'
                    name='Keterangan'
                    className='form-control'
                    onChange={this.onChangeKeterangan}
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

export default CreateJurusan;