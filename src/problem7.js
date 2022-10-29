function problem7(user, friends, visitors) {
  var answer = [];

  const friendList = {};
  const recommendScore = {};

  for (const [a, b] of friends) {
    if (friendList[a]) friendList[a].push(b);
    else friendList[a] = [b];
    if (friendList[b]) friendList[b].push(a);
    else friendList[b] = [a];
  }

  const userFriendList = friendList[user];

  for (const [target, list] of Object.entries(friendList)) {
    if (target === user) continue;
    const friendIntersection = userFriendList.filter((friend) =>
      list.includes(friend),
    );
    const knowTogether = friendIntersection.length;
    if (recommendScore[target]) {
      recommendScore[target] += knowTogether * 10;
    } else {
      recommendScore[target] = knowTogether * 10;
    }
  }

  for (const visitor of visitors) {
    if (recommendScore[visitor]) {
      recommendScore[visitor] += 1;
    } else {
      recommendScore[visitor] = 1;
    }
  }

  //이미 친구인 경우와 0점 제외
  const recommendFriends = Object.entries(recommendScore).filter(
    ([name, score]) => !userFriendList.includes(name) && score > 0,
  );

  recommendFriends.sort(([nameA, scoreA], [nameB, scoreB]) => {
    //점수 오름차순 후 이름순 정렬
    if (scoreA != scoreB) return scoreB - scoreA;
    return nameA - nameB;
  });

  for (const [name, _] of recommendFriends) {
    answer.push(name);
  }

  answer.splice(5); //최대 5명 제한

  return answer;
}

module.exports = problem7;
