import mongoose from 'mongoose';

const mahasiswaSchema = mongoose.Schema({
	Nama : String,
	NIM : String,
	Prodi : String,
	Angkatan : String,
	Status : String,
});

const Mahasiswa = mongoose.model('Mahasiswa',mahasiswaSchema);

export default Mahasiswa;