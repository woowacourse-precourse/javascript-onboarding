function problem7(user, friends, visitors) {
  var answer;
  answer = friendsRecomand(user, friends, visitors);
  return answer;
}

module.exports = problem7;

//유저아이디가 포함된 친구 목록을 반환.
function myFriendsList(userId, AllFriends) {
  // let temp = JSON.stringify();
  // let tempList = JSON.parse(temp);
  return AllFriends.filter((list) => list.includes(userId));
}

//반환된 친구 목록에서 유저아이디를 제거
function removeMyUsername(userId, filteredList) {
  const temp = JSON.stringify(filteredList);
  const changeList = JSON.parse(temp);
  changeList.map((list) => list.splice(list.indexOf(userId), 1));
  return changeList.flat();
}

//전체 목록에서 친구의 친구를 검색.
function friendsFilter(friendsList, AllFriends, userId) {
  let friFriends = [];
  AllFriends.map((each) => {
    const nFriends = isFriends(friendsList, each, userId);
    if (nFriends) friFriends.push(each);
  });
  return friFriends;
}

//친구의 친구인지 평가하여 boolean을 반환
function isFriends(friendsList, each, userId) {
  return friendsList.some(
    (friend) => each.includes(friend) && !each.includes(userId)
  );
}

//받은 배열을 맵으로 변경하여 반환
function arrayToMap(array, friendsList) {
  const friendArray = array.flat();
  let friendsPoint = new Map();

  for (let i = 0; i < friendArray.length; i++) {
    if (isHimSelf(friendArray[i], friendsList)) continue;
    if (friendsPoint.has(friendArray[i])) {
      friendsPoint.set(friendArray[i], friendsPoint.get(friendArray[i]) + 10);
    } else {
      friendsPoint.set(friendArray[i], 10);
    }
  }
  return friendsPoint;
}

//배열의 요소가 친구 본인인지 평가하는 함수
function isHimSelf(person, friendsList) {
  return friendsList.includes(person);
}

//방문자 점수를 추가하는 함수
function allPoints(friendsPoint, visiter, friendsList) {
  visiter.map((visit) => {
    if (friendsPoint.has(visit)) {
      friendsPoint.set(visit, friendsPoint.get(visit) + 1);
    } else if (!friendsPoint.has(visit) && !friendsList.includes(visit)) {
      friendsPoint.set(visit, 1);
    }
  });
  return friendsPoint;
}

//맵을 변환하여 점수순으로 정렬하고 반환하는 함수
function sortingMap(points) {
  const sortedArr = [...points];
  sortedArr.sort((a, b) => b[1] - a[1]);
  return sortedArr;
}

//메인함수
function friendsRecomand(userId, list, visiter) {
  let filteredList = myFriendsList(userId, list);
  let friendsList = removeMyUsername(userId, filteredList);
  let friendsFriendList = friendsFilter(friendsList, list, userId);
  let friendsPoint = arrayToMap(friendsFriendList, friendsList);
  let allPoint = allPoints(friendsPoint, visiter, friendsList);
  let sortedList = sortingMap(allPoint);

  const result = new Map(sortedList);
  return [...result.keys()];
}
