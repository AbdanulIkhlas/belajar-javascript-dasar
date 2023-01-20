/*
! Latihan rekursif
*/

// function rekursif(n){
//     if (n === 0){ // basecase
//         return;
//     }

//     console.log(n);
//     return rekursif(n-1);
// }

// rekursif(10);


/*
! faktorial
*/
function faktorial(n){
    if(n === 0) return 1;
    return n * faktorial(n-1);
}

console.log(faktorial(5));


