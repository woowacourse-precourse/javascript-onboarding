function Encryption(str) {
  let result = "";

  //한글자 이거나 공백이면 그대로 반환
  if (str.length < 2) {
    return str;
  }

  for (i = 0; i < str.length; i++) {
    //맨 처음 인덱스
    if (i == 0) {
      if (str[i] !== str[i + 1]) {
        result += str[i];
      }
    }
    // 마지막 인덱스
    else if (i == str.length - 1) {
      if (str[i] !== str[i - 1]) {
        result += str[i];
      }
    }
    //나머지 인덱스
    else {
      //앞, 뒤 문자가 달라야함
      if (str[i] !== str[i - 1] && str[i] !== str[i + 1]) {
        result += str[i];
      }
    }
  }

  return result;
}

function problem2(cryptogram) {
  var answer;

  let prev = "";
  answer = cryptogram;

  //값이 더 이상 변화가 없을 때까지 반복
  while (prev !== answer) {
    prev = answer;
    answer = Encryption(answer);
  }
  return answer;
}

module.exports = problem2;
