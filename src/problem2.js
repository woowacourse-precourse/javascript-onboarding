function problem2(cryptogram) {
  var answer;

  var idx = 0; //중복문자를 확인하고자 하는 문자열 인덱스
  var isComplete = 0; //반복문 종료 확인

  function overlapDelete(str, i) {
    //중복문자 제거를 위한 함수
    str = str.slice(0, i) + str.slice(i + 2); //중복 문자 제거 후 문자열

    var set = new Set(Array.from(str)); //중복을 허용하지 않은 값을 모아놓은 객체로 변환
    if (str.length !== set.size) {
      //문자열에 중복문자가 있는지 검사
      idx = -1;
      cryptogram = str;
    } else {
      isComplete = 1;
      answer = str;
    }
  }

  do {
    var overlapIndex = cryptogram.indexOf(cryptogram[idx], idx + 1);
    overlapIndex - idx === 1 ? overlapDelete(cryptogram, idx) : ""; //연속된 문자가 중복된 경우 중복문자 제거 진행

    idx < 0 ? (idx = 0) : idx++;
  } while (isComplete !== 1);

  return answer;
}

module.exports = problem2;
