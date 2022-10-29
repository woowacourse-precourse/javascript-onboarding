function problem2(cryptogram) {
  var answer;

  if(cryptogram.length < 1 || cryptogram.length > 1000){
   return -1; 
  }
  let isLower = cryptogram.toLowerCase();
  if(cryptogram != isLower){
    return -1;
  }

  //문자열 배열로 변경
  let arr = [...cryptogram];
  let temp;
  
  for(let j=0; j<cryptogram.length -1; j++)
  {
    for(let i = 0; i < cryptogram.length-1; i++){
      if(arr[i]==arr[i+1]){
        arr[i] = "";
        arr[i+1] = "";
      }
    }
    temp = arr.toString();
    temp = temp.replace(/,/g,'');
    arr = [...temp];
  }

  answer = temp;

  return answer;
}

module.exports = problem2;
