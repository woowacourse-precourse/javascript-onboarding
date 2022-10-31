// 기능 추가 목록
// - nickname&email 담은 객체 생성
// - 닉네임 부분 문자열을 담은 객체 생성
// - 부분문자열의 길이를 결정하는 함수 생성
// - 부분문자열 객체 생성하는 함수 실행
// - 중복되는 닉네임 판별
// - 이메일 오름차순 정렬

function problem6(forms) {
  const nickNameEmail = {};

  forms.forEach((element) => {
    nickNameEmail[element[1]] = element[0];
  });
  return answer;
}

module.exports = problem6;
