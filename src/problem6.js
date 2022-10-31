function problem6(forms) {
  // 유효한 유저들
  const validUsers = getValidUser(forms);

  let overlapNameCheck = {};
  let answer = new Set();


  // 반복문으로 유저를 확인한다.
  validUsers.forEach(([_, nickname]) => {
    // 닉네임을 반복문으로 돌아 확인한다.
    for(let i = 0; i < nickname.length-1; i++) {
      // 2글자씩 잘라준다.
      const nicknameSubText = nickname.substring(i, i + 2);
      // obj에 값을 더해준다. 없다면 1로 초기화 시켜준다.
      if(overlapNameCheck[nicknameSubText]) overlapNameCheck[nicknameSubText] ++;
      else overlapNameCheck[nicknameSubText] = 1;
    }
  });
  
  // 다시 한 번 반복문으로 유저를 확인한다.
  validUsers.forEach(([email, nickname]) => {
   for(let i = 0; i < nickname.length-1; i++) {
    // 2글자씩 잘라준다.
     const nicknameSubText = nickname.substring(i, i + 2);
     // 만약 obj에 값이 1 이상이라면 Set에 email을 넣어준다 (중복제거를 위해)
     if(overlapNameCheck[nicknameSubText] > 1) answer.add(email);
   }
 });

 // Set을 Array로 바꾼뒤 반환한다.
 answer = Array.from(answer);
 return answer.sort();
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
