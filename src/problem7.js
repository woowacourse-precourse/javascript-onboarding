function problem7(user, friends, visitors) {

  let recommendFriend = new Map();

  //제한사항
  if (user.length < 1 || user.length > 30) return -1;
  if (friends.length < 1 || friends.length > 10000) return -1;
  if (visitors > 10000) return -1;
  let lowerUser = user.toLowerCase();

  //친구 들어있는 배열 찾기
  const findFriend = (user, friends) => {
    const friendList = friends.filter(list => list.includes(user));
    return friendList;
  }
  //친구만 찾기
  const onlyFriend = (user, friendList) => {
    let flat = friendList.flat();
    for (let i = 0; i < flat.length; i++) {
      if (flat[i] === user) {
        flat.splice(i, 1);
        i--;
      }
    }
    return flat;
  }
  //친구의친구 배열 찾기
  const findFriendFriend = (friend, friends, user) => {
    let checkFriend = [];
    let checkF = [];
    for (let j = 0; j < friend.length; j++) {
      for (let k = 0; k < friends.length; k++) {
        if (friends[k].includes(friend[j])) {
          if (!friends[k].includes(user)) {
            checkF.push(friends[k]);
          }
        }
      }
    }
    console.log(checkF);
    return checkF;
  }
// 점수를 가진 추천친구 상위 5명 정렬
  const friendPlus = () => {
    let userName;
    let fiveFriend = [];
    userName = Array.from(recommendFriend.keys());
    if (userName.length > 5) {
      for (let i = 0; i < 5; i++) {
        fiveFriend.push(userName[i]);
      }
    } else {
      for (let i = 0; i < userName.length; i++) {
        fiveFriend.push(userName[i]);
      }
    }
    return fiveFriend;
  }

  let arr = findFriend(lowerUser, friends);
  let friend = onlyFriend(user, arr);
  let findF = findFriendFriend(friend, friends, lowerUser);

  //친구들 10점
  let result = findF.flat();
  result = result.filter(i => !friend.includes(i));
  result.map((m) => {
    if (recommendFriend.has(m)) {
      recommendFriend.set(m, recommendFriend.get(m) + 10);
    } else {
      recommendFriend.set(m, 10);
    }
  });
  console.log(recommendFriend);

  //추천친구 1점
  let visit = visitors.flat();
  visit.map((m) => {
    if (recommendFriend.has(m)) {
      recommendFriend.set(m, recommendFriend.get(m) + 1);
    } else {
      recommendFriend.set(m, 1);
    }
  })
// 친구 들어있으면 추천친구에서 삭제
  friend.map((m) => {
    recommendFriend.delete(m);
  });

  let answer = friendPlus();
  return answer;
}
console.log(problem7("mrko",
  [
    ["mrko", "jun"],
    ["donut", "jun"],
    ["donut", "mrko"],
    ["shakevan", "andole"],
    ["jun", "andole"],
    ["shakevan", "jun"],
    ["shakevan", "mrko"],
  ],
  ["bedi", "bedi", "donut", "bedi", "shakevan"]))

module.exports = problem7;
