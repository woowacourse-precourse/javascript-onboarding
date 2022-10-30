const areWeFriend = (friends) => {
  var myFriendObj = new Object();
  friends.forEach((element) => {
    if (!myFriendObj[element[0]]) myFriendObj[element[0]] = [0];
    myFriendObj[element[0]].push(element[1]);

    if (!myFriendObj[element[1]]) myFriendObj[element[1]] = [0]; 
    myFriendObj[element[1]].push(element[0]);
  });

  return myFriendObj;
};

const justVisitors = (myFriendObj, visitors) => {
  visitors.forEach((element) => {
    if (!myFriendObj[element]) {
      myFriendObj[element] = [0];
    }
  });

  return myFriendObj;
}

const aboutUser = (myFriendObj, user) => {
  if (myFriendObj[user]) myFriendObj[user].push(user)
  else{
    myFriendObj[user] = [0];
    myFriendObj[user].push(user);
  }
  return myFriendObj;
}

const countFriends = (myFriendObj, user) => {
  var realFriend = "";
  var insideFriend = "";
  var check = 0;
  for (let i = 1; i < myFriendObj[user].length - 1; i++) {
    realFriend = myFriendObj[user][i];
    for (let j = 1; j < myFriendObj[realFriend].length; j++) {
      insideFriend = myFriendObj[realFriend][j];

      for (let k = 1; k < myFriendObj[user].length; k++) {
        if (insideFriend === myFriendObj[user][k]) {
          check = 1;
          break;
        }
      }
      if (!check) {
        myFriendObj[insideFriend][0] += 10;
      } else {
        check = 0;
      }
    }
  }

  return myFriendObj;
}

const countVisitors = (myFriendObj, visitors, user) => {
  var check = 0;
  visitors.forEach((element) => {
    for (let i = 1; i < myFriendObj[user].length; i++) {
      if (element === myFriendObj[user][i]) {
        check = 1;
        break;
      }
    }
    if (!check) {
      myFriendObj[element][0] += 1;
    } else {
      check = 0;
    }
  });

  return myFriendObj;
}

const sortAboutScore = (friendList) => {
  friendList.sort(function (a, b) {
    return b[0] - a[0];
  });

  return friendList;
}

const sortAboutName = (friendList) => {
  // 점수가 동일한 경우 이름을 사전순으로 정렬합니다.
  var tmp = "";
  for (let i = 0; i < friendList.length - 1; i++) {
    if (friendList[i][0] === friendList[i + 1][0]) {
      for (let j = 0; j < friendList.length - 1 - i; j++) {
        if (
          friendList[j][1] > friendList[j + 1][1] &&
          friendList[j][0] === friendList[j + 1][0]
        ) {
          tmp = friendList[j][1];
          friendList[j][1] = friendList[j + 1][1];
          friendList[j + 1][1] = tmp;
        }
      }
      tmp = "";
    }
  }

  return friendList;
}




function problem7(user, friends, visitors) {
  var answer = [];
  var myFriendObj = new Object();
  var friendList = [];
  // 친구 관계 확인을 위한 오브젝트 생성 friends에서의 관계.
  myFriendObj = areWeFriend(friends);
  // 단순 방문자인 경우.
  myFriendObj = justVisitors(myFriendObj, visitors);
  //유저도 포함시켜, 유저에게 잘못된 점수를 주는것을 방지합니다.
  myFriendObj = aboutUser(myFriendObj, user);
  

  //사용자와 함께 아는 친구의 수를 구하는 기능을 합니다.
  myFriendObj = countFriends(myFriendObj, user);

  //단순 방문자를 구하기 위한 함수입니다.
  myFriendObj = countVisitors(myFriendObj, visitors, user);


  // 객체에 담긴 이름과 점수를 friendList 담아냅니다.
  for (let el in myFriendObj) {
    friendList.push([myFriendObj[el][0], el]);
  }

  // 점수를 기준으로 정렬합니다.
  friendList = sortAboutScore(friendList);

  // 이름을 기준으로 정렬하는 경우를 고려해줍니다.
  friendList = sortAboutName(friendList);

  

  for(let i=0 ; i < friendList.length ; i++){
    if (i >= 5) break;
    if (friendList[i][0] != 0) answer.push(friendList[i][1]);
  }
  return answer;
}


module.exports = problem7;
