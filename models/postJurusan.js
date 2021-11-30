import mongoose from 'mongoose';

const jurusanSchema = mongoose.Schema({
	Nama : String,
	Keterangan : String,
	Mahasiswa: [
	  { type: mongoose.Schema.Types.ObjectId, ref: 'Mahasiswa' }
	]
  
});

const Jurusans = mongoose.model('Jurusan',jurusanSchema);

export default Jurusans;
