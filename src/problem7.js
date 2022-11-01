// 기능 목록
// 1. friends 배열을 객체로 변경한다.
// 2. value에 user을 포함하고 있는 key의 다른 value들의 점수를 10점씩 올려준다.
// 3. visitors들의 점수를 1점씩 올려준다.
// 4. 점수가 있는 친구들을 점수 순서대로 정렬한다.
// + 에러 처리 (원래 친구가 없는 경우 / 문자열 정렬 코드 수정)

const changeArrToObj = (arr) => {
  let obj = {};
  for(let [a, b] of arr) {
    if(obj[a]) obj[a].push(b);
    else obj[a] = [b];

    if(obj[b]) obj[b].push(a);
    else obj[b] = [a];
  }

  return obj
}

const changeObjToArr = (obj) => {
  let arr = [];
  for(let key in obj) {
    arr.push([key, obj[key]]);
  }

  return arr;
}

const searchFriendOfFriend = (obj, user) => {
  let score = {};
  for(let key in obj) {
    if(obj[key].includes(user)) {
      obj[key].map(v => {
        if(score[v] && v !== user) score[v] += 10;
        else if(!score[v] && v !== user) score[v] = 10;
      });
    }
  }

  let alreadyFriend;
  if(obj[user]) alreadyFriend = obj[user];
  else alreadyFriend = [];

  return [score, alreadyFriend];
}

const searchVisitor = (score, alreadyFriend, visitors) => {
  for(let visitor of visitors) {
    if(alreadyFriend.includes(visitor)) continue;

    if(score[visitor]) score[visitor]++;
    else score[visitor] = 1;
  }

  return score;
}

function problem7(user, friends, visitors) {
  // 배열 -> 객체
  let obj = changeArrToObj(friends);

  // 점수 부여
  let [score, alreadyFriend] = searchFriendOfFriend(obj, user);
  score = searchVisitor(score, alreadyFriend, visitors);

  // 정렬
  let sortable = changeObjToArr(score);
  sortable.sort((a, b) => {
    if(a[1] === b[1]) {
      if(a > b) return 1;
      else if(a < b) return -1;
      else return 0;
    }
    else return b[1] - a[1];
  });

  // 이름만 가져오기 
  let result = sortable
    .filter(v => !alreadyFriend.includes(v[0]))
    .map(v => v[0]);
  return result;
}

module.exports = problem7;