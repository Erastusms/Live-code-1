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
  let result = {
    unique: [],
    duplicate: [],
  };
  let tempObj = {};
  for (let i = 0; i < convertToArray.length; i++) {
    if (tempObj[convertToArray[i]] === undefined) {
      tempObj[convertToArray[i]] = 1;
    } else {
      tempObj[convertToArray[i]] += 1;
    }
  }

  for (let key in tempObj) {
    if (tempObj[key] > 1) {
      result.duplicate.push(key);
    } else {
      result.unique.push(key);
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
