function problem7(user, friends, visitors) {
  let answer;
  const relationMap = new Map();

  // 친구 관계 정리
  friends.forEach((friend) => {
    for (let i = 0; i < friend.length; i++) {
      if (!relationMap.has(friend[i])) {
        relationMap.set(friend[i], []);
      }
      relationMap.get(friend[i]).push(i == 0 ? friend[1] : friend[0]);
    }
  });

  return answer;
}

module.exports = problem7;
