function problem2(cryptogram) {

  // 문자열 cryptogram을 배열로 변환하여 담아줌
  let arr = [...cryptogram];

  // 배열을 탐색하여 연속하는 중복 문자들이 있을 경우 해당 문자들을 삭제
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i+1]) {
      arr.splice(i,2);
      i = -1;
    } 
  }

  // 삭제한 결과를 다시 문자열로 변환하여 리턴
  return arr.join('');
}

module.exports = problem2;
