function problem7(user, friends, visitors) {
  //이미 친구인 요소 목록
  let alreadyFr = [];
  //반환 값
  let snsFr = {};

  //friends 배열을 순회하며, alreadyFr과 snsFr을 만들어 준다.
  for (let i of friends) {
    if (i.includes(user)) {
      alreadyFr.push(...i);
    } else {
      snsFr[i[0]] = 0;
      snsFr[i[1]] = 0;
    }
  }
  //alreadyFr에서 본인을 제외한다.
  alreadyFr = alreadyFr.filter((v) => v !== user);

  //방문 횟수에 따라 점수를 1씩 추가해준다.
  for (let i of visitors) {
    snsFr[i] = visitors.filter((v) => v === i).length;
  }

  //함께 아는 친구를 탐색하여 10점씩 추가해준다.
  for (let i of friends) {
    for (let j of alreadyFr) {
      if (!i.includes(user) && i.includes(j)) {
        snsFr[i.filter((v) => v != j)] += 10;
      }
    }
  }
  // 최종 반환값에서 이미 친구인 요소를 제거하고, 정렬을 한다.
  for (let i in alreadyFr) {
    delete snsFr[alreadyFr[i]];
  }
  snsFr = Object.entries(snsFr)
    .sort()
    .sort((a, b) => b[1] - a[1])
    .map((v) => v[0]);

  return snsFr;
}
module.exports = problem7;
