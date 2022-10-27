function problem7(user, friends, visitors) {
  let answer = [];
  let friend_list = new Map();
  let score_list = new Map();

  for (let e of friends) {  // Map 초기화
    if (friend_list.has(e[0])) {
      friend_list.get(e[0]).push(e[1]);
    } else {
      friend_list.set(e[0], [e[1]]);
    }
    if (friend_list.has(e[1])) {
      friend_list.get(e[1]).push(e[0]);
    } else {
      friend_list.set(e[1], [e[0]]);
    }

    if (!score_list.has(e[0])) {
      score_list.set(e[0], 0);
    }
    if (!score_list.has(e[1])) {
      score_list.set(e[1], 0);
    }
  }
  
  for (let e of friends) {  // 유저와 함께 아는 친구
    if (friend_list.get(user).includes(e[1])) {
      score_list.set(e[0], score_list.get(e[0]) + 10);
    }
    if (friend_list.get(user).includes(e[0])) {
      score_list.set(e[1], score_list.get(e[1]) + 10);
    }
  }

  for (let e of visitors) {  // 방문자 점수
    if (score_list.has(e)) {
      score_list.set(e, score_list.get(e) + 1);
    } else {
      score_list.set(e, 1);
    }
  }

  for (let e of score_list) { // 유저의 친구 및 0점 제외
    if (friend_list.get(user).includes(e[0]) || e[0] === user || e[1] === 0) {
      continue;
    }
    answer.push(e[0]);
  }

  const compare = (a, b) => {
    if (score_list.get(a) === score_list.get(b)) {
      return a.localeCompare(b);
    }
    return score_list.get(b) - score_list.get(a);
  }

  answer.sort(compare);
  if (answer.length > 5) {
    answer.splice(5);
  }
  
  return answer;
}

module.exports = problem7;