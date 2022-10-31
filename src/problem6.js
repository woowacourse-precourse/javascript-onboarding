function firstSlice(nameSlice, allSlices) {
  if (!allSlices.has(nameSlice))
    //이전에 없던 첫 중복 문자열이라면
    allSlices.set(nameSlice, 0); //중복 문자열 목록(allSlices)에 새로 추가한다.
}

function problem6(forms) {
  var answer;
  let result = new Set(); //같은 글자가 연속적으로 포함되는 닉네임을 작성한 지원자의 이메일 목록
  let allSlices = new Map(); //크루들의 닉네임 내에 존재하는 연속적인 문자열 목록(문자열, 출현 빈도 수)

  return answer;
}

module.exports = problem6;
