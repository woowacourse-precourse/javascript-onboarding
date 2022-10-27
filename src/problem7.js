function getAlreadyFriends(user, friends, alreadyFriends) {
  friends.forEach((item) => {
    if (item.includes(user)) {
      // user가 1차원 배열의 0,1번 인덱스 중 어디있는지 모르기 때문
      item.indexOf(user) === 0
        ? alreadyFriends.push(item[1])
        : alreadyFriends.push(item[0]);
    }
  });
}

function getFriendOfFreinds(user, alreadyFriends, friendOfFreinds) {
  friends.forEach((item) => {
    for (let i = 0; i < alreadyFriends.length; i++) {
      if (item.includes(alreadyFriends[i])) {
        if (item.includes(user)) {
          continue;
        }

        item.indexOf(alreadyFriends[i]) === 0
          ? friendOfFreinds.push(item[1])
          : friendOfFreinds.push(item[0]);
      }
    }
  });
}

function problem7(user, friends, visitors) {
  let alreadyFriends = [];

  getAlreadyFriends(user, friends, alreadyFriends);

  let friendOfFreinds = [];

  getFriendOfFreinds(user, alreadyFriends, friendOfFreinds);
}

module.exports = problem7;
