import Mahasiswa from '../models/postMahasiswa.js'
import fs  from 'fs';
import path from 'path';
import download from 'download';
import Jurusans from '../models/postJurusan.js'

const __dirname = path.resolve();

// function get All Mahasiswa
export const getMahasiswa = async(req,res)=>{
    try{
        var Mahasiswas = await Mahasiswa.find();

        var Maha = [];
        var M = [];

        for (var mahasiswa of Mahasiswas) {
            const jurusan = await Jurusans.findById(mahasiswa.Jurusan);
            const fileContents = new Buffer.from(mahasiswa.Gambar.data, 'base64').toString('base64')

            var mahasiswaDetail = new Mahasiswa({
                _id: mahasiswa._id,
                Nama: mahasiswa.Nama,
                NIM: mahasiswa.NIM,
                Prodi: mahasiswa.Prodi,
                Angkatan: mahasiswa.Angkatan,
                Status: mahasiswa.Status,
                Jurusan : jurusan.Jurusan,
                Detail: {
                    Judul : "Jurusan",
                    Nama : jurusan.Nama,
                    Keterangan : jurusan.Keterangan,
                    Gambar : fileContents,
                },
            });
            Maha.push(mahasiswaDetail)
        }

        res.status(200).json(Maha);
    }
    catch(error){
        res.status(500).json({messsage : error.message});

    }
}

//function get single Mahasiswa
export const getMahasiswaById = async(req,res)=>{
    const mahasiswa = await Mahasiswa.findById(req.params.id);
    if(!mahasiswa) {
        return res.status(404).json({message: "Data tidak ditemukan"});
    }else{
        if(mahasiswa == undefined){
            return res.status(200).json({message : "Data tidak ditemukan"});
        }else{
            // mahasiswa.Gambar.data = "";
            const jurusan = await Jurusans.findById(mahasiswa.Jurusan);
            const fileContents = new Buffer.from(mahasiswa.Gambar.data, 'base64')
            var mahasiswaDetail = new Mahasiswa({
                _id: mahasiswa._id,
                Nama: mahasiswa.Nama,
                NIM: mahasiswa.NIM,
                Prodi: mahasiswa.Prodi,
                Angkatan: mahasiswa.Angkatan,
                Status: mahasiswa.Status,
                Jurusan : mahasiswa.Jurusan,
                Detail: {
                    Judul : "Jurusan",
                    Nama : jurusan.Nama,
                    Keterangan : jurusan.Keterangan,
                    Gambar: fileContents,
                }
            });

            return res.status(200).json(mahasiswaDetail);
        }
    }
}

//function get single Mahasiswa Gambar
export const getMahasiswaGambarById = async(req,res)=>{
    const mahasiswa = await Mahasiswa.findById(req.params.id);
    if(!mahasiswa) {
        return res.status(404).json({message: "Data tidak ditemukan"});
    }else{
        if(mahasiswa == undefined){
            return res.status(200).json({message : "Data tidak ditemukan"});
        }else{
            const fileContents = new Buffer.from(mahasiswa.Gambar.data, 'base64')
            const now = Date.now();
            fs.writeFile("gambar/"+req.params.id+"_"+now+".jpg", fileContents, (err) => {
                if (err) {
                    res.status(400).json({messsage : err});
                }else{
                    res.download(`${__dirname}/gambar/${req.params.id}_${now}.jpg`);
                }
            })
        }
    }
}

//function Create Mahasiswa
export const createMahasiswa = async(req,res)=>{
    if (req.body.Nama == undefined) {
        return res.status(401).json({messsage : "Nama cannot empty"});
    }
    if (req.body.NIM == undefined) {
        return res.status(400).json({messsage : "NIM cannot empty"});
    }
    if (req.body.Prodi == undefined) {
        return res.status(400).json({messsage : "Prodi cannot empty"});
    }
    if (req.body.Angkatan == undefined) {
        return res.status(400).json({messsage : "Angkatan cannot empty"});
    }
    if (req.body.Status == undefined) {
        return res.status(400).json({messsage : "Status cannot empty"});
    }
    if (req.body.Jurusan == undefined) {
        return res.status(400).json({messsage : "Jurusan cannot empty"});
    }
    if (req.file == undefined) {
        return res.status(406).json({messsage : "Gambar cannot empty"});
    }
    var obj = {
        Nama: req.body.Nama,
        NIM: req.body.NIM,
        Prodi: req.body.Prodi,
        Angkatan: req.body.Angkatan,
        Status: req.body.Status,
        Gambar: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/jpg'
        },
        Jurusan : req.body.Jurusan
    }
    console.log(req.body)
   
    const newMahasiswa = new Mahasiswa(obj);
   
    const cekId = await Jurusans.findById(req.body.Jurusan);
    if(!cekId) return res.status(404).json({message: "Jurusan not found"});

    try{
        await newMahasiswa.save();
       
        // newMahasiswa.Gambar.data = "";
       
        const updatedJurusan = await Jurusans.findByIdAndUpdate(obj.Jurusan,{$push: {Mahasiswa: newMahasiswa._id}},);

        res.status(201).json(newMahasiswa);
    }
    catch(error){
        res.status(409).json({messsage : error.message});

    }
}

//function Update Mahasiswa
export const updateMahasiswa = async(req,res)=>{
    const mahasiswa = await Mahasiswa.findById(req.params.id);
    // console.log(req.body)
    if(!mahasiswa) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        if (req.file != undefined) {
            var obj = {
                Nama: req.body.Nama,
                NIM: req.body.NIM,
                Prodi: req.body.Prodi,
                Angkatan: req.body.Angkatan,
                Status: req.body.Status,
                Gambar: {
                    data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
                    contentType: 'image/jpg'
                },
                Jurusan: req.body.Jurusan,
            }
        } else {
            var obj = {
                Nama: req.body.Nama,
                NIM: req.body.NIM,
                Prodi: req.body.Prodi,
                Angkatan: req.body.Angkatan,
                Status: req.body.Status,
                Jurusan: req.body.Jurusan,
            }
        }

        if (req.body.Jurusan != undefined) {
           
            const jurusan = await Jurusans.findById(mahasiswa.Jurusan);
            const jurusan_new = removeItemAll(jurusan.Mahasiswa,mahasiswa._id);
           
            var objJurusan = {
                Mahasiswa: jurusan_new,
            }

            const newJurusan = await Jurusans.findByIdAndUpdate(mahasiswa.Jurusan,objJurusan);
            const updatedJurusan = await Jurusans.findByIdAndUpdate(obj.Jurusan,{$push: {Mahasiswa: mahasiswa._id}},);
        }

        const updatedMahasiswa = await Mahasiswa.findByIdAndUpdate(req.params.id,obj);
       
        res.status(200).json(updatedMahasiswa);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

// Remove all Same ID in Array
function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i].toString() == value.toString()) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }

//function Delete Mahasiswa
export const deleteMahasiswa = async(req,res)=>{
    const cekId = await Mahasiswa.findById(req.params.id);
    if(!cekId) return res.status(404).json({message: "Data tidak ditemukan"});
    try {
        const deletedMahasiswa = await Mahasiswa.findByIdAndRemove(req.params.id);
        res.status(200).json(deletedMahasiswa);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}