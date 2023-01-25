// ! LATIHAN PENGELOLAAN ANGKOT DENGAN OBJEK
// * membuat object angkot
function Angkot(sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        if(this.penumpang.length === 0 ){ // jika angkot kosong
            this.penumpang.push(namaPenumpang); // tambah penumpang di awal array
        } else { // jika angkot ada penumpang
            for(var j = 0; j < this.penumpang.length; j++){
                if(namaPenumpang == this.penumpang[j]){ // jika ada nama yang sama
                    console.log("Penumpang atas nama "+ namaPenumpang + " sudah ada di dalam angkot");
                    return this.penumpang;
                }
            }
            for(var i = 0; i < this.penumpang.length; i++){
                if(this.penumpang[i] == undefined){ //jika ada kursi kosong
                    this.penumpang[i] = namaPenumpang;
                    return this.penumpang;
                }
                
                if(i == this.penumpang.length - 1){
                    this.penumpang.push(namaPenumpang);
                    return this.penumpang;
                }
            }
        }
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        var tidakAdaPenumpang = false;
        // jika angkot kosong
        if(this.penumpang.length === 0){
            console.log("Angkot masih kosong!!");
        }else{
            for(var i = 0; i < this.penumpang.length; i++){
                // jika nama penumpang sesuai
                if(namaPenumpang == this.penumpang[i]){
                    this.penumpang[i] = undefined;
                    this.kas += bayar;
                    return this.penumpang;
                }else{
                    tidakAdaPenumpang = true;
                }
            }
            if(tidakAdaPenumpang){
                console.log("Penumpang atas nama " + namaPenumpang + " tidak ada dalam angkot");
            }
        }
        return penumpang;

    }

}

var angkot1 = new Angkot('Klaz', ['Yogyakarta', 'Solo'], [], 0);
var angkot2 = new Angkot('Gara', ['Sleman', 'Klaten'], [], 0);
