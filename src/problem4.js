function problem4(word) {
  let result = '';
  function changeStr(letter) {
    const regex = /[a-zA-Z]/;
    if (!(regex.test(letter))) return letter;

    let num = 0;
    if (letter !== letter.toUpperCase()){
      num = 25 - (letter.charCodeAt(0) - 'a'.charCodeAt(0)) * 2;
    }else{
      num = 25 - (letter.charCodeAt(0) - 'A'.charCodeAt(0)) * 2;
    }
    return String.fromCharCode(letter.charCodeAt(0) + num); 
  }
  for(let alphabet of word){
    result += changeStr(alphabet);
  }
  return result;
}

module.exports = problem4;
