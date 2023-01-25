// ! Manipulasi Array

// * 1. Menambah isi Array | manual
// var arr = [];

// ? Statis
// arr[0] = 'Muhammad';
// arr[1] = 'Abdanul';
// arr[2] = 'Ikhlas';
// console.log(arr);

// * 2. Menghapus array | manual
// var arr = ["Muhammad", "Abdanul", "ikhlas"];

// arr[1] = undefined;

// console.log(arr);

// * 3. Menampilkan array
// var arr = ["Muhammad", "Abdanul", "ikhlas", "garaa"];

// for(var i = 0; i < arr.length; i++){ // arr.length = untuk mengetahui banyak elemen di array
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah ' + arr[i]);
// }




// ! METHOD PADA ARRAY
// * 1. length = untuk mengetahui banyak elemen di array
// contoh line 23

// * 2. join = menggabungkan isi array menjadi string
// var arr = ["Muhammad", "Abdanul", "ikhlas"];

// console.log(arr.join()); // hasil = Muhammad,Abdanul,ikhlas
// console.log(arr.join(" - ")); // hasil = Muhammad - Abdanul - ikhlas

// * 3. push, pop, shift, unshift = untuk menambah/menghapus elemen array
// var arr = ["Muhammad", "Abdanul", "ikhlas"];

// arr.push('klaz'); // menambah di akhir array
// arr.pop(); // menghapus di akhir array
// arr.unshift('klazz'); // menambah di awal array
// arr.shift(); // menghapus di awal array

// * 4. slice,splice = mengiris/menyisipkan elemen di tengah2 array
var arr = ["Muhammad", "Abdanul", "ikhlas", "agil", "gara"];
// ? splice = menyisipkan dii tengah2 array
// ? rumus : splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// arr.splice(2,0 , "klaz");
// arr.splice(1,2,"klaz", "gara");

// ? slice = mengambil di tengah array
// ? rumus : slice(awal,akhir), harus di tampung
// misal mau mengambil abdanul dan ikhlas
// var arr2 = arr.slice(1,3);
// console.log(arr2.join(" - "));

// * 5. forEach dan map 
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ["Muhammad", "Abdanul", "ikhlas", "agil", "gara"];
// ? foreach = pengulangan untuk setiap elemen tetapi bisa melakukan sesuatu
// var cetak = function(e){ // function expression
//     console.log(e);
// }
// angka.forEach(cetak);

// nama.forEach(function(e , i){ // e : nama mahasiswa, i : index
//     console.log("Mahasiswa ke-" + (i+1) + " adalah " + e );
// })

// ? map = saama seperti forEach tetapi lebih baik karena mengembalikan array
// var angka = [1,2,3,4,5,6];
// angka.map(function(e){
//     console.log("isi angka : " + e);
// }) // seperti forEach

// ? kelebihan map
// var angka2 = angka.map(function(e){
//     return e * 3;
// })
// console.log("isi angka2 : " + angka2.join(" - "));

// * 5. sort = untuk menngurutkan array
// var angka = [8,5,1,20,10,9,2,6,3,4,7];
// angka.sort();
// console.log(angka.join(" - "));

// ? agar urutan sesuai
// angka.sort(function(a,b){
//     return a-b;
// })
// console.log(angka.join(" - "));

// * filter dan find = untuk mencari nilai dalam array
var angka = [8,5,1,20,10,9,2,6,3,4,7];
// ? filter = mengembalikan banyak nilai dan mengembalikan dalam bentuk array
var angka2 = angka.filter(function(x){
    return x > 5;
})
console.log(angka2.join(" - ")); // dalam bentuk array

// ? find = mengembalikan 1 nilai saja
var angka3 = angka.find(function(n){
    return n > 5;
})
console.log(angka3);