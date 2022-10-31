function problem7(user, friends, visitors) {
  const peoples = allUserNames(friends, visitors);

  const userFriend = aleadyFriends(friends, user);

  // 유저의 친구, 유저 삭제
  userFriend.forEach(realFriend => delete peoples[realFriend])
  delete peoples[user];

  const friendsFriends = friendsFriendList(userFriend, friends);

  addScore(friendsFriends, visitors, peoples);

  const scoreObj = scoreHash(peoples);

  const sortByScore = Object
    .entries(scoreObj)
    .sort((arr1, arr2) => Number(arr2[0]) - Number(arr1[0]));

    const res = [];

    sortByScore.forEach(([score, friends]) => {
      if (res.length >= 5) return;
      if (score == 0) return;
  
      const sortByName = friends.sort();
  
      sortByName.forEach(name => {
        if (res.length >= 5) return;
        if (name == user) return; 
        res.push(name);
      })
    })
  
    return res;
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

const friendsFriendList = (userFriend, friends) => {
  const friendsFriends = {}; // {donut: [ 'andole', 'jun' ], shakevan: [ 'andole', 'jun' ]}

  userFriend.forEach(friend => friendsFriends[friend] = []);

  friends.forEach(([friendA, friendB]) => {
    userFriend.forEach(realFriend => {
      if (realFriend === friendA) {
        friendsFriends[realFriend].push(friendB);
      }
      if (realFriend === friendB) {
        friendsFriends[realFriend].push(friendA);
      }
    })
  })

  return friendsFriends;
}

const addScore = (friendsFriends, visitors, peoples) => {
  for (const friend in friendsFriends) {
    friendsFriends[friend].forEach(people => {
      if (peoples.hasOwnProperty(people)) peoples[people] += 10;
    })
  }

  visitors.forEach(visitor => {
    if (peoples.hasOwnProperty(visitor)) peoples[visitor]++;
  })
}

const scoreHash = (peoples) => {
  const scoreObj = {};

  for (const name in peoples) {
    if (!scoreObj[peoples[name]]) scoreObj[peoples[name]] = [name];
    else  scoreObj[peoples[name]].push(name);
  }

  return scoreObj;
}