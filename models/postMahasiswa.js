import mongoose from 'mongoose';

const mahasiswaSchema = mongoose.Schema({
	Nama : String,
	NIM : String,
	Prodi : String,
	Fakultas : String,
	Angkatan : Number,
	Status : String,
});

const Mahasiswa = mongoose.model('Mahasiswa',mahasiswaSchema);

export default Mahasiswa;
