// 같은 문자가 연속인 배열이 없는 경우를 탐지하는 함수
function checkNoneCon(n) {
  let result;
  for(let x=0; x < n.length-1; x++){
    if(n[x] !== n[x+1]){
      result = 'true';
    }
  }
  return result;
}
// 같은 문자가 연속으로 붙어있을 경우 탐지해 제거하는 함수
function deleteCon(arr){
  for(let i=0; i<arr.length-1; i++){
    if(arr[i] === arr[i+1]){
      arr.splice(i,2)
      break;
    }
  }
  return arr;
}

// solution 함수
function problem2(cryptogram) {
  let arrCryptogram = [...cryptogram];
  let answer;
  while(arrCryptogram.length > 1){
    if(checkNoneCon(arrCryptogram) === 'true'){
      break;
    }
    answer = deleteCon(arrCryptogram).join('');
  }
  if(arrCryptogram.length === 0 || arrCryptogram.length === 1){
    answer = arrCryptogram.join('');
  }

  return answer;
}

module.exports = problem2;
