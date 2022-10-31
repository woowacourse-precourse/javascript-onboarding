function deleteOverlap(cryptogram) {
  plain = "";
  temp = cryptogram;
  while (true) {
    for (let i = 0; i < temp.length; i++) {
      // 연속되는 문자의 개수를 2개 이상이므로 해당 위치의 앞 뒤로 확인
      if (temp[i] !== temp[i + 1] && temp[i] !== temp[i - 1]) {
        plain += temp[i];
      }
    }

    // 제거 후 값이 제거 전 값과 같으면 더 이상 없다는 의미로 반복문을 종료
    if (temp === plain) {
      break;
    }
    temp = plain;
    plain = "";
  }
  return plain;
}

function problem2(cryptogram) {
  var answer;
  answer = deleteOverlap(cryptogram);
  return answer;
}
module.exports = problem2;
