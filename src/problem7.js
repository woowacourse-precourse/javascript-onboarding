function problem7(user, friends, visitors) {
  const userName = user;
  const allUserList = friends.flat().filter(arr => arr !== userName);
  const delDupUserList = [...new Set([...new Set(allUserList), ...new Set(visitors)])].filter(
    arr => arr !== userName
  );

  // 점수 리스트
  const userPointList = Object.assign({}, ...delDupUserList.map((key, i) => ({[key]: 0})));
  // friends 점수 +10
  for (let friends of allUserList) {
    userPointList[friends] += 10;
  }
  // visitors 점수 +1
  for (let visitor of visitors) {
    userPointList[visitor] += 1;
  }

  // user의 친구 구하기
  let myFriends = [];
  for (let a of friends) {
    if (a[0] === userName) {
      myFriends.push(a[1]);
    }
    if (a[1] === userName) {
      myFriends.push(a[0]);
    }
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
  // 점수가 0점일 경우 제외
  for (let i = 0; i < maxFiveList.length; i++) {
    if (maxFiveList[i][1] === 0) {
      maxFiveList.splice(i, 1);
    }
  }
  // 내 친구 제외
  for (let i = 0; i < maxFiveList.length; i++) {
    for (let j = 0; j < myFriends.length; j++) {
      if (maxFiveList[i][0] === myFriends[j]) {
        maxFiveList.splice(i, 1);
      }
    }
  }
}

module.exports = problem7;
