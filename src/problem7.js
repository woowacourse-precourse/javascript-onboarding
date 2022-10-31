function problem7(user, friends, visitors) {
  let answer = [];
  user_friends = []; // user의 친구가 들어가 있는 리스트
  friends_dict = {}; // 친구들의 점수판을 위한 dictionary
  friends_array = []; // 친구 후보의 이름과 점수를 저장해서 sort하기 위한 배열

  // user의 친구 찾기
  for (friend of friends){
    if (friend.includes(user)) {
      if (friend[0] != user) {
        user_friends.push(friend[0]);
      } else {
        user_friends.push(friend[1]);
      }
    }
  }

  // 1. user와 공통된 친구가 있는 친구는 10점을 갖는다.
  // 각각의 user 친구에 대해서 
  for (user_friend of user_friends){
    for (friend of friends){
      // 만역 user의 친구와 친구인 다른 친구가 있다면, 그 친구는 new_friend
      if (friend.includes(user_friend)) {
        if (friend[0] != user_friend){
          new_friend = friend[0];
        } else if (friend[1] != user_friend){
          new_friend = friend[1];
        }
        
        // 새로운 친구가 점수판에 없는 경우 : 초기값을 10으로 설정
        if (!(new_friend in friends_dict)) {
          friends_dict[new_friend] = 10;
        } else {
          // 만약 새로운 친구가 이미 점수판에 포함되어 있다면, 원래 있는 값에 10을 더한다.
          friends_dict[new_friend] += 10;
        }
      }
    }
  }

  // 2. 방문자들은 1점씩 갖는다.
  for (visitor of visitors) {
    if (visitor in friends_dict){
      friends_dict[visitor] += 1;
    } else {
      friends_dict[visitor] = 1;
    }
  }

  delete friends_dict[user]; // user는 user 친구 후보 리스트에서 제외한다.

  // 이미 user 와 친구인 친구는 user 친구 후보 리스트에서 제외한다.
  for (user_friend of user_friends){
    delete friends_dict[user_friend];
  }

  // 점수 높은 순으로 정렬 + 동점이면 이름 정렬 (최대 5명)
  // 1) 객체에 있는 점수를 배열로 만들어서 [[이름1, 점수1], [이름2, 점수2], ...] 형태로 만들어준다.
  for (key in friends_dict){
    friends_array.push([key, friends_dict[key]]);
  }
  // 2) 정렬
  friends_array = friends_array.sort(function(a, b){
    if(a[0] < b[0]){
      return -1;
    } 
    if (a[0] == b[0]) {
      return 0;
    }
    if (a[0] > b[0]) {
      return 1;
    }
  });
  friends_array = friends_array.sort(function (a, b){
    if(a[1] > b[1]){
      return -1;
    } 
    if (a[1] == b[1]) {
      return 0;
    }
    if (a[1] < b[1]) {
      return 1;
    }
  });

  if (friends_array.length <= 5) {
    for (let index = 0; index < friends_array.length; index++) {
      answer.push(friends_array[index][0]);
    }
  } else {
    for (let index = 0; index < 5; index++) {
      answer.push(friends_array[index][0]);
    }
  }

  return answer;
}

// user = "mrko"
// friends = [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ]
// visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"]
// console.log(problem7(user, friends, visitors));

module.exports = problem7;
