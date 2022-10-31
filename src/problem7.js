function problem7(user, friends, visitors) {
  const FRIENDS_LENGTH = 2;
  const UFV_LIST = {
    user: user,
    friends: friends,
    visitors: visitors,
  }
  const FRIENDS_LIST = []
  for (let i = 0; i < UFV_LIST.friends.length; i++) {
    for (let j = 0; j < FRIENDS_LENGTH; j++) {
      if (UFV_LIST.user === UFV_LIST.friends[i][j]) {
        FRIENDS_LIST.push(UFV_LIST.friends[i][1 - j]);
        UFV_LIST.friends.splice(i, 1);
      }
    }
  }
  const RECOMMEND_LIST = [];
  for (let i = 0; i < UFV_LIST.friends.length; i++) {

    if (((FRIENDS_LIST.indexOf(UFV_LIST.friends[i][0]) >= 0) && (FRIENDS_LIST.indexOf(UFV_LIST.friends[i][1]) >= 0))) {
      continue;
    }
    for (let j = 0; j < FRIENDS_LENGTH; j++) {
      if (!(FRIENDS_LIST.indexOf(UFV_LIST.friends[i][j]) >= 0)) {
        continue;
      }
      if (!(UFV_LIST.friends[i][1 - j] in RECOMMEND_LIST)) {
        RECOMMEND_LIST[UFV_LIST.friends[i][1 - j]] = 10;
        continue;
      }
      RECOMMEND_LIST[UFV_LIST.friends[i][1 - j]] += 10;
    }
  };

  for (let i = 0; i < UFV_LIST.visitors.length; i++) {
    if (!(FRIENDS_LIST.indexOf(UFV_LIST.visitors[i]) === -1))
      continue;
    if (!(UFV_LIST.visitors[i] in RECOMMEND_LIST)) {
      RECOMMEND_LIST[UFV_LIST.visitors[i]] = 1;
      continue;
    }
    RECOMMEND_LIST[UFV_LIST.visitors[i]] += 1;
  };
  let LAST_LIST = Object.entries(RECOMMEND_LIST).sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[0] > b[0]) {
        return 1;
      }
      if (a[0] < b[0]) {
        return -1;
      }
    }
    if (a[1] > b[1]) {
      return -1;
    }
    if (a[1] < b[1]) {
      return 1;
    }
  });
  Arr_Length_Five(LAST_LIST);
  return Arr_Length_Five(LAST_LIST);
}

function Arr_Length_Five(arr) {
  let New_Arr = arr.map((e) => {
    return e[0];
  });
  let Last_Arr = [];
  for (let i = 0; i < New_Arr.length; i++) {
    if (i === 5) {
      break;
    }
    Last_Arr.push(New_Arr[i]);
  }
  return Last_Arr;
}

module.exports = problem7;
