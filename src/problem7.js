function problem7(user, friends, visitors) {
  //친구 관계 배열을 이용해 친구 목록을 생성
  const friendArr = createfriendArr(friends, user);
  const mutualFriendArr = [];
  for (let i = 0; i < friendArr.length; i++) {
    const friend = friendArr[i];
    mutualFriendArr.push(...createfriendArr(friends, friend, friendArr));
    visitors = visitors.filter((visit) => visit !== friend);
  }

  
};

module.exports = problem7;
