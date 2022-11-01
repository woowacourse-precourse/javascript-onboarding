function problem7(user, friends, visitors) {
  var answer = [];
  var recommend_list = new Map();

  for (v of visitors) {
    if (recommend_list.has(v)) {
      recommend_list.set(v, recommend_list.get(v) + 1);
    } else {
      recommend_list.set(v, 1);
    }
  }

  var friend_map = new Map();
  for (f of friends) {
    if (!recommend_list.has(f[0]) && f[0] !== user) {
      recommend_list.set(f[0], 0);
    }
    if (!recommend_list.has(f[1]) && f[1] !== user) {
      recommend_list.set(f[1], 0);
    }

    if (friend_map.has(f[0])) {
      var f_list = friend_map.get(f[0]);
      friend_map.set(f[0], [...f_list, f[1]]);
    } else {
      friend_map.set(f[0], [f[1]]);
    }
    if (friend_map.has(f[1])) {
      var f_list = friend_map.get(f[1]);
      friend_map.set(f[1], [...f_list, f[0]]);
    } else {
      friend_map.set(f[1], [f[0]]);
    }
  }

  for (var name of recommend_list.keys()) {
    if (friend_map.has(name)) {
      // 이미 친구인 경우 추천 리스트에서 삭제
      if (friend_map.get(name).includes(user)) {
        recommend_list.delete(name);
      } else {
        var check_name = [];
        if (friend_map.has(user)) {
          check_name = friend_map.get(user);

          friend_map.get(name).forEach((myfriend) => {
            if (check_name.includes(myfriend)) {
              recommend_list.set(name, recommend_list.get(name) + 10);
            }
          });
        }
      }
    }
  }
  var mapToArr = [...recommend_list];

  // 이름 기준 오름차순 정렬
  mapToArr.sort((a, b) => a[0] - b[0]);
  // value 기준 내림차순 정렬
  mapToArr.sort((a, b) => b[1] - a[1]);

  cnt = 0;
  for (var i = 0; i < mapToArr.length; i++) {
    if (cnt === 5) {
      break;
    }
    if (mapToArr[i][1] !== 0) {
      answer.push(mapToArr[i][0]);
      cnt += 1;
    }
  }
  return answer;
}

module.exports = problem7;
