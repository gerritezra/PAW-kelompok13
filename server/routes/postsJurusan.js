import express from 'express';
import {getJurusan,
    createJurusan,
    getJurusanById,
    updateJurusan,
    deleteJurusan
} from '../controllers/postsJurusan.js'

import multer from 'multer';
import bodyParser from 'body-parser';
const router = express.Router();

// Route get All Jurusan
router.get('/',getJurusan);

//Route get single Jurusan
router.get('/:id',getJurusanById);

// Route CREATE Jurusan
router.post('/', createJurusan);

//Route get UPDATE Jurusan
router.put('/:id',updateJurusan);

//Route get DELETE Jurusan
router.delete('/:id',deleteJurusan);

//export router
export default router;
