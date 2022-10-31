const stringToArray = (str) => [...str];

const deleteOverride = (left, cryptogram) => {
  var cnt = 1;
  var tmp = left + 1;

  while (tmp < cryptogram.length) {
    if (cryptogram[left] === cryptogram[tmp]) {
      cnt += 1;
      tmp += 1;
    } else {
      break;
    }
  }
  cryptogram.splice(left, cnt);

  return cryptogram;
};

const isLeftAndRightIsSame = (cryptogram, left, right) =>{
  if (cryptogram[left] === cryptogram[right]) return 1;
  return 0;
} 

function problem2(cryptogram) {
  var answer = "";
  var left = 0;
  var right = 1;
  var check = 0; //chekc 변수를 사용하는 이유는 문자열에 중복이 없을때를 확인해주기 위함힙니다.

  cryptogram = stringToArray(cryptogram);

  // 길이가 1일때는 중복이 없기때문에 바로 반환시켜줍니다.
  if (cryptogram.length == 1) return cryptogram[0];

  while (true) {
    // 중복이 2개 이상인 경우도 고려해줍니다.
    if (isLeftAndRightIsSame(cryptogram, left, right)) {
      cryptogram = deleteOverride(left, cryptogram);
      check = 1;
      // 중복을 제거하고 제거된 위치로 이동.
      left -= 1;
      right -= 1;
    }

    left += 1;
    right += 1;

    if ((check == 0 && right >= cryptogram.length) || cryptogram.length == 0) {
      break;
    }
    if (right >= cryptogram.length) {
      left = 0;
      right = 1;
      check = 0;
    }
  }

  //남은 cryptogram에서 각 문자들을 뽑아내어 답을 만들어냅니다.
  for (var el of cryptogram) {
    answer += el;
  }

  return answer;
}

module.exports = problem2;
