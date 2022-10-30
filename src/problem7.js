function problem7(user, friends, visitors) {
  var answer = [];
  // 1. friends 안에서 user랑 같은 배열에 있는 친구를 찾고 userFriends 배열로 넣기
  // 2. 그 친구와 친구인 사람을 찾아서 새 이차원 배열 recommand에 [10, '이름'] 이렇게 넣고 이미 있으면 +10
  // 3. visitors 배열을 돌면서 recommand에 [1, '이름'] 이렇게 넣고 이미 있으면 +1
  // 4. 내림차순으로 정렬하고 5개까지 자르고 이름만 뽑아서 새 배열 result에 넣기

  // 1. friends 안에서 user랑 같은 배열에 있는 친구를 찾고 userFriends 배열로 넣기
  let userFriends = [];

  friends
    .filter((array) => {
      if (array.includes(user)) {
        return true;
      } else {
        return false;
      }
    })
    .map((array) => {
      if (array[0] === user) {
        userFriends.push(array[1]);
      } else {
        userFriends.push(array[0]);
      }
    });

  // 2. 그 친구와 친구인 사람을 찾아서 새 이차원 배열 recommand에 [10, '이름'] 이렇게 넣고 이미 있으면 +10
  let recommand = [];

  userFriends.map((friend) => {
    friends
      .filter((array) => {
        if (array.includes(friend)) {
          return true;
        } else {
          return false;
        }
      })
      .filter((array) => {
        if (array.includes(user)) {
          return false;
        } else {
          return true;
        }
      })
      .map((array) => {
        if (array[0] === friend) {
          let includeCheck = false;
          recommand.map((orginArray) => {
            if (orginArray.includes(array[1])) {
              includeCheck = true;
            }
          });
          if (includeCheck) {
            recommand.map((originArray) => {
              if (originArray.includes(array[1])) {
                originArray[0] += 10;
              }
            });
          } else {
            recommand.push([10, array[1]]);
          }
        } else {
          let includeCheck = false;
          recommand.map((orginArray) => {
            if (orginArray.includes(array[0])) {
              includeCheck = true;
            }
          });
          if (includeCheck) {
            recommand.map((originArray) => {
              if (originArray.includes(array[0])) {
                originArray[0] += 10;
              }
            });
          } else {
            recommand.push([10, array[0]]);
          }
        }
      });
  });

  return answer;
}

module.exports = problem7;
