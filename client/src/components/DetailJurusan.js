import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class DetailJurusan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jurusan: {}
    };
  }

  componentDidMount() {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    axios
      .get('http://localhost:5000/jurusan/'+id)
      .then(res => {
        this.setState({
          jurusan: res.data
        })
      })
      .catch(err => {
        console.log("Error from DetailJurusan");
      })
  };

  onDeleteClick (id) {
    axios
      .delete('http://localhost:5000/jurusan/'+id)
      .then(res => {
        window.location.href = '/jurusan'
      })
      .catch(err => {
        console.log(err);
      })
  };


  render() {

    const jurusan = this.state.jurusan;
    let JurusanItem = <div>
      <table className="table table-hover table-dark">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Nama</td>
            <td>{ jurusan.Nama }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Keterangan</td>
            <td>{ jurusan.Keterangan }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="DetailJurusan">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/jurusan" className="btn btn-outline-warning float-left">
                  List Jurusan
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Jurusan Record</h1>
              <p className="lead text-center">
                  Detail Jurusan
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { JurusanItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,jurusan._id)}>Delete Jurusan</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-jurusan?id=${jurusan._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Jurusan
              </Link>
              <br />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default DetailJurusan;