function problem2(cryptogram) {
  cryptogram = duplicateStr(cryptogram)
  return cryptogram
}

module.exports = problem2;

// 작동 프로그램 = 연속하는 중복 문자들을 삭제하는 프로그램
// 같은 값을 가진 인덱스를 찾는 것이 아니라
// 연속된 인덱스의 값이 같은 값인지 찾아야 함.

// 1. 두개의 연속된 문자를 파악하여 제거하는 기능.
function duplicateStr(str){
  let answer;
  let strArr = str.split('')
  let newArr = []

  for(i=0; i<strArr.length; i++){
    if(newArr.length === 0) newArr.push(strArr[i])
    else if (newArr[newArr.length - 1] == strArr[i]) {
      newArr.pop();
    } else {
      newArr.push(strArr[i]);
    }
  }
     answer= newArr.join('')
     return answer
}

console.log(problem2("browoanoommnaon"))


// 깨달은 것