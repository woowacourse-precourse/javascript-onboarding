function problem7(user, friends, visitors) {
  let userFriend = [];
  let friendPoint = [];
  let friendOfFriend = [];
  let friendReduplication = [];
  let visit = [];
  let answer = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      for (let z = 0; z < friends[i].length; z++) {
        if (friends[i][z] != user) {
          userFriend.push(friends[i][z]);
        }
      }
    }
  }

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(user)) {
      friends.splice(i, 1);
      i -= 1;
    }
  }

  for (let i = 0; i < userFriend.length; i++) {
    for (let z = 0; z < friends.length; z++) {
      if (friends[z].includes(userFriend[i])) {
        for (let x = 0; x < friends[z].length; x++) {
          if (friends[z][x] != userFriend[i]) {
            friendReduplication.push(friends[z][x]);
          }
        }
      }
    }
  }

  for (let i = 0; i < friendReduplication.length; i++) {
    if (friendOfFriend.includes(friendReduplication[i]) == false) {
      friendOfFriend.push(friendReduplication[i]);
    }
  }

  for (let i = 0; i < friendOfFriend.length; i++) {
    let count = 0;
    for (let z = 0; z < friendReduplication.length; z++) {
      if (friendOfFriend[i] == friendReduplication[z]) {
        count += 1;
      }
    }
    friendPoint.push([friendOfFriend[i], count * 10]);
  }

  for (let i = 0; i < userFriend.length; i++) {
    for (let z = 0; z < visitors.length; z++) {
      if (visitors[z] == userFriend[i]) {
        visitors.splice(z, 1);
        z -= 1;
      }
    }
  }

  for (let i = 0; i < visitors.length; i++) {
    if (visit.includes(visitors[i]) == false) {
      visit.push(visitors[i]);
    }
  }

  for (let i = 0; i < visit.length; i++) {
    let count = 0;
    for (let z = 0; z < friendPoint.length; z++) {
      if (visit[i] == friendPoint[z][0]) {
        count += 1;
      }
    }
    if (count == 0) {
      friendPoint.push([visit[i], 0]);
    }
  }

  return answer;
}
module.exports = problem7;
