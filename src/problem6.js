function problem6(forms) {
}

// 이메일, 닉네임 유효성 검사
const getValidUser = (users) => {
  // 길이 유효성 검사를 위한 상수 선언
  const EMAIL_MIN_LENGTH = 11;
  const EMAIL_MAX_LENGTH = 20;
  const NICKNAME_MIN_LENGTH = 1;
  const NICKNAME_MAX_LENGTH = 20;

  // 형식 검사를 위한 상수 선언
  const isEmailValid = /[a-z0-9]+@+email.com$/;
  const isNickNameKorean = /^[ㄱ-ㅎ|가-힣|]+$/;


  // 조건에 맞는 유저들만 반환
  return users.filter(([email, nickname]) => 
    (email.length >= EMAIL_MIN_LENGTH || email.length < EMAIL_MAX_LENGTH) &&
    (nickname.length >= NICKNAME_MIN_LENGTH || nickname.length < NICKNAME_MAX_LENGTH) &&
    (isEmailValid.test(email)) && (isNickNameKorean.test(nickname))
  );
}

module.exports = problem6;
