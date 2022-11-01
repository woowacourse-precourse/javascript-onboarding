function problem7(user, friends, visitors) {
  let ogFriends = [];
  let newFriends = [];
  let storage = [];
  let sum = 1;

  let visitorsnewFriends = [];
  let storageForOrder = [];


  //1.기존 친구들은 누구인가?(친구들의 친구를 구하기 위한 장치)
  for (let i = 0; i < friends.length; i++) {
    if (friends[i][1] === user || friends[i][0] === user) {
      if (friends[i][0] === user) {
        ogFriends.push(friends[i][1]);
      }
      else {
        ogFriends.push(friends[i][0]);
      }
    }
  }



  //2.기존 친구의 친구들 배열 생성
  for (let j = 0; j < ogFriends.length; j++) {
    for (let k = 0; k < friends.length; k++) {
      if (friends[k][0] !== user && friends[k][1] !== user) {
        if (friends[k][1] === ogFriends[j] || friends[k][0] === ogFriends[j]) {
          if (friends[k][0] === ogFriends[j]) {
            newFriends.push(friends[k][1]);
          }
          else {
            newFriends.push(friends[k][0]);
          }
        }
      }
    }
  }
  newFriends.sort();

  //5. 방문자중 기존 친구가 아닌 이들 간추림.
  for (let c of visitors) {
    if (ogFriends.indexOf(c) === -1) {
      if (newFriends.indexOf(c) === -1) {
        visitorsnewFriends.push(c);
      }

    }
  }
  visitorsnewFriends.sort();


  //3.추천 친구
  for (let a = 0; a < newFriends.length; a++) {
    if (newFriends[a] === newFriends[a + 1]) {
      sum += 1
    } else {
      if (visitors.indexOf(newFriends[a]) >= 0) {
        let count = newFriends.filter(elem => newFriends[a] === elem).length;
        storage.push(`${(sum * 10) + count} : ${newFriends[a]}`);
        storageForOrder.push([(sum * 10) + count, newFriends[a]]);
        sum = 1;
        continue;
      }
      storage.push(`${sum * 10} : ${newFriends[a]}`);
      storageForOrder.push([(sum * 10), newFriends[a]]);
      sum = 1;
    }

  }


  //4. 방문자들을 배열에 추가
  if (visitorsnewFriends[0] === visitorsnewFriends[visitorsnewFriends.length - 1]) {
    sum = visitorsnewFriends.length;
    if (sum < 10) {
      storage.push(`0${sum} : ${visitorsnewFriends[0]}`);
    } else {
      storage.push(`${sum} : ${visitorsnewFriends[0]}`);
    }
  } else {
    //방문자들이 많을 시 다수를 상대로 비교함.
    for (let d = 0; d < visitorsnewFriends.length; d++) {
      if (visitorsnewFriends[d] === visitorsnewFriends[d + 1]) {
        sum += 1
      } else {
        if (sum < 10) {
          storage.push(`0${sum} : ${visitorsnewFriends[d]}`);
        } else {
          storage.push(`${sum} : ${visitorsnewFriends[d]}`);
        }
        sum = 1;
      }
    }
  }
  storageForOrder.sort().reverse();
  storage.sort().reverse();

  //5. 점수를 기준으로 정리해논 추천인들을 이름만 간추림.

  let answer = storage.map((elem) => {
    return elem.slice(5);
  })
  answer = answer.slice(0, 5);

  //6. 점수가 같을경우 순서 바꿔주기.
  for (let r = 0; r < storage.length - 1; r++) {
    for (let t = 0; t < storage.length; t++) {
      if (storage[r].slice(0, 2) === storage[r + 1].slice(0, 2)) {
        if (storage[r].slice(5) > storage[r + 1].slice(5)) {
          answer.splice(r, 1, storage[r + 1].slice(5));
          answer.splice(r + 1, 1, storage[r].slice(5));
        }
      }
    }

  }
  return answer;
}
module.exports = problem7;
