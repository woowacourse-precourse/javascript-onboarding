function problem4(word) {
  let answer = frogChanger(word);
  return answer;
}

function frogChanger(word) {
  let wordList = word.split("");
  let result ="";

  for(let char of wordList){
    const charCode= char.charCodeAt(0);
    if(charCode  >= 65 && charCode <= 90) {
      result += String.fromCharCode(155-charCode);
    } else if(charCode>= 97 && charCode <= 122) {
      result += String.fromCharCode(219-charCode);
    }else {
      result += char;
    }
  }

  return result;

}

module.exports = problem4;