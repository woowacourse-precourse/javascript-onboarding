/*
  기능 목록
  1. nickname를 key, email를 value로 Object를 만든다.
  2. 같은 글자가 연속적으로 포함되는 닉네임을 찾는다.
    2-1. nickname을 2글자씩 자른다.
    2-2. 자른 닉네임이 nickname list에 포함되어 있는지 확인한다.
    2-3. 포함되어 있으면, 같은 글자가 연속적으로 포함되는 닉네임으로 간주하고 반환한다.
  3. 닉네임을 key로 email을 value로 Object를 만든다.
  4. email로 list를 만든다.
  5. emailList의 중복을 제거하고 정렬한다.
*/

function problem6(forms) {
  var answer;
  return answer;
}

function buildInfoListObj(forms) {
  // nickname를 key, email를 value로 하는 Object를 만드는 함수
  const infoListObj = {};
  for (let form of forms) {
    const [email, nickname] = form;
    infoListObj[nickname] = email;
  }
  return infoListObj;
}

module.exports = problem6;
