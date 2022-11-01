// 1. sns 회원 리스트화
// 2. 친구지도 (obj) 생성
// 3. 방문자 point 계산
// 4. 서로 아는 친구 Point 계산
// 5. 이미 user 와 친구인 사람 map에서 제거
// 6. sort및 랭킹 생성

// 회원 리스트화
function findPeople(friends) {
  let people = [];
  friends.forEach((data) => people.push(...data));
  people = [...new Set(people)];
  return people;
}
// 친구 찾기
function findFriends(person, friends) {
  const myFriends = [];
  friends.forEach((data) => {
    if (data.indexOf(person) === 1) {
      myFriends.push(data[0]);
    } else if (data.indexOf(person) === 0) {
      myFriends.push(data[1]);
    }
  });
  return myFriends;
}
//친구 지도 만들기
function friendsToObj(friends, peopleList) {
  const friendsMap = {};
  peopleList.forEach((person) => {
    friendsMap[person] = {
      friends: findFriends(person, friends),
      point: 0,
    };
  });

  return friendsMap;
}
// 방문 point
function calVisitPoint(friendsMap, visitors) {
  visitors.forEach((person) => {
    friendsMap[person]?.point != undefined
      ? (friendsMap[person]["point"] += 1)
      : (friendsMap[person] = { friends: [], point: 1 });
  });
}
// 친구 point
function calWithPoint(friendsMap, user) {
  if (friendsMap[user]?.friends != undefined) {
    const userFriends = friendsMap[user]["friends"];
    userFriends.forEach((userFriends) => {
      for (let person in friendsMap) {
        if (friendsMap[person]["friends"].indexOf(userFriends) !== -1) {
          friendsMap[person]["point"] += 10;
        }
      }
    });
  }
}
// 이미 User와 친구인 사람 삭제 및 본인 삭제
function alreayFriend(friendsMap, user) {
  if (friendsMap[user]?.friends != undefined) {
    const userFriends = friendsMap[user].friends;
    userFriends.forEach((userFriends) => {
      delete friendsMap[userFriends];
    });
  }
  // 본인
  delete friendsMap[user];
}
// 친구 랭킹
function friendsRank(friendsMap) {
  // 배열화
  const friendsArr = [];
  for (let person in friendsMap) {
    friendsArr.push([person, friendsMap[person]["point"]]);
  }
  // 알파벳 정렬
  friendsArr.sort();

  // point 정렬
  friendsArr.sort(function (a, b) {
    return b[1] - a[1];
  });
  return friendsArr;
}
function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
