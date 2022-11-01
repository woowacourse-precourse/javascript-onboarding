// @ts-check

/**
 *
 * @param {string} user 친구 추천 대상
 * @param {string[][]} friends 친구 관계
 * @param {string[]} visitors 사용자 타임 라인 방문 기록
 * @returns {string[]}
 */

function problem7(user, friends, visitors) {
  const usersInfo = makeUsersInfo(friends, visitors);

  const userFriendsList = usersInfo[user].friendsList;

  Object.keys(usersInfo).forEach((user) => {
    if (userFriendsList.includes(user)) {
      const friendsOfFriend = usersInfo[user].friendsList;

      friendsOfFriend.forEach((friend) => {
        usersInfo[friend].score += 10;
      });
    }
  });

  visitors.forEach((visitor) => {
    usersInfo[visitor].score += 1;
  });

  const filteredUsersInfo = Object.entries(usersInfo).filter((userInfo) => {
    const [name, { score, friendsList }] = userInfo;

    return score > 0 && name !== user && !isAlreadyFriend(user, friendsList);
  });

  const sortedUsersInfo = filteredUsersInfo.sort((a, b) => {
    if (a[1].score === b[1].score) {
      if (a[0] > b[0]) {
        return 1;
      } else if (b[0] > a[0]) {
        return -1;
      } else {
        return 0;
      }
    } else {
      return b[1].score - a[1].score;
    }
  });

  const sortedName = sortedUsersInfo.map((userInfo) => userInfo[0]);

  return sortedName.length > 5 ? sortedName.slice(0, 5) : sortedName;
}

/**
 * usersInfo 객체를 초기화하여 반환
 * @param {string[][]} friends
 * @param {string[]} visitors
 * @returns {{[user:string]:{score: number, friendsList: string[]}}}
 */

function makeUsersInfo(friends, visitors) {
  /** @type {{[user:string]:{score: number, friendsList: string[]}}}  */
  const usersInfo = {};

  friends.forEach((friend) => {
    const [user1, user2] = friend;

    usersInfo[user1]
      ? usersInfo[user1].friendsList.push(user2)
      : (usersInfo[user1] = { score: 0, friendsList: [user2] });

    usersInfo[user2]
      ? usersInfo[user2].friendsList.push(user1)
      : (usersInfo[user2] = { score: 0, friendsList: [user1] });
  });

  visitors.forEach((visitor) => {
    if (!usersInfo[visitor]) {
      usersInfo[visitor] = { score: 0, friendsList: [] };
    }
  });

  return usersInfo;
}

/**
 * 이미 친구 관계인가를 반환
 * @param {string} user
 * @param {string[]} friendList
 * @returns {boolean}
 */

function isAlreadyFriend(user, friendList) {
  const index = friendList.findIndex((f) => user === f);

  return index !== -1;
}

module.exports = problem7;
