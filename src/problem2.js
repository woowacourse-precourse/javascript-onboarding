
function problem2(cryptogram) {
  var answer;
  var cryptogramWord = cryptogram;
  var cryptogramArray = cryptogramWord.split("");
  answer = noCombination(cryptogramArray);
  return answer;
}

function noCombination(arr){
  var answer = arr;
  for(let i=0;i<arr.length;i++){
    if(arr[i]==arr[i+1]){
     answer.splice(i);
    }
}
  answer = answer.join("");
  return answer;

}


module.exports = problem2;
