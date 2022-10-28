function problem6(forms) {
  let answer;
  let testForms = [ ["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"] ];
  answer = start(forms);
  return answer;
}

function start(forms) {
  let result;
  check(forms);
  result = checkNicknameOverlap(forms);
  result.sort();
  return result;
}

function check(forms) {
  //예외처리의 경우
  //1. 크루가 1명보다 적거나 10000명 이상일 때
  //2. 이메일 전체 길이가 11자 미만 20자 이상일 때
  //3. 이메일 도메인이 @email.com이 아닐 때
  //4. 닉네임이 한글이 아닐 때
  //5. 닉네임의 길이가 1자보다 적거나 20자 이상일 때
  
  try {
    isRangeOver(forms); //크루가 몇명인지 확인
    isEmailLengthOver(forms); //이메일의 길이 확인
    isEmailDomainCorrect(forms); //이메일의 형식 확인
    isNicknameKorean(forms); //닉네임이 한글인지 확인
    isNicknameLengthOver(forms); //닉네임의 길이 확인
  } catch(e) {
    console.log(e);
  }
}

function isRangeOver(users) {
  if(users.length >= 10000 || users.length < 1)
    throw new Error('크루가 10000명을 초과하거나 1명 미만입니다 !');
}

function isEmailLengthOver(users) {
  for(let i = 0; i < users.length; i++) {
    if(users[i][0].length < 11 || users[i][0].length >= 20)
      throw new Error('이메일의 길이는 11자 이상 20자 미만이어야 합니다 !');
  }
}

function isEmailDomainCorrect(users) {
  const regExp = /@email.com$/;

  for(let i = 0; i < users.length; i++) {
    if(regExp.test(users[i][0]) === false)
      throw new Error('이메일의 도메인 형식은 반드시 @email.com 이어야 합니다 !');
  }
}

function isNicknameKorean(users) {
  //정규표현식을 사용하여 체크
  const regExp = /^[ㄱ-ㅎㅏ-ㅣ가-힣]+$/i; 

  for(let i = 0; i < users.length; i++) {
    if(regExp.test(users[i][1]) === false)
      throw new Error('닉네임이 한글이 아닙니다 ! ');
  }
}

function isNicknameLengthOver(users) {
  for(let i = 0; i < users.length; i++) {
    if(users[i][1].length < 1 || users[i][0].length >= 20)
      throw new Error('닉네임의 길이는 1자 이상 20자 미만이어야 합니다 !');
  }
}

//닉네임 중복을 체크하여 리턴하는 메소드
function checkNicknameOverlap(users) {
  //form은 이차원배열임, 
  //form[x][0]은 이메일, form[x][1]은 이름

  let splitArray = []; //닉네임을 쪼갠 결과물들 (중복 x)
  let overlapSplit = new Set(); //중복되는 부분들을 담은 set
  let overlapEmail = []; //중복되는 부분들을 포함한 nickname들

  //name을 순회하면서 닉네임을 분할한 결과와, 중복되는 부분들을 받아옴
  for(let i = 0; i < users[i][1].length; i++)
    [splitArray, overlapSplit] = splitNickname(users[i][1], splitArray, overlapSplit);
  
  //중복되는 부분을 가진 nickname들을 overlapNickname 배열에 추가
  for(let i = 0; i <= users[i][1].length; i++) {
    //set 순회
    overlapSplit.forEach((value) => {
      if(users[i][1].includes(value)) 
        overlapEmail.push(users[i][0]);
    })
  }

  //중복을 제거하여 리턴
  return arrayUnique(overlapEmail);
}

//닉네임을 split하는 메소드
function splitNickname(nickname, array, overlap) {
  let string; //분할한 부분들을 담는 변수

  for(let i = 0; i < nickname.length - 1; i++) {
    for(let j = i + 2; j <= nickname.length; j++) {
      string = nickname.substr(i, j);
      if(array.includes(string))
        overlap.add(string);
      else 
        array.push(string);
    }
  }

  return [array, overlap];
}

function arrayUnique(array) {
  return [...new Set(array)];
}

// problem6();
module.exports = problem6;