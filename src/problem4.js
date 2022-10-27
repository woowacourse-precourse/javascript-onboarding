function problem4(word) {
  function changeStr(letter) {
    let num = 0;
    if (letter !== letter.toUpperCase()){
      num = 25 - (letter.charCodeAt(0) - 'a'.charCodeAt(0)) * 2;
    }else{
      num = 25 - (letter.charCodeAt(0) - 'A'.charCodeAt(0)) * 2;
    }
    return String.fromCharCode(letter.charCodeAt(0) + num); 
  }
}

module.exports = problem4;
