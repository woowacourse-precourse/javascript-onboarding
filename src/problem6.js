// 1. [x] key: value | 닉네임 : email 형식의 map 만들기
// 2. 같은 글자가 연속으로 포함되는 닉네임을 판별하는 로직
//    2.1 [x] key를 가져와서 두글자씩 자른다
//    2.2 [x] 다른 key들이 해당 글자를 포함하는지 검사한다 (함수 작성)
//    2.3 [x] 해당 글자를 포함하면 중복되는 이름을 추출
//    2.4 [x] 이름대로 이메일을 넣음
//    2.5 [x] 이름(key)값으로 map에서 삭제 
// 3. answer를 정렬

// 2.3 중복이름 추출
const checkOverlap = (name, users) => {
  const overlapName = [];

  for (let user of users) {
    if (user.match(name)) {
      overlapName.push(user);
    } else {
      continue;
    }
  }

  return overlapName.length === 1 ? [] : overlapName;
}

const addEmail = (names, res, userMap) => {
  if (!names.length) return;

  for (let name of names) {
    res.push(userMap[name]);
  }
}

const deleteName = (names, userMap) => {
  if (!names.length) return;
  
  for (let name of names) {
    delete userMap[name];
  }
}

function problem6(forms) {
  const userMap = {}; // name:email 형식의 이름 저장
  const overlapNames = []; // 중복되는 문자들의 이름을 저장
  const answer = [];
  // 1. name: email 형식의 map 만들기
  for (let user of forms) {
    const [email, name] = [user[0], user[1]];
    userMap[name] = email;
  }

  // 2. 중복 문자 판별
  for (let key of Object.keys(userMap)) {
    // 2.1 name을 두글자씩 잘라서 비교
    for (let i=0; i<key.length-1; i++) {
      // 2.2 두글자씩 잘라서 key들과 일치하는 부분이 있는지 검사
      // 2.3 중복 이름 확인 함수 호출 
      const overlapUser = checkOverlap(key.slice(i, i+2), Object.keys(userMap));
      // 2.4 name대로 email값 저장하기
      addEmail(overlapUser, answer, userMap);
      // 2.5 이미 중복된 이름들은 map에서 정보삭제
      deleteName(overlapUser, userMap);
    }

  }
  // 3.answer 정렬
  return answer.sort();
}

module.exports = problem6;