function problem2(cryptogram) {
  var answer =[];
  const arr = Array.isArray(cryptogram);

  answer += arr[0];

  for(let i=1; i<arr.length; i++){
    if(arr[i-1] !== arr[i]){
      answer += arr[i];
    }
  }

  return answer;
}

problem2();

module.exports = problem2;
