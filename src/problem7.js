function problem7(user, friends, visitors) {
  let answer = [];
  //친구 오브젝트
  const friendObj = {};
  let scores = [];
  //방문객 오브젝트
  const visitorObj = {};

  //데이터를 이용하여 친구 오브젝트에 서로 목록에 넣어주기 
  friends.map((friend) => {
    const [A, B] = friend;
    if (!(A in friendObj)) friendObj[A] = {};
    friendObj[A][B] = true;
    if (!(B in friendObj)) friendObj[B] = {};
    friendObj[B][A] = true;
  });

  //방문객 오브젝트에 목록넣어주기
  visitors.map((visitor) => {
    if (visitor in visitorObj) visitorObj[visitor]++;
    else visitorObj[visitor] = 1;
  });

  //각 목록에서 요소들을 검사하여 점수를 계산하고 넣어주기
  for (let id in friendObj) {
    if (user === id) continue;
    let score = 0;
    for (let friend in friendObj[user]) {
      if (friend in friendObj[id]) score += 10;
    }
    if (id in visitorObj) {
      score += visitorObj[id];
    }
    scores.push({ id, score });
  }

  //친구목록에 없는 아닌 방문객의 점수를 추가해주기
  for (let visitor in visitorObj) {
    if (!(visitorObj[visitor] in friendObj)) {
      scores.push({ id: visitor, score: visitorObj[visitor] });
    }
  }

  //기존에 친구인 사람을 소거해주기
  scores = scores.filter((score) => !(score.id in friendObj[user]));

  //점수를 기준으로 정렬 점수가 같다면 사전순으로 정렬
  scores.sort((a, b) => {
    if (a.score !== b.score) return b.score - a.score;
    else return a < b ? -1 : 1;
  });
  scores = scores.filter((item) => item.score > 0);

  for (let i = 0; i < Math.min(scores.length, 5); i++) {
    answer.push(scores[i].id);
  }

  return answer;
}
module.exports = problem7;
