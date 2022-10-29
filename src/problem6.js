function problem6(forms) {
  var answer;
  return answer;
}

function sliceNickname(nickname) {
  const nicknameSet = new Set();
  for (let i = 2; i <= nickname.length; i++) {
    nicknameSet.add(nickname.slice(i-2, i));
  }

  return nicknameSet;
}

function checkOverlap(nickname, set) {
  for (let i = 2; i <= nickname.length; i++) {
    if (set.has(nickname.slice(i - 2, i))) return true; // 중복되는 문자열을 갖는다면 true 반환
  }

  return false;
}

module.exports = problem6;
