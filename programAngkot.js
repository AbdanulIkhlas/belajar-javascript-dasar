// ! PROGRAM PENGELOLAAN PENUMPANG ANGKOT
var penumpang = ["klaz", undefined, "gara"];

var tambahPenumpang = function(namaPenumpang, penumpang){
    var isiPenumpang = penumpang.length;
    if( isiPenumpang == 0 ){ // jika angkot kosong
        penumpang.push(namaPenumpang); // tambah penumpang di awal array
        return penumpang; // kembalikan isi array & keluar dari function
    } else { // jika angkot ada penumpang
        for(var j = 0; j < isiPenumpang; j++){
            if(namaPenumpang == penumpang[j]){ // jika ada nama yang sama
                console.log("Penumpang atas nama "+ namaPenumpang + " sudah ada di dalam angkot");
                return penumpang;
            }
        }
        for(var i = 0; i < isiPenumpang; i++){
            if(penumpang[i] == undefined){ //jika ada kursi kosong
                penumpang[i] = namaPenumpang;
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

var hapusPenumpang = function(namaPenumpang, penumpang){
    var isiPenumpang = penumpang.length;
    var tidakAdaPenumpang = false;
    // jika angkot kosong
    if(isiPenumpang == 0){
        console.log("Angkot masih kosong!!");
        return penumpang;
    }else{
        for(var i = 0; i < isiPenumpang; i++){
            // jika nama penumpang sesuai
            if(namaPenumpang == penumpang[i]){
                penumpang[i] = undefined; // mengubah menjadi undefined/alias penumpang turun
                return penumpang;
            }else{
                tidakAdaPenumpang = true;
            }
        }
        if(tidakAdaPenumpang){
            console.log("Penumpang atas nama " + namaPenumpang + " tidak ada dalam angkot");
            return penumpang;
        }
    }
    return penumpang;
}
