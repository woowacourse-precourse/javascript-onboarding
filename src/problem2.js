function removeDuplicate(cryptogram){
  let prev = cryptogram[0];
  let charArray = cryptogram.split('');

  // 1번째 문자를 지워, 2번째 문자부터 비교
  charArray.splice(0, 1);
  let temp = cryptogram[0];

  charArray.forEach(function(char){
    //이전의 문자와 비교하여 같으면 인접하다고 판단
    if (prev != char){
      temp += char;
    }
    else{
      temp = temp.slice(0,-1);
    }
    prev = char;
    
  })

  return temp;

}

function problem2(cryptogram) {
  // 인접한 중복 문자열을 제거한 후의 결과와 제거 전의 문자열이 같은 경우, 더이상의 중복이 없다고 판단한다. 
  var answer;

  let prev = cryptogram; // prev: 제거 전의 값
  let returnValue = 0;  // returnValue: 중복 문자열 제거한 후 

  do{
    if (returnValue != 0){
      prev = returnValue;
    }
    // 값이 비어있는 경우 break
    else if(returnValue === ''){
      break;
    }
    returnValue = removeDuplicate(prev);

  }while(returnValue != prev) 

  answer = returnValue;

  return answer;
}

module.exports = problem2;
