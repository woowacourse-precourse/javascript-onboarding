function problem7(user, friends, visitors) {
  // 친구 리스트 및 점수를 담아줄 객체 선언
  let freindsList = {};
  let score = {};

  // 친구관계 관련 로직
  for (let friend of friends) {
    let team1 = friend[0];
    let team2 = friend[1];

    if (!(team1 in freindsList)) {
      freindsList[team1] = [team2];
      score[team1] = 0;
    } else {
      freindsList[team1].push(team2);
    }
    if (!(team2 in freindsList)) {
      freindsList[team2] = [team1];
      score[team2] = 0;
    } else {
      freindsList[team2].push(team1);
    }
  }

  // 아는 친구 - 10점
  for (let userFriend of freindsList[user]) {
    for (let crewFriend of freindsList[userFriend]) {
      if (!(crewFriend === user)) {
        score[crewFriend] += 10;
      }
    }
  }

  // 타임라인 방문 - 1점
  for (let visitor of visitors) {
    if (!freindsList[user].includes(visitor)) {
      if (score[visitor]) {
        score[visitor] += 1;
      } else {
        score[visitor] = 1;
      }
    }
  }

  // 점수 정렬
  let sortedScore = []
  for (let crew in score) {
    sortedScore.push([crew, score[crew]])
  }
  sortedScore.sort(function (a, b) {
    if (b[1] > a[1]) {
      return 1
    }
    if (a[1] > b[1]) {
      return -1
    }
    if (a[0] < b[0]) {
      return -1
    }
    if (b[0] < a[0]) {
      return 1
    }
  })

  // 최대 5명 리턴하기
  let result = []
  for (let i = 0; i < 5; i++) {
    if (!(sortedScore[i][1] === 0)) {
      result.push(sortedScore[i][0])
    }
  }

  return result;
}

module.exports = problem7;