function problem2(cryptogram) {
  var answer;

  let arr = cryptogram.split("")
  let k = 0;
  let i = 0;
  for(i = 1; i < arr.length; i++){
    if(arr[i-1] != arr[i]){
      arr[k++] = arr[i-1];
    }
    else{
      while(i < arr.length && arr[i-1] == arr[i]){
        i++;
      }
    }
  }
  arr[k++] = arr[i-1];
  

  if(k != arr.length){
    return problem2(arr.substring(0,k));
  }
  
  answer = cryptogram;
  return answer;
}

module.exports = problem2;
