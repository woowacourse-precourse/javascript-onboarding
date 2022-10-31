function problem2(cryptogram) {
  var answer;

  //한 글자씩 분리
  let characters = cryptogram.split("");

  let repeatedChar = true;
  while(repeatedChar) {
    let cnt = 0;

    //반복되는 문자 없애기
    length = characters.length;
    for(let i=0; i<length; i++) {
      if(characters[i] == characters[i+1]) {
          characters.splice(i,2);
          cnt += 1;
          break;
      }
    }

    if (cnt == 0) {
      repeatedChar = false;
    }
    else {
      repeatedChar = true;
    }
  }

  //문자열로 합치기
  answer = characters.join('');
  return answer;
}

module.exports = problem2;
