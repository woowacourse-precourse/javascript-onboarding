function problem2(cryptogram) {
  var answer;
  answer = removeDuplChars(cryptogram);
  console.log(answer);
  return answer;
}

function removeDuplChars(cryptogram) {
  //한 단어에서 걸쳐 중복되는 문자열들을 찾아서 제거한다
  let before = -1;    //moving index
  let now = 0;        //moving index
  let dup_char = "";  //중복되는 문자를 임시 저장
  for (let i = 0; i <= cryptogram.length; i++) {
    now = i;
    if (cryptogram[before] === cryptogram[now]) {
      //겹치는 경우
      dup_char = cryptogram[now];
      continue;
    } else if (dup_char !== "") {
      //이전까지 겹쳤던 case -> 문자열 제거
      cryptogram = cryptogram.slice(0, before) + cryptogram.slice(now);
      dup_char = "";
      i = before;
    } else {
      //이전에도 안겹쳤던 case
      before = now;
    }
  }
  return cryptogram;
}

module.exports = problem2;

problem2("browoanoommnaon");