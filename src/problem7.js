// 기능 목록
// 1. user의 친구 구하기
// 2. user의 친구의 친구 구하기
// 3. user의 친구의 친구에게 10점씩 점수 주기
// 4. visitors 배열의 요소 1점씩 점수 주기 (단, user의 친구는 0점)
// 5. 3을 점수 높은 순으로 정렬하기
// 6. 단, 동점을 경우 이름순으로 정렬하기
// 7. answer는 최대 5명

// user의 친구를 구하는 함수
function findUserFriends(user, friends) {
  let userFriends = [];

  friends
    .filter((el) => el.includes(user))
    .flat()
    .forEach((el) => (el !== user ? userFriends.push(el) : ""));

  return userFriends;
}

// user의 친구의 친구를 구하는 함수
function findUserFriendsOfFriends(user, friends, userFriends) {
  let filteredArr = [];

  friends
    .filter((el) => !el.includes(user))
    .filter((el) => {
      for (let i = 0; i < userFriends.length; i++) {
        for (let j = 0; j < el.length; j++) {
          if (el.includes(userFriends[i]) && el[j] !== userFriends[i])
            filteredArr.push(el[j]);
        }
      }
    });

  return filteredArr;
}

// user의 친구의 친구에게 10점씩 부여하는 함수
function giveTenScoreToUserFriendsOfFriends(user, friends, userFriends) {
  let idScoreObj = {};
  let userFriendsOfFriends = findUserFriendsOfFriends(
    user,
    friends,
    userFriends
  );

  for (let i = 0; i < userFriendsOfFriends.length; i++) {
    let name = userFriendsOfFriends[i];
    // idScoreObj객체에 키가 있을 때
    if (idScoreObj.hasOwnProperty(name)) idScoreObj[name] += 10;
    // idScoreObj객체에 키가 없을 때
    else idScoreObj[name] = 10;
  }

  return idScoreObj;
}

// visitors 배열의 요소에게 1점씩 부여하는 함수
function giveOneScoreToVisitors(visitors, userFriends, idScoreObj) {
  visitors.forEach((el) => {
    // user의 친구가 아니고
    if (!userFriends.includes(el)) {
      // idScoreObj객체에 키가 있을 때
      if (idScoreObj.hasOwnProperty(el)) idScoreObj[el] += 1;
      // idScoreObj객체에 키가 없을 때
      else idScoreObj[el] = 1;
    }
  });

  return idScoreObj;
}

// sort시키기 위해 idScoreObj를 배열로 만드는 함수
function makeObjToArr(idScoreObj) {
  let idScoreArr = [];

  for (let id in idScoreObj) {
    idScoreArr.push([id, idScoreObj[id]]);
  }

  return idScoreArr;
}

// idScoreArr를 점수 높은 순으로 정렬시키는 함수 (단, 점수가 같은 경우 이름순으로 정렬)
function sortable(idScoreArr) {
  // 점수 높은 순으로 정렬
  idScoreArr.sort((a, b) => {
    // 점수가 같은 경우 이름 순으로 정렬
    if (b[1] === a[1]) {
      return b[0] > a[0] ? -1 : 1;
    } else return b[1] - a[1];
  });
}

function problem7(user, friends, visitors) {
  // 점수가 높은 순으로 최대 5명 정렬
  let answer = [];
  let userFriends = findUserFriends(user, friends);
  let idScoreObj = giveTenScoreToUserFriendsOfFriends(
    user,
    friends,
    userFriends
  );

  idScoreObj = giveOneScoreToVisitors(visitors, userFriends, idScoreObj);

  let idScoreArr = makeObjToArr(idScoreObj);

  sortable(idScoreArr);
  // answer 배열에 이름만 담기
  idScoreArr.map((el) => answer.push(el[0]));
  // answer은 최대 5명
  if (answer.length > 5) answer.slice(0, 5);

  return answer;
}

module.exports = problem7;
