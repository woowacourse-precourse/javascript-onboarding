function problem7(user, friends, visitors) {
  var answer = [];
  let regex = new RegExp(`^${user}$`);
  //regex.test('friends배열 요소')-> true면 로직 제외

  return answer;

  //우선 user와 친구면 로직에서 제외
  //기능요구: 점수 높은순 + 이름순 정렬 (최대 5명) + 추천 점수가 0인 경우 추천 x
  //제한사항:
  // 대상user는 길이 1~30의 문자열
  // friends는 길이 1~10000의 배열,
  // friends의 원소는 [아이디A, 아이디B] 꼴의 길이2배열, 아이디는 문자열, 길이 1~30
  // visitors는 길이 0~10000의 배열
  // 모든 id는 문자열, 알파벳소문자
  // 동일 친구관계 중복 ㄴ, 추천친구 없는 경우 return ;
}

module.exports = problem7;
