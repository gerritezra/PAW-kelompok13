
import Mahasiswa from '../models/postMahasiswa.js'

export const getMahasiswa = async(req,res)=>{
	try{
		const Mahasiswas = await Mahasiswa.find();
		
		res.status(200).json(Mahasiswas);
	}
	catch(error){
		res.status(404).json({messsage : error.message});

	}
}

export const createMahasiswa = async(req,res)=>{
	const mahasiswa = req.body;

	const newMahasiswa = new Mahasiswa(mahasiswa);

	try{
		await newMahasiswa.save();
		
		res.status(201).json(newMahasiswa);
	}
	catch(error){
		res.status(409).json({messsage : error.message});

	}
}

