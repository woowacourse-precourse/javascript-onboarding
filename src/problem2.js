function problem2(cryptogram) {
  //문자열을 배열로 변환
  let cryptogramArr = [...cryptogram];

  //인접한 중복 문자 제거
  function reduceCloseDup(cryptogramArr) {
    //이전 인덱스 or 이후 인덱스와 비교하여 같으면 배열에서 제외
    let newArr = cryptogramArr.filter(
      (v, i) => v !== cryptogramArr[i + 1] && v !== cryptogramArr[i - 1]
    );
    //배열에 중복 문자가 없다면 결과 반환
    if (!isDuplicate(cryptogramArr)) {
      return newArr;
    } else {
      //배열에 중복 문자가 아직 있으면 재귀적으로 실행
      return reduceCloseDup(newArr);
    }
  }

  //배열 아이템의 중복 여부 체크
  function isDuplicate(cryptogramArr) {
    const isDup = cryptogramArr.some(function (x) {
      return cryptogramArr.indexOf(x) !== cryptogramArr.lastIndexOf(x);
    });
    return isDup;
  }

  return reduceCloseDup(cryptogramArr).join("");
}

module.exports = problem2;
