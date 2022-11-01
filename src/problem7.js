const FRIENDS_LENGTH = 2;

function problem7(user, friends, visitors) {
  const UFV_LIST = {
    user: user,
    friends: friends,
    visitors: visitors,
  };
  const FRIENDS_LIST = [];
  const RECOMMEND_LIST = [];

  Friends_Of_User(UFV_LIST,FRIENDS_LIST);
  Friends_Recommend_List(UFV_LIST,FRIENDS_LIST,RECOMMEND_LIST)
  let LAST_LIST = Arr_Sort(RECOMMEND_LIST);
  return Arr_Length_Five(LAST_LIST);
}
// user 와 친구가 되어 있는 확인 하고 친구가 되어 있는 목록들은 FRIENDS_LIST에 push하고 UFV_LIST에서는 삭제한다.
const Friends_Of_User = (UFV_LIST, FRIENDS_LIST) => {
  for (let i = 0; i < UFV_LIST.friends.length; i++) {
    for (let j = 0; j < FRIENDS_LENGTH; j++) {
      if (UFV_LIST.user === UFV_LIST.friends[i][j]) {
        FRIENDS_LIST.push(UFV_LIST.friends[i][1 - j]);
        UFV_LIST.friends.splice(i, 1);
      };
    };
  };
}
// FRIENDS_LIST에 담겨져 있는 사람이 UFV_LIST에 있다면 이미 user와 친구가 되어 있기에 추천하지 않는다.
// 그렇지 않은 경우 추천을 하여 점수를 카운팅 한다.
// visitors 목록에 들어있는 사람들도 FRIENDS_LIST에 담겨져 있는 사람들과 대조 후 없으면 점수를 카운팅 한다.
 const Friends_Recommend_List = (UFV_LIST, FRIENDS_LIST, RECOMMEND_LIST) => {
  for (let i = 0; i < UFV_LIST.friends.length; i++) {
    if (((FRIENDS_LIST.indexOf(UFV_LIST.friends[i][0]) >= 0) && (FRIENDS_LIST.indexOf(UFV_LIST.friends[i][1]) >= 0))) {
      continue;
    };
    for (let j = 0; j < FRIENDS_LENGTH; j++) {
      if (!(FRIENDS_LIST.indexOf(UFV_LIST.friends[i][j]) >= 0)) {
        continue;
      };
      if (!(UFV_LIST.friends[i][1 - j] in RECOMMEND_LIST)) {
        RECOMMEND_LIST[UFV_LIST.friends[i][1 - j]] = 10;
        continue;
      };
      RECOMMEND_LIST[UFV_LIST.friends[i][1 - j]] += 10;
    };
  };

  for (let i = 0; i < UFV_LIST.visitors.length; i++) {
    if (!(FRIENDS_LIST.indexOf(UFV_LIST.visitors[i]) === -1))
      continue;
    if (!(UFV_LIST.visitors[i] in RECOMMEND_LIST)) {
      RECOMMEND_LIST[UFV_LIST.visitors[i]] = 1;
      continue;
    };
    RECOMMEND_LIST[UFV_LIST.visitors[i]] += 1;
  };
};
// 대조 후 모든 추천목록을 만든 목록을 점수 기준으로 내림차순 후 점수가 같으면 이름순으로 오름차순 정렬을 해준다.
 const Arr_Sort = (RECOMMEND_LIST) => {
  return Object.entries(RECOMMEND_LIST).sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[0] > b[0]) {
        return 1;
      };
      if (a[0] < b[0]) {
        return -1;
      };
    };
    if (a[1] > b[1]) {
      return -1;
    };
    if (a[1] < b[1]) {
      return 1;
    };
  });
};
// 최종 목록에는 5명이 있어야 하므로 정렬한 목록에서 우선순위가 높은 순으로 5명을 추출하고 반환해준다.
 const Arr_Length_Five = (arr) => {
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
};

module.exports = problem7;
