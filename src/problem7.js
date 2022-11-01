function problem7(user, friends, visitors) {
  // const user = "mrko"
  // const friends = [ ["donut", "bndole"], ["donut", "aun"], ["donut", "mrko"], ["shakevan", "bndole"], ["shakevan", "aun"], ["shakevan", "mrko"] ]
  // const visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"]
  let answer = {};
  let obj = {};

  //친구 관계를 정리하는 객체 obj를 만듬
  for (let el of friends) {
    let a = el[0];
    let b = el[1];
    if (obj.hasOwnProperty(a)) {
      obj[a].push(b);
    } else {
      obj[a] = [b];
    }

    if (obj.hasOwnProperty(b)) {
      obj[b].push(a);
    } else {
      obj[b] = [a];
    }
  }
  console.log(obj);
  console.log(
    "======================================================================"
  );

  //추천 점수 부여를 위한 answer객체 만듬
  for (let el in obj) {
    answer[el] = 0;
  }
  console.log(answer);
  console.log(
    "======================================================================"
  );

  /*
  1번 조건으로 점수 부여
  mrko의 친구들중 mrko를 제외한 친구의 친구들에게 점수부여
  예) mrko 친구중 donut  ---> donut의 친구는 [bndole,aun, mrko]가 있는데
  mrko를 제외한 bndole,aun은 사용자 즉 mrko와 중간다리 해줄수 있는 donut을 아는 친구들이다.
  * */
  let arr = obj[user];
  for (let el of arr) {
    obj[el].map((value) => {
      if (value !== user) answer[value] += 10;
    });
  }

  console.log(answer);
  console.log(
    "======================================================================"
  );

  //2번 조건으로 점수 부여
  visitors.map((value) => {
    if (answer.hasOwnProperty(value)) {
      answer[value] += 1;
    } else {
      answer[value] = 1;
    }
  });
  console.log(answer);
  console.log(
    "======================================================================"
  );

  /*
   이후에 정렬조건을 충족하고 0점인 친구들을 거르기 위해서 배열로 변화
   */
  answer = Object.entries(answer);
  console.log(answer);
  console.log(
    "======================================================================"
  );

  //정렬조건에 부합하게 배열객체 정렬
  answer.sort((a, b) => {
    let score = 0;
    if (b[1] - a[1] === 0) {
      score = a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0;
    } else {
      score = b[1] - a[1];
    }
    return score;
  });

  // console.log(answer);
  console.log(
    "======================================================================"
  );

  // 0점인 사람은 거르고 이미 mrko와 친구인 사람은 제외하는 코드
  answer = answer
    .filter((el) => el[1] !== 0 && !obj[user].includes(el[0]))
    .map((el) => el[0]);
  // console.log(answer);
  console.log(
    "======================================================================"
  );

  //이후 최대 5개까지 자르기
  if (answer.length > 5) answer = answer.slice(0, 5);
  // console.log(answer);
  console.log(
    "======================================================================"
  );

  return answer;
}

module.exports = problem7;
