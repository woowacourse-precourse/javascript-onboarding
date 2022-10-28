function problem2(cryptogram) {
  //문자탐색을 위해 배열로 변환
  let cryptogramArr = [...cryptogram];
  
  let i = 0;
  //중복문자들 없앤 후에도 계속된 탐색위해 while문을 사용
  //다음글자와 같을경우 그 자리부터 다음 문자 지워주고 다시 탐색 맞지 않을시 다음글자 탐색
  while (i != cryptogramArr.length) {
    cryptogramArr[i] === cryptogramArr[i + 1] ? cryptogramArr.splice(i, 2) & (i = 0) : i++;
  }
  
  return cryptogramArr.join("");
  }

module.exports = problem2;
