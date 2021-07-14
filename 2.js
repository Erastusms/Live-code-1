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

function stringToArray(str) {
  // code
  let newStr = str.toLowerCase();
  let result = [];
  let temp = "";
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== " ") {
      temp = temp + newStr[i];
    } else {
      result.push(temp);
      temp = "";
    }
    if (i === newStr.length - 1) {
      result.push(temp);
      temp = "";
    }
  }
  return result;
}

console.log(stringToArray("saya dan SAYA suka makan nasi"));
// ["saya", "dan", "saya", "suka", "makan", "nasi"]

function uniqueDuplicateFinder(str) {
  // Your code here
  let convertToArray = stringToArray(str);
  let result = [];
  for (let i = 0; i < convertToArray.length; i++) {
    let temp = convertToArray[i];
    if (!result[temp]) {
      result[temp] = "Unique";
    } else {
      result[temp] = "duplicate";
    }
  }
  return result;
}

// Test Case
console.log(uniqueDuplicateFinder("saya dan SAYA suka makan nasi"));
// {
//   unique: ['dan', 'suka', 'makan', 'nasi'],
//   duplicate: ['saya']
// }

console.log(uniqueDuplicateFinder("dia percaya aku percaya"));
// {
//   unique: ['dia', 'aku'],
//   duplicate: ['percaya']
// }

module.exports = uniqueDuplicateFinder;