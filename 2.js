/**
 * UNIQUE DUPLICATE FINDER
 * =======================
 * 
 * uniqueDuplicateFinder adalah sebuah function yang menerima satu parameter berupa kalimat. 
 * Function akan memberikan return object yang berisi setiap kumpulan kata-kata unik dan duplicate yang ditemukan dalam kalimat.
 * 
 * Contoh:
 *   - Input  : uniqueFinder('saya dan SAYA suka makan nasi'))
 *   - Output : {
 *       unique: [ 'dan', 'suka', 'makan', 'nasi' ],
 *       duplicate: [ 'saya' ]
 *     }
 * 
 * RULES :
 *   - Kerjakan tanpa built-in function kecuali .push(), Number(), String(), .toString(), .toLowerCase(), .toUpperCase().
 */

 function stringToArray(str){
    // code 
}

console.log(stringToArray('saya dan SAYA suka makan nasi'))
// ["saya", "dan", "saya", "suka", "makan", "nasi"]

function uniqueDuplicateFinder(str) {
  // Your code here
}

// Test Case
console.log(uniqueDuplicateFinder('saya dan SAYA suka makan nasi'));
// {
//   unique: ['dan', 'suka', 'makan', 'nasi'],
//   duplicate: ['saya']
// }


console.log(uniqueDuplicateFinder('dia percaya aku percaya'));
// {
//   unique: ['dia', 'aku'],
//   duplicate: ['percaya']
// }

module.exports = uniqueDuplicateFinder;