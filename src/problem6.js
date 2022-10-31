function firstSlice(nameSlice, allSlices) {
  if (!allSlices.has(nameSlice))
    //이전에 없던 첫 중복 문자열이라면
    allSlices.set(nameSlice, 0); //중복 문자열 목록(allSlices)에 새로 추가한다.
}

function addCount(nameSlice, allSlices) {
  let count = allSlices.get(nameSlice); //특정 중복 문자열(nameSlice)에 대한 출현 빈도 수를
  allSlices.set(nameSlice, count + 1); //1만큼 증가시킨다.
}

function getSlices(forms, allSlices, index) {
  let crewName = forms[index][1]; //크루의 목록에서 index + 1번째 크루의 닉네임을 가져온다.
  for (let i = 0; i < crewName.length - 1; i++) {
    //크루의 닉네임에서 가능한만큼 반복문을 수행하며
    let nameSlice = crewName.substr(i, 2); //2글자 크기의 연속되는 중복 문자열을 추출한다.
    firstSlice(nameSlice, allSlices); //처음 등장한 중복 문자열을 처리한다.
    addCount(nameSlice, allSlices); //해당 중복 문자열에 대해 출현 빈도 수 +1을 한다.
  }
}

function problem6(forms) {
  var answer;
  let result = new Set(); //같은 글자가 연속적으로 포함되는 닉네임을 작성한 지원자의 이메일 목록
  let allSlices = new Map(); //크루들의 닉네임 내에 존재하는 연속적인 문자열 목록(문자열, 출현 빈도 수)

  return answer;
}

module.exports = problem6;
