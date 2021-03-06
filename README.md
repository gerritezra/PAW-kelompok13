# Project Team
Anggota:
1. Alvin Indra Kurniawan (19/439808/TK/48538)
2. Aditya Yusuf Pramudita (19/444036/TK/49232)
3. Dandy Alif Utama (19/446773/TK/49878)
4. Gerrit Ezra Y. Kairupan (19/446777/TK/49882)
5. Naufal Halim (19/446784/TK/49889)

# Penjelasan Web Secara Umum
Web DATAKU adalah project web sederhana dari mata kuliah Pengembangan Aplikasi Web yang dapat memberikan fungsi CRUD menggunkana MERN (Mongoose, Express JS, React JS, dan Node JS).Web ini bertujuan untuk mendata mahasiswa dengan 2 API dalam satu web, yakni API Mahasiswa yang menjadi akses untuk CRUD Mahasiswa dan API Jurusan yang menjadi kunci akses sebagai pelengkap di API Mahasiswa dan dapat melakukan CRUD pada Jurusan itu sendiri. Apabila salah satu Jurusan dihapus, maka data mahasiswa yang terikat dengan jurusan tersebut juga akan terhapus. 

# Penjelasan API Secara Umum
Pada tugas kali ini, diminta membuat 2 Restful API yang masing-masing dapat menjalankan fungsi-fungsi CRUD ( *Create, Read, Update, and Delate*). 3 API tersebut yakni API yang memuat data mahasiswa secara umum dan API yang satunya lagi memuat data kontak mahasiswa. Selain itu, API Jurusan digunakan untuk pelengkap API Mahasiswa, Diharapkan dengan adanya API-API tersebut data-data mahasiswa dapat terintegrasi anatar data secara umum ataupun data kontak mahasiswa itu sendiri.

# API Mahasiswa
API Mahasiswa adalah API sederhana yang menyimpan pendataan mahasiswa untuk mengetahui mahasiswa tersebut merupakan mahasiswa aktif atau bukan. Pada kasus ini admin sebagai pengguna dapat meng-*create*, *read*, *updaete*, hingga menghapus/*delete* data. Dalam hal ini pengguna atau admin memiliki Nama (tipe data *String*), NIM (tipe data *String*), Program Studi (tipe data *String*), Tahun Angkatan (tipe data *Number*), dan status mahasiswa (tipe data *string*).

# API Kontak Mahasiswa
API Kontak Mahasiswa adalah sebuah API sederhana yang dapat memproses fungsi CRUD dalam hal Konatak Mahasiswa itu sendiri. Dalam hal ini, data mahasiswa pada API Mahasiswa dapat meng-*create*, *read*, *updaete*, hingga menghapus/*delete* kontak mahasiswa. Dalam hal ini API berisi data-data kontak seperti Nomor Whatsapp (tipe data *Number*), Nomor HP (tipe data *Number*), ID Line (tipe data *String*), Email (tipe data *String*), dan Alamat (tipe data *string*).

# API Jurusan
API Jurusan adalah sebuah API sederhana yang dapat memproses fungsi CRUD dalam hal menambah, menghapus, merubah, dan membaca jurusan sebagai pelengkap di API Mahasiswa.
