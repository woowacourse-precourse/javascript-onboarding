function problem7(user, friends, visitors) {
  let answer;
  let score = {};
  let dict = {};
  for (let i = 0; i < friends.length; i++) {
    const [A, B] = friends[i];
    dict[A] ? dict[A].push(B) : (dict[A] = [B]);
    dict[B] ? dict[B].push(A) : (dict[B] = [A]);
  }
  const targetFriends = findOverlapFriends(dict, user);
  //중복친구 점수 구하기
  for (const key in dict) {
    if (key == user || targetFriends.includes(key)) {
      continue;
    }
    for (const friend of dict[key]) {
      if (targetFriends.includes(friend)) {
        score[key] ? (score[key] += 10) : (score[key] = 10);
      }
    }
  }
  //방문점수구하기
  for (const visitor of visitors) {
    if (targetFriends.includes(visitor)) {
      continue;
    }
    score[visitor] ? (score[visitor] += 1) : (score[visitor] = 1);
  }
  //점수 정렬
  let temp = [];
  for (const [key, value] of Object.entries(score)) {
    temp.push([key, value]);
  }
  temp.sort((a, b) => {
    if (a[0] > b[1]) return 1;
    if (a[0] < b[1]) return -1;
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
  });

  answer = [];
  for (let i = 0; i < temp.length; i++) {
    answer.push(temp[i][0]);
  }
  return answer;
}

function findOverlapFriends(dict, user) {
  let answer = [];
  for (const value of dict[user]) {
    answer.push(value);
  }
  return answer;
}

module.exports = problem7;
