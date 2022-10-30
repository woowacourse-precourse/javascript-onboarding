const findFriends = (friends, friendsMap, person) => {
  let tempFriends = [];
  for (let i = 0; i < friends.length; i += 1){
    if (friends[i].find(name => name === person)){
      tempFriends.push(friends[i][0] === person ? friends[i][1] : friends[i][0]);
    }
  }
  friendsMap.set(person, tempFriends);
}


function problem7(user, friends, visitors) {
  const friendsMap = new Map();
  
  // friends에서 내 친구 찾아 friendsMap에 넣기, 내 친구의 친구 관계 friendsmap에 넣기
  findFriends(friends, friendsMap, user);
}

module.exports = problem7;
