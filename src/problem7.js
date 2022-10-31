function problem7(user, friends, visitors) {
  /**
   * 1. 이미 친구인 사람 + 본인 목록 생성 및 중복 제거 : alreadyFriendList
   * 2. friends 이중 배열 분해 후 alreadyFriendList에 있는 값들 제거
   * 3. 겹치는 갯수 세어서 객체로 생성 {'jongco':30, 'andole': 20}
   * 4. visitor도 위의 객체와 점수 합산 {'jongco':33, 'andole': 22}
   * 5. 점수 별로 나열 후 score가 0인 것 제외해서 배열에 이름 반환
   */
  const alreadyFriendList = [...new Set(friends.filter((friend) => friend.includes(user)).flat())];

  let answer = {};

  function recordScore(array, score) {
    return array.forEach((name) => (answer[name] = (answer[name] || 0) + score));
  }

  recordScore(friends.flat(), 10);
  recordScore(visitors, 1);

  answer = Object.entries(answer)
    .filter(([person, _]) => !alreadyFriendList.includes(person))
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
      }
      return b[1] - a[1];
    })
    .map((info) => info[1] !== 0 && info[0]);

  return answer;
}

module.exports = problem7;
