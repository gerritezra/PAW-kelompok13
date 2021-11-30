import mongoose from 'mongoose';

const kontakmahasiswaSchema = mongoose.Schema({
	NomorWA : Number,
	NomorHP : Number,
	IDLine : String,
	Email : String,
	Alamat : String,
	DPA : String,
});

const KontakMahasiswa = mongoose.model('KontakMahasiswa',kontakmahasiswaSchema);

export default KontakMahasiswa;
