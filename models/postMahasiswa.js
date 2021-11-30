import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const mahasiswaSchema = mongoose.Schema({
	Nama : String,
	NIM : String,
	Prodi : String,
	Fakultas : String,
	Angkatan : String,
	Status : String,
    Gambar:
    {
        data: Buffer,
        contentType: String
    },
	Jurusan : { type: mongoose.Types.ObjectId, ref: 'Jurusan' },
	Detail : {
		
	}
});

const Mahasiswa = mongoose.model('Mahasiswa',mahasiswaSchema);

export default Mahasiswa;
