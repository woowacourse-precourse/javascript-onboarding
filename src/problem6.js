function problem6(forms) {
  var answer;
  return answer;
}

// 문제 6번: Hash 풀이
// 1. 자료구조 Map, Set 생성
//   - Map: 2글자로 닉네임의 이름과 해당 이름의 개수를 저장
//   - Set: 중복되는 Email 제거
// 2. 닉네임 중복 여부 판별
//    2.1. forms를 loop돌리면서 각 닉네임마다 2글자씩 substring 후 Map에 넣기
//    2.2. Map을 이용해 forms를 loop돌리면서 해당 유저의 닉네임의 substring이 Map에 2개 이상 있는지 판별
//    2.3. 1개 이하 -> continue, 2개 이상 -> Set에 해당 유저의 이메일 add
// 3. @return 중복된 유저의 email이 담긴 Set을 List로 변환

module.exports = problem6;
