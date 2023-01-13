// pengondisian if .. else if .. else
// alert("tes pengondisian if else");
// var batas = prompt('Masukkan nilai batas : ');
// for(var i = 1; i <= batas ; i++){
//     if(i < 7){
//         console.log('Angkot No. ' + i + ' beroperasi dengan baik');
//     }else if(i == 8){
//         console.log('Angkot No. ' + i + ' sedang lembur');
//     }else{
//         console.log('Angkot No. ' + i + ' sedang tidak beroperasi');
//     }
// }
// alert('selesai');

// swicth
alert("tes pengondisian switch");
var angka = prompt('Masukkan nilai 1/2/3 : ');
switch (angka){
    case '1' :
        alert('anda memasukkan angka 1');
        break;
    case '2' :
        alert('anda memasukkan angka 2');
        break;
    case '3' :
        alert('anda memasukkan angka 3');
        break;
    default :
        alert('angka tidak sesuai dengan menu');
        break;
}
alert('selesai');