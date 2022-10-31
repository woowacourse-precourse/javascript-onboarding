// < 기능 목록 >
// 1. 같은 글자가 연속적으로 포함되는 크루들을 골라내는 기능
//    [예외처리] 자기 자신과 비교되는 경우
// 2. 이메일 리스트를 오름차순으로 정렬하고 중복은 제거하는 기능

function problem6(forms) {
  var answer = [];

  for(var f of forms) {
    for(var i = 0; i < f[1].length-1; i++) {
      var word = f[1].charAt(i) + f[1].charAt(i+1); // 두글자씩 뽑아서 word
      // 다른 크루들과 비교
      for(var p of forms) {
        if(!(p === f) && p[1].search(word) != -1) 
          answer.push(p[0]); // word를 포함할 경우, 이메일을 추가
      }
    }
  }

  // 이메일 중복 제거 및 정렬
  answer = answer.sort().filter(function(item, idx, array) {
      return !idx || item != array[idx - 1];
    });
  return answer;
}

module.exports = problem6;
