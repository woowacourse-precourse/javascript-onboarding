function problem2(cryptogram) {
  var answer;
  let array = cryptogram.split("");

  for(let i = 0; i <array.length; i++){
    if(array[i]===array[i+1]){
      array.splice(i, 2);
      i = -1;
    }
  }
  answer = array.join("");
  return answer;
}

module.exports = problem2;
