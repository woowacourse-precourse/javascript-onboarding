function problem2(cryptogram) {
  var answer;

  //제한 사항
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
  
  //중복 문자 찾아서 빈문자열로 바꾸기
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

  console.log(temp);

  return answer;
}

//테스트 케이스 #1
problem2('browoanoommnaon');

//테스트 케이스 #2
problem2('zyelleyz');

module.exports = problem2;
