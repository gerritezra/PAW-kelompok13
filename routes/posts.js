import express from 'express';
import {getMahasiswa, createMahasiswa} from '../controllers/posts.js'

const router = express.Router();

router.get('/',getMahasiswa);
router.post('/',createMahasiswa);

export default router;
