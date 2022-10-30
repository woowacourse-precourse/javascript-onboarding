const stringToArray = (str) => [...str];

const deleteOverride = (left, cryptogram) => {
  var cnt = 1;
  var tmp = left + 1;

  while (tmp < cryptogram.length){
    if (cryptogram[left] === cryptogram[tmp]){
      cnt += 1;
      tmp += 1;
    }
    else{
      break
    }
  }
  cryptogram.splice(left, cnt);

  return cryptogram;

}

function problem2(cryptogram) {
  var answer = "";
  cryptogram = stringToArray(cryptogram);


  // 길이가 1일때는 중복이 없기때문에 바로 반환시켜줍니다.
  if (cryptogram.length == 1) return cryptogram[0];


  while (true){
    // 중복이 2개 이상인 경우도 고려해줍니다.
    if (cryptogram[left] === cryptogram[right]){
      cryptogram = deleteOverride(left, cryptogram);
      check = 1;
      // 중복을 제거하고 제거된 위치
      left -= 1;
      right -= 1;
    }

    left += 1;
    right += 1;

    if ((check == 0 && right >= cryptogram.length) || cryptogram.length == 0){
      break;
    }
    if (right >= cryptogram.length){
      left = 0;
      right = 1;
      check = 0;
    }
  }

  return answer;
}

console.log(problem2("a"));
module.exports = problem2;


