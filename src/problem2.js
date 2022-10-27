function problem2(cryptogram) {
  var answer;
  return answer;
}

module.exports = problem2;

function overlap(cryptogram){
  for(let i=0; i<cryptogram.length; i++){
    if(cryptogram[i]===cryptogram[i+1]){
      return true;
    }
  }
  return false;
}


let cryptogram="browoanoommnaon"

console.log(overlap(cryptogram))