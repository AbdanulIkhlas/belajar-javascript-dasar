// Latihan membuat function
function menjumlahVolumeKubus(kubus1, kubus2){
    var jumlah;
    var volumeKubus1, volumeKubus2;
    
    volumeKubus1 = kubus1 * kubus1 * kubus1;
    volumeKubus2 = kubus2 * kubus2 * kubus2;
    jumlah = volumeKubus1 + volumeKubus2;

    return jumlah;
}

alert(menjumlahVolumeKubus(8,3));