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
}

module.exports = problem7;