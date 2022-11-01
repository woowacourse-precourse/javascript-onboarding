function problem1(pobi, crong) {
  var answer; //return 값
  var pobiResult = []; //pobi의 페이지를 더하거나 곱한 값의 배열
  var crongResult = []; //crong의 페이지를 더하거나 곱한 값의 배열

  var pobiMax = 0; //pobi의 값 중 최대값
  var crongMax = 0; //crong의 값 중 최대값

  //제한사항 중 왼쪽페이지와 오른쪽 페이지가 순서대로 들어있지 않은 경우를 확인
  if (pobi[1] - pobi[0] != 1 || crong[1] - crong[0] != 1) {
    answer = -1;
  } else {
    for (var i = 0; i < 2; i++) {
      //pobi, crong의 길이는 2이기 때문에 i<2로 설정
      var pobiPlusResult = 0; //페이지 번호의 각 자리 숫자의 합의 결과값
      var pobiMultiResult = 1; //페이지 번호의 각 자리 숫자의 곱의 결과값
      var crongPlusResult = 0;
      var crongMultiResult = 1;

      var pobiStr = String(pobi[i]); //페이지 번호를 string으로 형변환
      var pobiSplit = Array.from(pobiStr); //pobiStr값을 문자 단위로 쪼개어 배열로 저장
      var crongStr = String(crong[i]);
      var crongSplit = Array.from(crongStr);

      for (var j = 0; j < pobiSplit.length; j++) {
        pobiPlusResult = pobiPlusResult + parseInt(pobiSplit[j]);
        pobiMultiResult = pobiMultiResult * parseInt(pobiSplit[j]);
      }
      pobiResult.push(pobiPlusResult);
      pobiResult.push(pobiMultiResult);

      for (var j = 0; j < crongSplit.length; j++) {
        crongPlusResult = crongPlusResult + parseInt(crongSplit[j]);
        crongMultiResult = crongMultiResult * parseInt(crongSplit[j]);
      }
      crongResult.push(crongPlusResult);
      crongResult.push(crongMultiResult);
    }

    pobiMax = Math.max.apply(null, pobiResult);
    crongMax = Math.max.apply(null, crongResult);

    if (pobiMax > crongMax) {
      answer = 1;
    } else if (pobi < crongMax) {
      answer = 2;
    } else {
      answer = 0;
    }
  }

  return answer;
}

module.exports = problem1;
