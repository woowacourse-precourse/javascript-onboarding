function problem2(cryptogram) {
  //var answer;
  let cnt = 0;
  let arr = cryptogram.split("");

  for(let i=0; i < arr.length; i++){
    if(arr[i] == arr[i+1]){
      cnt = 1;
      let j = i+1;
      while(arr[j] == arr[j+1]){
        cnt++;
        j++;
      }
      arr.splice(i, cnt+1);
      cnt = 0;
      i = -1;
    }
  }
  arr = arr.join(""); //배열->문자열
  return arr;
  //return answer;
}

module.exports = problem2;
