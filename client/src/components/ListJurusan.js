import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CardJurusan from './CardJurusan';

class ListJurusan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jurusans: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/jurusan')
      .then(res => {
        this.setState({
          jurusans: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ListJurusan');
      })
  };


  render() {
    const jurusans = this.state.jurusans;
    console.log("Jurusan: " + jurusans);
    let jurusansList;

    if(!jurusans) {
      jurusansList = "there is no jurusan record!";
    } else {
        jurusansList = jurusans.map((jurusan, k) =>
        <CardJurusan jurusan={jurusan} key={k} />
      );
    }

    return (
      <div className="JurusanList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Jurusan List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-jurusan" className="btn btn-outline-warning">
                + Add New Jurusan
              </Link>
              <Link to="/" className="btn btn-outline-primary float-right">
                Mahasiswa
              </Link>
            </div>

          </div>

          <div className="list">
                {jurusansList}
          </div>
        </div>
      </div>
    );
  }
}

export default ListJurusan;