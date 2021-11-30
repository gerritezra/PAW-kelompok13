import Jurusans from '../models/postJurusan.js'
import Mahasiswa from '../models/postMahasiswa.js';

// function get All Jurusan
export const getJurusan = async(req,res)=>{
	try{
		const Jurusan = await Jurusans.find();

		res.status(200).json(Jurusan);
	}
	catch(error){
		res.status(500).json({messsage : error.message});

	}
}

// //function get single Jurusan
export const getJurusanById = async(req,res)=>{
    const jurusan = await Jurusans.findById(req.params.id);
    if(!jurusan) {
		return res.status(404).json({message: "Data tidak ditemukan"});
	}else{
		if(jurusan == undefined){
			return res.status(200).json({message : "Data tidak ditemukan"});
		}else{
			return res.status(200).json(jurusan);
		}
	}
}

//function Create Jurusan
export const createJurusan = async(req,res)=>{
	if (req.body.Nama == undefined) {
		return res.status(400).json({messsage : "Nama cannot empty"});
	}
	if (req.body.Keterangan == undefined) {
		return res.status(400).json({messsage : "Keterangan cannot empty"});
	}
	var obj = {
        Nama: req.body.Nama,
        Keterangan: req.body.Keterangan,
    }
	
	const newJurusan = new Jurusans(obj);

	try{
		await newJurusan.save();
		
		res.status(201).json(newJurusan);
	}
	catch(error){
		res.status(409).json({messsage : error.message});

	}
}

//function Update Jurusan
export const updateJurusan = async(req,res)=>{
    const cekId = await Jurusans.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
		var obj = {
			Nama: req.body.Nama,
			Keterangan: req.body.Keterangan,
		}
        const updatedJurusan = await Jurusans.findByIdAndUpdate(req.params.id,obj);

		res.status(200).json(updatedJurusan);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//function Delete Jurusan
export const deleteJurusan = async(req,res)=>{
    const cekId = await Jurusans.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
		
		const jurusan = await Jurusans.findById(req.params.id);

		for (var jur of jurusan.Mahasiswa) {
			const deleteMahasiswa = await Mahasiswa.findByIdAndRemove(jur);
		}

        const deletedJurusan = await Jurusans.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedJurusan);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
