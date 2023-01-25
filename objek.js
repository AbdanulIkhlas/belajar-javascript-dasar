// ! MEMBUAT OBJEK 
// ? kurang lebih seperti struct
// var mhs = {
//     nama : "Muhammad Abdanul ikhlas",
//     umur : 19,
//     ips : [3.55, 3.88, 3.92],
//     alamat : {
//         jalan : "Jl. TB 4 No. 5",
//         kota : "Yogyakarta",
//         provinsi : "DI Yogyakarta"
//     }
    
// };

// ! jenis2 cara membuat objek
// * 1. Objek literal
var mhs1 = {
    nama : 'klaz',
    nim : '123210009',
    jurusan : 'informatika'
};
var mhs2 = {
    nama : 'gara',
    nim : '123210024',
    jurusan : 'informatika'
};


// * 2. Function Declaration
function buatObjekMahasiswa(nama, nim, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.jurusan = jurusan;
    return mhs;
}
var mhs3 = buatObjekMahasiswa('Agil', '123210033', 'informatika');
var mhs4 = buatObjekMahasiswa('Hadi', '123210019', 'informatika');


// * 3. Constructor
function Mahasiswa(nama, nim, jurusan){
    // anggap || var this = {};
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
    // anggap || return this;
}
var mhs5 = new Mahasiswa('Riyadhy', '123210002', 'informatika'); // wajib menggunakan new