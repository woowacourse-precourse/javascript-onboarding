function problem6(forms) {
  var answer;
  return answer;
}

function checkNickname(arr) {
  const overlapedNickname = [];
  let nicknameSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (checkOverlap(arr[i][1], nicknameSet)) overlapedNickname.push(arr[i][0]);
    
    nicknameSet = sliceNickname(arr[i][1], nicknameSet);
  }

  return overlapedNickname;
}

function sliceNickname(nickname, overlapedSet) {
  for (let i = 2; i <= nickname.length; i++) {
    overlapedSet.add(nickname.slice(i-2, i));
  }

  return overlapedSet;
}

function checkOverlap(nickname, set) {
  for (let i = 2; i <= nickname.length; i++) {
    if (set.has(nickname.slice(i - 2, i))) return true; // 중복되는 문자열을 갖는다면 true 반환
  }

  return false;
}

function checkFirst(arr, set) {
  for (let i = 1; i < arr.length; i++) {
    if (checkOverlap(arr[i][1], set)) return true;
  }

  return false;
}

module.exports = problem6;
