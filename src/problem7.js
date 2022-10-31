function problem7(user, friends, visitors) {
  var answer = [];
  let friendReco = [];
  let friend = [];
  let visit = [...visitors];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][0].includes(user)) {
      friendReco.push(friends[i][0]);
      friend.push(friends[i][1]);
    } else {
      friendReco.push(friends[i][1]);
      friend.push(friends[i][0]);
    }
  }
  const realFriend = friend.filter((e, idx) => friend.indexOf(e) === idx); // 이미 친구인 이름
  friendReco = friendReco.filter((e) => e !== user); // 추천 친구 10점이상

  for (let i = 0; i < realFriend.length; i++) {
    visit = visit.filter((e) => e !== `${realFriend[i]}`); // 방문자 친구 1점이상
  }

  const realFriendReco = friendReco.filter(
    (e, idx) => friendReco.indexOf(e) === idx
  );
  for (let i = 0; i < realFriendReco.length; i++) {
    answer.push(realFriendReco[i]);
  }
  const realVisit = visit.filter((e, idx) => visit.indexOf(e) === idx);

  for (let i = 0; i < realVisit.length; i++) {
    answer.push(realVisit[i]);
  }

  return answer;
}

module.exports = problem7;
