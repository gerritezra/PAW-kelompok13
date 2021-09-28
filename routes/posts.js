import express from 'express';
import {getMahasiswa, getMahasiswaById, createMahasiswa, updateMahasiswa, deleteMahasiswa} from '../controllers/posts.js'

const router = express.Router();

// Route get All Mahasiswa
router.get('/',getMahasiswa);

//Route get single Mahasiswa
router.get('/:id',getMahasiswaById);

// Route CREATE Mahasiswa
router.post('/',createMahasiswa);

//Route get UPDATE Mahasiswa
router.patch('/:id',updateMahasiswa);

//Route get DELETE Mahasiswa
router.delete('/:id',deleteMahasiswa);

//export router
export default router;
