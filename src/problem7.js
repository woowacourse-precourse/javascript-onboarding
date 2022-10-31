/* 
--기능목록--
1. user와 친구인 사람들의 아이디를 찾는다.
2. user와 친구인 사람들의 친구를 찾아 점수 10점을 부여한다.
3. user의 타임라인에 방문한 사람들에게 방문횟수마다 1점씩 부여한다.
4. 점수가 높은 순으로, 같은 경우 이름순으로 아이디를 정렬한다.  

*/

function problem7(user, friends, visitors) {}

const getUserFriendId = (user, friends) => {
  const userFriends = [];

  friends.forEach((friend) => {
    const [friendA, friendB] = friend;

    if (friend.includes(user)) {
      friendA === user ? userFriends.push(friendB) : userFriends.push(friendA);
    }
  });

  return userFriends;
};

const giveScoreToFriendOfFriend = (user, friends, userFriends) => {
  const pointsOfUsers = {};

  friends.forEach((friend) => {
    if (!friend.includes(user)) {
      const [friendA, friendB] = friend;

      if (userFriends.includes(friendA)) {
        !pointsOfUsers[friendB] ? (pointsOfUsers[friendB] = 10) : (pointsOfUsers[friendB] += 10);
      } else if (userFriends.includes(friendB)) {
        !pointsOfUsers[friendA] ? (pointsOfUsers[friendA] = 10) : (pointsOfUsers[friendA] += 10);
      }
    }
  });

  return pointsOfUsers;
};

const giveScoreToVisitor = (visitors, userFriends, pointsOfUsers) => {
  visitors.forEach((visitor) => {
    if (!userFriends.includes(visitor)) {
      !pointsOfUsers[visitor] ? (pointsOfUsers[visitor] = 1) : (pointsOfUsers[visitor] += 1);
    }
  });

  return pointsOfUsers;
};
module.exports = problem7;
