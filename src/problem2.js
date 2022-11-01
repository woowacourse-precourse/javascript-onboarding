const removeDuplicate = (cryptogram) => {
  let strArr = [...cryptogram];
  let answer = [];
  for (let i = 0; i < cryptogram.length; i++) {
    if (strArr[i] == strArr[i + 1]) {
      i = i + 1; //현재 문자와 다음 문자가 같으면 다음 문자까지 answer 삽입 x
    } else {
      if (strArr[i] == strArr[i - 1])
        //연속한 중복 문자가 3개 이상일 경우를 위해 이전 문자와 비교
        continue;
      else {
        if (strArr[i] == answer[answer.length - 1])
          answer = answer.slice(0, -1); //answer 마지막과 같으면 삭제
        else answer.push(strArr[i]); //answer에 현재 문자 삽입
      }
    }
  }
  return answer.join("");
};

function problem2(cryptogram) {
  var answer;

  answer = removeDuplicate(cryptogram);

  return answer;
}

module.exports = problem2;
