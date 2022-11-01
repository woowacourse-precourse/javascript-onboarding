function problem7(user, friends, visitors) {
  let getFriends = [];

  for (i in friends) {
    if (friends[i][0] == user) {
      getFriends.push(friends[i][1]);
    } else if (friends[i][1] == user) {
      getFriends.push(friends[i][0]);
    }
  }

  let visitedFriends = [];

  for (i in friends) {
    for (j in getFriends) {
      if (friends[i][0] == getFriends[j] || friends[i][1] == getFriends[j]) {
        visitedFriends.push(friends[i]);
      }
    }
  }
  let getScore = new Set(visitedFriends);
  visitedFriends = [...getScore]; //중복제거

  let score = {};

  for (i in visitedFriends) {
    key = visitedFriends[i][0];
    if (!score[key]) {
      score[key] = 10;
    }
    if (score[key]) {
      score[key] += 10;
    }
    key = visitedFriends[i][1];
    if (!score[key]) {
      score[key] = 10;
    }
    if (score[key]) {
      score[key] += 10;
    }
  }

  let FilteredScore = [];

  for (i in visitors) {
    FilteredScore.push(visitors[i]);
  }

  for (i in FilteredScore) {
    key = FilteredScore[i];
    if (!score[key]) {
      score[key] = 1;
    }
    if (score[key]) {
      score[key] += 1;
    }
  }

  //본인과 기존친구스코어를삭제
  for (i in getFriends) {
    for (key in score) {
      if (key == getFriends[i] || key == user) {
        delete score[key];
      }
    }
  }

  let DescendScore = [];

  for (key in score) {
    DescendScore.push([100000 - score[key], key]);
  }

  // 점수만 내림차순정렬
  DescendScore.sort();

  let result = [];

  for (i in DescendScore) {
    result.push(DescendScore[i][1]);
  }

  return result;
}

module.exports = problem7;
