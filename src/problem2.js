// 문자열을 살피고 중복이면 삭제. (splice 이용))
function duplicateCheck(cryptogramArr) {
  let i = 0;
  
  // 더 이상 중복문자가 없을때까지 반복. (while문 이용)
  while (i != cryptogramArr.length) {
    if(cryptogramArr[i] === cryptogramArr[i+1]) (cryptogramArr.splice(i,2), i=0);
    else i++;
  }
  return cryptogramArr.join("");
}

function problem2(cryptogram) {
  let answer = duplicateCheck(cryptogram.split(""));
  return answer;
}

module.exports = problem2;
