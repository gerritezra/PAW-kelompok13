import KontakMahasiswa from '../models/postKontakMahasiswa.js'

// function get All Kontak Mahasiswa
export const getKontakMahasiswa = async(req,res)=>{
	try{
		const KontakMahasiswas = await KontakMahasiswa.find();
		
		res.status(200).json(KontakMahasiswas);
	}
	catch(error){
		res.status(500).json({messsage : error.message});

	}
}

//function get single Kontak Mahasiswa
export const getKontakMahasiswaById = async(req,res)=>{
	try{
		const Skontakmahasiswa = await KontakMahasiswa.findById(req.paramas.id);
		res.json(Skontakmahasiswa);
	}
	catch(error){
		res.status(404).json({messsage : error.message});

	}
}

//function Create Kontak Mahasiswa
export const createKontakMahasiswa = async(req,res)=>{
	const kontakmahasiswa = req.body;
	console.log(req.body);
	
	const newKontakMahasiswa = new KontakMahasiswa(kontakmahasiswa);

	try{
		await newKontakMahasiswa.save();
		
		res.status(201).json(newKontakMahasiswa);
	}
	catch(error){
		res.status(409).json({messsage : error.message});

	}
}

//function Update Kontak Mahasiswa
export const updateKontakMahasiswa = async(req,res)=>{
    const cekId = await KontakMahasiswa.findById(req.params.id);
    console.log(req.body)
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"}); 
    try {
        const updatedKontakMahasiswa = await KontakMahasiswa.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(updateKontakMahasiswa);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//function Delete Kontak Mahasiswa
export const deleteKontakMahasiswa = async(req,res)=>{
    const cekId = await KontakMahasiswa.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedKontakMahasiswa = await KontakMahasiswa.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedKontakMahasiswa);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
