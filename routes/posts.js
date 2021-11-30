import express from 'express';
import {getMahasiswa, getMahasiswaById, createMahasiswa, updateMahasiswa, deleteMahasiswa,getMahasiswaGambarById} from '../controllers/posts.js'

import multer from 'multer';
import bodyParser from 'body-parser';

const router = express.Router();
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({ storage: storage });

// Route get All Mahasiswa
router.get('/',getMahasiswa);

//Route get single Mahasiswa
router.get('/:id',getMahasiswaById);

//Route get single Gambar Mahasiswa
router.get('/gambar/:id',getMahasiswaGambarById);

// Route CREATE Mahasiswa
router.post('/',  upload.single('Gambar'),createMahasiswa);

//Route get UPDATE Mahasiswa
router.put('/:id',upload.single('Gambar'),updateMahasiswa);

//Route get DELETE Mahasiswa
router.delete('/:id',deleteMahasiswa);

//export router
export default router;
