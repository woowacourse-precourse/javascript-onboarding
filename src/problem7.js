function problem7(user, friends, visitors) {
  var answer;
  answer = [];

  var friends_list = [];
  var friend;
  var recommend_list = [];
  var recommend = {};

  friends.forEach((element) => {
    if (element.includes(user)) {
      if (element[0] !== user) {
        friends_list.push(element[0]);
      } else {
        friends_list.push(element[1]);
      }
    }
  });

  //친구 기준 추천
  for (var i = 0; i < friends_list.length; i++) {
    friend = friends_list[i];

    friends.forEach((element) => {
      if (element.includes(friend) && !element.includes(user)) {
        if (element[0] !== friend) {
          if (element[0] in recommend) {
            //dict 안에 이미 존재하면
            recommend[element[0]] += 10;
          } else {
            recommend[element[0]] = 10;
            recommend_list.push([element[0]]);
          }
        } else {
          if (element[1] in recommend) {
            recommend[element[1]] += 10;
          } else {
            recommend[element[1]] = 10;
            recommend_list.push([element[1]]);
          }
        }
      }
    });
  }

  visitors.forEach((element) => {
    if (!friends_list.includes(element)) {
      if (element in recommend) {
        recommend[element] += 1;
      } else {
        recommend[element] = 1;
        recommend_list.push([element]);
      }
    }
  });

  recommend_list.forEach((element) => {
    element.push(recommend[element[0]]);
  });

  recommend_list.sort(function (a, b) {
    //점수별 정렬
    return b[1] - a[1];
  });

  recommend_list.sort(function (a, b) {
    //같은 점수일 때 오름차순 정렬
    if (a[1] === b[1]) {
      if (a[0] > b[0]) {
        return 1;
      }
      if (a[0] < b[0]) {
        return -1;
      }
    }
  });

  if (recommend_list.length > 5) {
    // 5명 초과 시 잘라내기
    recommend_list.slice(0, 5);
  }

  recommend_list.forEach((element) => {
    answer.push(element[0]);
  });

  return answer;
}

module.exports = problem7;
