// ----- Pop up box 
/* 
"alert"   : menampilkan hanya pop up saja 
"prompt"  : menampilkan pop up dan ada textboxt
            mengembalikan nilai yang di isi pada textbox,
"confirm" : memberikan pop up dan memberikan pertanyaan dalam bentuk kondisional,
            mengembalikan nilai boolean
*/

// alert("Hello !!");
// alert("Nama");
// alert("Saya");
// alert("Klaz");

// var nama = prompt('masukkan nama : ');
// alert(nama);

// var tes = confirm('are you sure ?');
// if (tes == true ) alert('user menekan OK!');
// else alert('user menekan CANCEL');

alert('Selamat Datang di program mengecek bilangan genap');
var cek = true;

while(cek){
    var nilai = prompt('Masukkan nilai : ');
    if(nilai % 2 == 0){
        alert('Angka ' + nilai + " adalah genap");
    }else{
        alert('Angka ' + nilai + " adalah ganjil");
    }

    cek = confirm('Coba lagi?');
}

alert('arigato gozaimasu');