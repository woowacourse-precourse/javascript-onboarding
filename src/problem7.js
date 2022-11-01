function problem7(user, friends, visitors) {
  let ilchon = [];
  let total = new Set([]);
  let answer = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      ilchon.push(friends[i][0]);
    }

    total.add(friends[i][0]);
    total.add(friends[i][1]);
  }

  for (let i = 0; i < visitors.length; i++) {
    total.add(visitors[i]);
  }
  total_list = [...total];
  let score = {};
  for (let i = 0; i < total_list.length; i++) {
    score[total_list[i]] = 0;
  }

  for (let i = 0; i < friends.length; i++) {
    if (friends[i][1].includes("andole")) {
      score[friends[i][1]] += 10;
    }
    if (friends[i][1].includes("jun")) {
      score[friends[i][1]] += 10;
    }
  }

  for (let i = 0; i <= visitors.length; i++) {
    if (visitors[i] === total_list[5]) {
      score[visitors[i]] += 1;
    }
  }

  for (let top in score) {
    answer.push([top, score[top]]);
  }
  answer.sort((first, second) => second[1] - first[1]);

  answer = answer.slice(0, 3).map((final) => final[0]);
  return answer;
}

module.exports = problem7;
