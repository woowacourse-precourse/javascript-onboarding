function problem7(user, friends, visitors) {
  if (typeof user !== 'string' || !Array.isArray(friends) || !Array.isArray(visitors)) throw new Error('user는 문자열, friends는 배열, visitors는 배열이여야 합니다.');
  if (!user.length || user.length > 30) throw new RangeError('user는 길이가 1 이상 30 이하인 문자열이여야 합니다.');
  if (!friends.length || friends.length > 10000) throw new RangeError('friends는 길이가 1 이상 10,000 이하인 배열이여야 합니다.');
  if (visitors.length < 0 || visitors.length > 10000 ) throw new RangeError('visitors는 길이가 0 이상 10,000 이하인 배열이여야 합니다.');
  
  // 유저의 친구들
  let userFriends = []
  friends.forEach(friend => {
    if (friend.includes(user)) userFriends = [...userFriends, ...friend];
  })
  userFriends = userFriends.filter(friend => friend !== user);

  // 유저 친구의 친구들 => 알 수도 있는 친구들
  let mayKnowUsers = [];
  friends.forEach(friend => {
    userFriends.forEach(userFriend => {
      if (friend.includes(userFriend)) mayKnowUsers = [...mayKnowUsers, ...friend];
    });
  });

  mayKnowUsers = mayKnowUsers.filter(mayKnowUser => {
    return mayKnowUser !== user && !userFriends.includes(mayKnowUser)
  })

  // 유저 점수 계산
  const userCount = {};
  mayKnowUsers.forEach(mayKnowUser => {
    userCount[mayKnowUser] = (userCount[mayKnowUser] ?? 0) + 10
  })

  visitors.forEach(visitor => {
    if (visitor === user || userFriends.includes(visitor)) return;
    userCount[visitor] = (userCount[visitor] ?? 0) + 1;
  });

  // 점수 기준 내림차순 정렬
  const sortFunc = (userA, userB) => {
    const numA = userCount[userA];
    const numB = userCount[userB];
    
    if (numA - numB > 0) return -1;
    else if (numA - numB < 0) return 1;
    else return userA < userB ? -1 : userA === userB ? 0 : 1;
  }

  const userId = Object.keys(userCount);

  return userId.sort((userA,userB) => sortFunc(userA,userB)).slice(0,5);
  

}

module.exports = problem7;
