function problem7(user, friends, visitors) {
  const userName = user;
  const friendsList = friends;
  const visitorsList = visitors.filter(arr => arr !== userName);

  // 내(user) 친구 구하기
  let myFriends = [];
  for (let name of friends) {
    if (name[0] === userName) myFriends.push(a[1]);
    if (name[1] === userName) myFriends.push(a[0]);
  }

  // friends 목록에서 user의 친구 제거
  let removeUserArr = [];
  for (let i = 0; i < friendsList.length; i++) {
    if (!friendsList[i].includes(user)) {
      removeUserArr.push(friendsList[i]);
    }
  }
  // 목록에서 중복 제거
  const removeMyFriends = (arr1, arr2) => {
    return arr1.concat(arr2).filter(user => !arr1.includes(user) || !arr2.includes(user));
  };

  // 내 친구 제거 목록
  let friendListOfRemoveMyFriend = removeMyFriends(removeUserArr.flat(), myFriends);
  let visitorListOfRemoveMyFriend = removeMyFriends(visitorsList, myFriends);
  let removeOverlapFriendAndVisitor = [
    ...new Set(friendListOfRemoveMyFriend),
    ...new Set(visitorListOfRemoveMyFriend),
  ];

  // 점수 리스트
  const createPointList = Object.assign(
    {},
    ...removeOverlapFriendAndVisitor.map((key, i) => ({[key]: 0}))
  );
  // friends 점수 +10
  for (let friends of friendListOfRemoveMyFriend) {
    console.log(friends);
    createPointList[friends] += 10;
  }
  // visitors 점수 +1
  for (let visitor of visitorListOfRemoveMyFriend) {
    createPointList[visitor] += 1;
  }

  // 점수별로 정렬
  let pointArr = Object.entries(userPointList);
  pointArr.sort((a, b) => b[1] - a[1]);
  // 점수가 같은 사람끼리 이름순으로 정렬
  pointArr.sort((a, b) => {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;

    return a < b ? -1 : 1;
  });

  // 다섯명만 담기
  let maxFiveList = [];
  for (let i = 0; i < 5; i++) {
    maxFiveList.push(pointArr[i]);
  }

  // 추천 이름
  let result = [];
  for (let i = 0; i < maxFiveList.length; i++) {
    result.push(maxFiveList[i][0]);
  }
  return result;
}

module.exports = problem7;
