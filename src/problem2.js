function problem2(cryptogram) {
  var answer = [cryptogram[0]]; // cryptogram을 배열로 입력 받아 answer에 대입
  for (var i = 1; i < cryptogram.length; i++) { // 배열의 인덱스를 변경하며 비교
    var top = answer[answer.length - 1]; //stack의 top을 지정 및 변경
    if (top !== cryptogram[i]) { // stack내의 top에 위치한 내역과 
      answer.push(cryptogram[i]);
    }
    else if (top == cryptogram[i]) {
      answer.pop(cryptogram[i]);
    }
  }
  return answer;
}


module.exports = problem2;
