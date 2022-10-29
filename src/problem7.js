function problem7(user, friends, visitors) {
  let score = {};
  let one = []; //일촌
  let friend = new Set([]);
  let arr = [];

  for (let i = 0; i < friends.length; i++) {
    //user의 친구 일촌
    if (friends[i].includes(user)) {
      one.push(friends[i][0]);
    }
    //친구목록에 친구의 친구 추가
    friend.add(friends[i][0]);
    friend.add(friends[i][1]);
  }
  //visitors 친구들을 친구 목록에 추가
  for (let i = 0; i < visitors.length; i++) {
    friend.add(visitors[i]);
  }
  friends_list = [...friend];
  //0점으로 초기화
  for (let i = 0; i < friends_list.length; i++) {
    score[friends_list[i]] = 0;
  }
  //10점이 추가될 친구 안돌, 준
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][1].includes("andole")) {
      score[friends[i][1]] += 10;
    }
    if (friends[i][1].includes("jun")) {
      score[friends[i][1]] += 10;
    }
  }
  //visitors에서 친구(일촌 관계)빼기
  //visit = visitors.filter((x) => !one.includes(x));
  for (let i = 0; i <= visitors.length; i++) {
    if (visitors[i] === friends_list[5]) score[visitors[i]] += 1;
  }
  //점수 정렬
  for (let name in score) {
    arr.push([name, score[name]]);
  }
  arr.sort((a, b) => b[1] - a[1]);

  arr = arr.slice(0, 3).map((x) => x[0]);
  return arr;
}

module.exports = problem7;
