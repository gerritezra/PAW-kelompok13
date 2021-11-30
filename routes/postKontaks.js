import express from 'express';
import {getKontakMahasiswa, getKontakMahasiswaById, createKontakMahasiswa, updateKontakMahasiswa, deleteKontakMahasiswa} from '../controllers/postKontaks.js'

const router = express.Router();

// Route get All Kontak Mahasiswa
router.get('/',getKontakMahasiswa);

//Route get single Kontak Mahasiswa
router.get('/:id',getKontakMahasiswaById);

// Route CREATE Kontak Mahasiswa
router.post('/',createKontakMahasiswa);

//Route get UPDATE Kontak Mahasiswa
router.put('/:id',updateKontakMahasiswa);

//Route get DELETE Kontak Mahasiswa
router.delete('/:id',deleteKontakMahasiswa);

//export router
export default router;
