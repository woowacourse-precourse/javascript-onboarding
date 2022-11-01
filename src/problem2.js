
function isCheck(input){
  let check = 1;
  for(let i=0; i<input.length-1; i++){
    if(input.charAt(i) == input.charAt(i+1)){
      check = 0;
    }
  }
  return check;
}

function removeDupli(input){
  let idx;
  for(let i=1; i<input.length; i++){
    if(input.charAt(i-1) == input.charAt(i)){
      idx = i
      input = input.substring(0, i-1) + input.substring(i+1, input.length);
    }
  }
  return input;
}


function problem2(cryptogram) {
  var answer;
  while(!isCheck(cryptogram)){
    cryptogram = removeDupli(cryptogram);
  }
  answer = cryptogram;
  return answer;
}

module.exports = problem2;
