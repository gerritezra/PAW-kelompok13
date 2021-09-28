
import Mahasiswa from '../models/postMahasiswa.js'

// function get All Mahasiswa
export const getMahasiswa = async(req,res)=>{
	try{
		const Mahasiswas = await Mahasiswa.find();
		
		res.status(200).json(Mahasiswas);
	}
	catch(error){
		res.status(500).json({messsage : error.message});

	}
}

//function get single Mahasiswa
export const getMahasiswaById = async(req,res)=>{
	try{
		const Smahasiswa = await Mahasiswa.findById(req.paramas.id);
		res.json(Smahasiswa);
	}
	catch(error){
		res.status(404).json({messsage : error.message});

	}
}

//function Create Mahasiswa
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

//function Update Mahasiswa
export const updateMahasiswa = async(req,res)=>{
    const cekId = await Product.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updatedMahasiswa = await Product.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updateMahasiswa);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//function Delete Mahasiswa
export const deleteMahasiswa = async(req,res)=>{
    const cekId = await Product.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedMahasiswa = await Product.deleteOne({_id: req.params.id});
        res.status(200).json(deletedMahasiswa);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
