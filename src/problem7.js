function problem7(user, friends, visitors) {
  let answer;
  const userFriends = []; // user의 친구들
  const max = friends.length;
  const score = {}; // 점수를 담을 객체
  const graph = {};

  // 친구들의 관계를 graph에 저장
  for (let i = 0; i < max; i++) {
    const [a, b] = friends[i];
    if (graph[a]) {
      graph[a].push(b);
    } else {
      graph[a] = [b];
    }
    if (graph[b]) {
      graph[b].push(a);
    } else {
      graph[b] = [a];
    }
  }

  // user의 친구들의 친구들을 구하고 score에 점수계산
  for (let i = 0; i < graph[user].length; i++) {
    const friend = graph[user][i];
    userFriends.push(friend);
    for (let j = 0; j < graph[friend].length; j++) {
      const friendOfFriend = graph[friend][j];
      if (friendOfFriend !== user) {
        if (score[friendOfFriend]) {
          score[friendOfFriend] += 10;
        } else {
          score[friendOfFriend] = 10;
        }
      }
    }
  }

  // visitors를 순회하며 score에 저장
  for (let i = 0; i < visitors.length; i++) {
    const visitor = visitors[i];
    if (score[visitor]) {
      score[visitor] += 1;
    } else {
      score[visitor] = 1;
    }
  }

  // score를 순회하며 점수가 가장 높은 순으로 정렬
  // userFriends에 있는 친구들은 제외
  // 0점 제외
  answer = Object.keys(score)
    .filter((friend) => !userFriends.includes(friend))
    .filter((friend) => score[friend] !== 0)
    .sort((a, b) => {
      if (score[b] === score[a]) {
        return a.localeCompare(b);
      }
      return score[b] - score[a];
    })
    .slice(0, 5);
  return answer;
}

module.exports = problem7;
