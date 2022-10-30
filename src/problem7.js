function problem7(user, friends, visitors) {
  let answer = [];
  const relationships = {};

  friends.forEach((friend) => {
    //사용자간의 관계를 초기화한다.
    if (!Object.keys(relationships).includes(friend[0]))
      relationships[friend[0]] = [];
    if (!Object.keys(relationships).includes(friend[1]))
      relationships[friend[1]] = [];
    relationships[friend[0]].push(friend[1]);
    relationships[friend[1]].push(friend[0]);
  });

  return answer;
}

module.exports = problem7;
