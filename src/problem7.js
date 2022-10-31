function problem7(user, friends, visitors) {
  var answer = [];

  let friendSet = new Map();
  var indirectFriendSet = [];
  var indirectFriend = [];

  //user 와 직접 친구 목록
  const directFriendSet = friends.filter((item) => item.includes(user));
  const directFriend = directFriendSet.map((item) => item[0]);


  for (let i = 0; i < directFriend.length; i++) {
    const friendArray = friends.filter((item) => item.includes(directFriend[i]));
    indirectFriendSet = [
      ...indirectFriendSet,
      ...friendArray.filter((item) => !item.includes(user)),
    ];

    friendSet.set(directFriend[i], 0);
  }

  indirectFriend = indirectFriendSet.map((item) => item[1]);

  //10점 추가
  for (let i = 0; i < indirectFriend.length; i++) {
    friendSet.has(indirectFriend[i])
      ? friendSet.set(indirectFriend[i], friendSet.get(indirectFriend[i]) + 10) //이미 포함된 친구라면
      : friendSet.set(indirectFriend[i], 10);
  }

  //1점 추가
  for (let i = 0; i < visitors.length; i++) {
    friendSet.has(visitors[i])
      ? friendSet.get(visitors[i]) !== 0 && //0점 친구는 목록에 포함하지 않는다
        friendSet.set(visitors[i], friendSet.get(visitors[i]) + 1)
      : friendSet.set(visitors[i], 1);
  }

  answer = [...friendSet].sort().sort((a,b) => b[1] - a[1]).filter((item) => item[1] !== 0);

  return answer.map((item,i)=> i < 5 && item[0]); //최대 5개로 제한
}

module.exports = problem7;
