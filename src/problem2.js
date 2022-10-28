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
  cryptogram = [...cryptogram];
  var left = 0;
  var right = 1;
  var check = 0; //chekc 변수를 사용하는 이유는 문자열에 중복이 없을때를 확인해주기 위함힙니다.

  // 길이가 1일때는 중복이 없기때문에 바로 반환시켜줍니다.
  if (cryptogram.length == 1) {
    return cryptogram[0];
  }

  while (true){
    // 문자열에 중복이 있을때 중복을 제거해줍니다.
    // 중복이 2개 이상일 수 도 있으니까 그 경우를 고려해줍니다.
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


  var answer = "";

  for (var el of cryptogram){
    answer += el;
  }


  return answer;
}


module.exports = problem2;
