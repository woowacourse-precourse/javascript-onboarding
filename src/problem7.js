function findFriend(user, friends) {
  let friend = [];

  friends.forEach(([left, right]) => {
    if (left === user)
      friend.push(right);
    if (right === user)
      friend.push(left);
  });

  return friend;
}

function users(friends, user) {
  let userlist = new Set();

  friends.forEach(([left, right]) => {
    if (user !== left)
      userlist.add(left);

    if (user !== right)
      userlist.add(right);
  });

  return userlist;
}

function createScoreboard1(userlist) {
  let arr = [];
  userlist.forEach((user) => {
    arr.push([0, user]);
  });
  return arr;
}

function friendOfFriend(friends, score, userFriend, user) {
  friends.forEach(([left, right]) => {
    if (userFriend.includes(left) && user !== right) {
      const idx = score.findIndex(i => i[1] === right);
      score[idx][0] += 10;
    }
    if (userFriend.includes(right) && user !== left) {
      const idx = score.findIndex(i => i[1] === left);
      score[idx][0] += 10;
    }
  });

  return score;
}

function visScore(score, visitors) {
  visitors.forEach((visitor) => {
    const check = score.find((item) => item[1] === visitor);
    if (check) {
      const idx = score.findIndex(i => i[1] === visitor);
      score[idx][0]++;
    }
    else {
      score.push([1, visitor]);
    }
  });
  return score;
}

function problem7(user, friends, visitors) {
  userFriend = findFriend(user, friends);

  userlist = users(friends, user);
  userlist = Array.from(userlist);

  let score = createScoreboard1(userlist);
  score = friendOfFriend(friends, score, userFriend, user);
  score = visScore(score, visitors);
  
  score.sort();
  return score;
}
//사용자와 친구관계인 유저를 구함
//유저 목록 저장
//스코어보드 저장
//친구와 친구관계인 친구에 +10점
//방문자 +1점
module.exports = problem7;
