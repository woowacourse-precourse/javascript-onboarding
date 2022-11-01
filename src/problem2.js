function problem2(cryptogram) {
  var answer;
  let arr = [...cryptogram]; //문자열 배열로 변환
  let flag;
  do{
  flag = 0;
  for(let i=1; i<arr.length; i++){
    if(arr[i]==arr[i-1]){
      arr.splice(i-1,2);
      i--;
      flag++;
    }
  }
  }while(flag != 0)
  answer = arr.join(""); //배열을 문자열로 변환
  return answer;
}

module.exports = problem2; 