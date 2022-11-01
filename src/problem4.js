function problem4(word) {
  let answer = frogChanger(word);
  return answer;
}

// Change the frog's algorithm to the word
function frogChanger(word) {
  let result ="";
  let [A_ASCII, Z_ASCII, a_ASCII, z_ASCII , AtoZ, atoz] = [65, 90, 97, 122, 155, 219];
  let wordList = word.split("");
  for(let char of wordList){

    const charCode= char.charCodeAt(0);
    if(A_ASCII<=charCode && charCode <= Z_ASCII) {
      result += String.fromCharCode(AtoZ-charCode);
    } else if(a_ASCII<=charCode && charCode <= z_ASCII) {
      result += String.fromCharCode(atoz-charCode);
    }else {
      result += char;
    }
  }
  return result;
}

module.exports = problem4;