function problem6(forms) {
  var answer;
  if (!validRange(forms)) throw new Error("크루의 범위를 벗어났습니다.");
  
  answer = changeSetToArray(checkNickname(forms)); // checkNickname 메소드의 return은 Set이므로 Array로 변환
  return answer;
}


// 닉네임을 연속된 두 글자로 나누어 집합으로 만든 뒤, 중복 여부를 검사하는 메소드
function checkNickname(arr) {
  const overlapedNickname = new Set();
  let nicknameSet = new Set();
  let firstNickname = new Set(); // 첫 번째 닉네임을 확인하기 위해 첫 번째 닉네임을 두 글자씩 나누어 집합으로 저장

  for (let i = 0; i < arr.length; i++) {
    if (!validEmail(arr[i][0])) throw new Error("잘못된 이메일이 포함되어 있습니다.");
    if (!validNickname(arr[i][1])) throw new Error("잘못된 닉네임이 포함되어 있습니다.");
    if (checkOverlap(arr[i][1], nicknameSet)) overlapedNickname.add(arr[i][0]);
    
    nicknameSet = sliceNickname(arr[i][1], nicknameSet);
  }

  firstNickname = sliceNickname(arr[0][1], firstNickname);
  if (checkFirst) overlapedNickname.add(arr[0][0]); // 첫번째 닉네임에 중복되는 부분이 있다면 정답 집합에 추가

  return overlapedNickname;
}
// 닉네임을 두 글자씩 잘라 중복 검사용 집합에 저장하는 메소드
function sliceNickname(nickname, overlapedSet) {
  for (let i = 2; i <= nickname.length; i++) {
    overlapedSet.add(nickname.slice(i-2, i));
  }

  return overlapedSet;
}
// 중복 검사용 집합과 비교하여 중복 닉네임이 있는지 검사하는 메소드
function checkOverlap(nickname, set) {
  for (let i = 2; i <= nickname.length; i++) {
    if (set.has(nickname.slice(i - 2, i))) return true; // 중복되는 문자열을 갖는다면 true 반환
  }

  return false;
}


// 첫번째 닉네임을 확인하기 위한 메소드
function checkFirst(arr, set) {
  for (let i = 1; i < arr.length; i++) {
    if (checkOverlap(arr[i][1], set)) return true;
  }

  return false;
}


// 중복 제거용 집합을 배열로 변환하는 메소드
function changeSetToArray(set) {
  const arr = Array.from(set);

  return arr.sort();
}


// 예외 처리
function validRange(arr) {
  return 1 <= arr.length && arr.length <= 10000;
}

function validEmail(email) {
  const reg = /^[a-zA-Z0-9]+@email.com$/;

  return reg.test(email) && 11 <= email.length && email.length < 20;
}

function validNickname(nickname) {
  const reg = /^[ㄱ-ㅎ가-힣]+$/;

  return reg.test(nickname) && 1 <= nickname.length && nickname.length < 20;
}

module.exports = problem6;
