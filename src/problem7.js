// 기능 목록
// 1. friends 배열을 객체로 변경한다.
// 2. value에 user을 포함하고 있는 key의 다른 value들의 점수를 10점씩 올려준다.
// 3. visitors들의 점수를 1점씩 올려준다.
// 4. 점수가 있는 친구들을 점수 순서대로 정렬한다.

function problem7(user, friends, visitors) {
  let obj = {};
  for(let [a, b] of friends) {
    if(obj[a]) {
      obj[a].push(b);
    }else {
      obj[a] = [b];
    }

    if(obj[b]) {
      obj[b].push(a);
    }else {
      obj[b] = [a];
    }
  }

  console.log(obj);
}

// problem7(
//   "mrko",
//   [
//     ["donut", "andole"],
//     ["donut", "jun"],
//     ["donut", "mrko"],
//     ["shakevan", "andole"],
//     ["shakevan", "jun"],
//     ["shakevan", "mrko"],
//   ],
//   ["bedi", "bedi", "donut", "bedi", "shakevan"]
// )

module.exports = problem7;
