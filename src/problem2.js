
function problem2(cryptogram) {
  var answer;
  var cryptogramWord = cryptogram;
  var cryptogramArray = cryptogramWord.split("");
  var prev ="";
  answer = noCombination(cryptogramArray);
  while(prev!==answer){
    prev=answer;
    answer=noCombination(answer);
  }
  return answer;
}

function noCombination(arr){
  var answer = [];
  var newCrypto = [];
  for(let i=0;i<arr.length;i++){
    if(arr[i]!==arr[i-1]){
      newCrypto.push(arr[i])
    }
    else{
      newCrypto.pop()
    }
}
  answer = newCrypto.join("");
  return answer;

}

console.log(problem2("zyelleyz"))


module.exports = problem2;
