// ! PROGRAM PENGELOLAAN PENUMPANG ANGKOT
var penumpang = ["klaz", undefined, "gara"];

var tambahPenumpang = function(namaPenumpang, penumpang){
    var isiPenumpang = penumpang.length;
    if( isiPenumpang == 0 ){ // jika angkot kosong
        penumpang.push(namaPenumpang); // tambah penumpang di awal array
        return penumpang; // kembalikan isi array & keluar dari function
    } else { // jika angkot ada penumpang
        for(var i = 0; i < isiPenumpang; i++){
            if(penumpang[i] == undefined){ //jika ada kursi kosong
                penumpang[i] = namaPenumpang;
                return penumpang;
            }
            if(namaPenumpang == penumpang[i]){ // jika ada nama yang sama
                console.log("Penumpang atas nama "+ namaPenumpang + " sudah ada di dalam angkot");
                return penumpang;
            }
            if(i == isiPenumpang - 1){
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
    return penumpang;
}


