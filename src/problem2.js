function problem2(cryptogram) {
  var answer = [cryptogram[0]]; 

  // 배열의 인덱스 순회
  for (var i = 1; i < cryptogram.length; i++) { 
    // top 지정 
    var top = answer[answer.length - 1]; 
    
    //비교하며 삽입,제거
    if (top !== cryptogram[i]) { 
      answer.push(cryptogram[i]);
    }
    else if (top == cryptogram[i]) {
      answer.pop(cryptogram[i]);
    }
  }
  // 문자열로 변경
  answer = answer.join(''); 
  return answer;
}


module.exports = problem2;
