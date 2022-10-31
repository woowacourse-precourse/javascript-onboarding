function problem7(user, friends, visitors) {
  let answer = [];
  // 유저 리스트 생성
  let userList = [...new Set([user,...friends.reduce((arr, v) => [...arr, ...v], []),...visitors])]

  // 유저 정보 초기화
  let userInfo = new Map();
  for (let i = 0; i < userList.length; i++)
    userInfo.set(userList[i], { friendList: new Set(), score: 0 });
  
  // 친구 등록 함수 선언
  function addFriend(target, friend) {
    let newFriendList = userInfo.get(target)["friendList"];
    newFriendList.add(friend);
    userInfo.set(target, { friendList: newFriendList, score: 0 });
  }

  // 친구 등록
  for (let i = 0; i < friends.length; i++) {
    addFriend(friends[i][0], friends[i][1]);
    addFriend(friends[i][1], friends[i][0]);
  }

  // 함께 아는 친구라면 + 10
  let userFriend = userInfo.get(user)['friendList'];
  let userFriendArray = [...userFriend];
  
  for (let i = 0; i < userList.length; i++){
    if (userList[i] === user) continue;

    let newUserInfo = userInfo.get(userList[i]);
    for (let k = 0; k < userFriendArray.length; k++) {
      if (userInfo.get(userList[i])["friendList"].has(userFriendArray[k]))
        newUserInfo["score"] = userInfo.get(visitors[i])["score"] + 10;
    }
    userInfo.set(userList[i], newUserInfo);
  }

  // user SNS에 방문자했으면 + 1
  for (let i = 0; i < visitors.length; i++){
    let newUserInfo = userInfo.get(visitors[i]);
    newUserInfo["score"] = userInfo.get(visitors[i])["score"] + 1;
    userInfo.set(visitors[i], newUserInfo);
  }

  // 점수, 이름 순으로 정렬
  userInfo = [...userInfo].sort((a, b) => {
    if (b[1]["score"] > a[1]["score"]) return 1;
    else if (a[1]["score"] > b[1]["score"]) return -1;
    else {
      if (a[0] > b[0]) return 1;
      else if (a[0] < b[0]) return -1;
      else return 0;
    }
  })

  // 점수가 0점이 아닌 경우 answer에 이메일 추가
  for (let i = 0; i < 5; i++){
    if (userInfo[i][1]["score"] && !userFriend.has(userInfo[i][0])) 
      answer.push(userInfo[i][0])
    else break;
  }
  return answer;
}

module.exports = problem7;
