import React, { Component } from 'react';
import { 
  Routes,
  Route } from 'react-router-dom';
import './App.css';

import CreateMahasiswa from './components/CreateMahasiswa';
import CreateJurusan from './components/CreateJurusan';
import ListMahasiswa from './components/ListMahasiswa';
import ListJurusan from './components/ListJurusan';
import DetailMahasiswa from './components/DetailMahasiswa';
import DetailJurusan from './components/DetailJurusan';
import UpdateMahasiswa from './components/UpdateMahasiswa';
import UpdateJurusan from './components/UpdateJurusan';

class App extends Component {
  render() {
    return (
        <Routes>
            <Route exact path='/' element={<ListMahasiswa/>} />
            <Route path='/create-mahasiswa' element={<CreateMahasiswa/>} />
            <Route path='/edit-mahasiswa' element={<UpdateMahasiswa/>} />
            <Route path='/show-mahasiswa' element={<DetailMahasiswa/>} />
            <Route exact path='/jurusan' element={<ListJurusan/>} />
            <Route path='/create-jurusan' element={<CreateJurusan/>} />
            <Route path='/edit-jurusan' element={<UpdateJurusan/>} />
            <Route path='/show-jurusan' element={<DetailJurusan/>} />
        </Routes>
    );
  }
}

export default App;