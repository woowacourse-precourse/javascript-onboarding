// 기능 목록
// 1. 유저의 친구찾기
// 2. 유저의친구의 친구 찾기
// 3. 유저의친구가 아닌 방문자들 찾기
// 4. 기준에따라 사용자점수 추가하기
// 5. 점수화된 사용자들 내림차순,이름순으로 5명 정렬

function problem7(user, friends, visitors) {
  
  const userfriends = [],
        friendoffriends = [],
        unfriendvisitors = [],
        score = new Map(),
        answer = [];

  friends.filter((a) => a.includes(user)).filter((a) => {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== user) userfriends.push(a[i]);
    }
  });

  for (let i = 0; i < userfriends.length; i++) {
    for (let j = 0; j < friends.length; j++) {
      if (friends[j].includes(userfriends[i]) && !friends[j].includes(user)) 
      {
        friendoffriends.push((friends[j].filter((a) => !a.includes(userfriends[i]))).join(""));
      } 
    } 
  };

  for (let i = 0; i < visitors.length; i++) {
    if (!userfriends.includes(visitors[i])) unfriendvisitors.push(visitors[i]);
  };

  for (const i of friendoffriends) {
    if (score.has(i)) {
      score.set(i, score.get(i) + 10);
    } else {
      score.set(i, 10);
    }
  };

  for (const i of unfriendvisitors) {
    if (score.has(i)) {
      score.set(i, score.get(i) + 1);
    } else {
      score.set(i, 1);
    }
  };

  const sortedScore = [...score].sort().sort((a, b) => b[1]- a[1]);

  sortedScore.map((a) => answer.push(a[0]));
  if (answer.length > 5) answer.slice(0, 5);

  return answer;
}

module.exports = problem7;
