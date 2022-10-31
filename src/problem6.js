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
}

module.exports = problem6;
