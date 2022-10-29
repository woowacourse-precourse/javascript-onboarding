function problem7(user, friends, visitors) {
  const peoples = allUserNames(friends, visitors);

  const userFriend = aleadyFriends(friends, user);

  // 유저의 친구, 유저 삭제
  userFriend.forEach(realFriend => delete peoples[realFriend])
  delete peoples[user];

}

module.exports = problem7;

const allUserNames = (friends, visitors) => {
  const peoples = {}; 

  friends.forEach(friend => {
    if (!peoples[friend[0]]) peoples[friend[0]] = 0;
    if (!peoples[friend[1]]) peoples[friend[1]] = 0;
  });

  visitors.forEach(visitor => {
    if (!peoples[visitor]) peoples[visitor] = 0;
  })
  return peoples;
}

const aleadyFriends = (friends, user) => {
  const userFriend = []; // [ 'donut', 'shakevan' ]

  friends.forEach(friend => {
    if (friend[0] === user) {
      userFriend.push(friend[1]);
    }
    if (friend[1] === user) {
      userFriend.push(friend[0]);
    }
  })

  return userFriend;
}