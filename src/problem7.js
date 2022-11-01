function problem7(user, friends, visitors) {
  let answer = [];
  // 사용자의 친구들을 먼저 찾는다.
  const [knownFriends, newFriends] = findKnownFriend(user, friends);

  // 추천 점수 판을 만든다.
  let friendScore = createScore(newFriends, visitors, knownFriends);

  // 사용자가 이미 알고 있는 친구들을 알고 있는 친구들을 찾는다.
  // (사용자와 함께 아는 친구) 항목
  friendScore = eachKnownFriend(knownFriends, newFriends, friendScore);
  
  // 타임 라인 방문기록으로 점수를 더한다.
  friendScore = visitorScore(visitors, friendScore, knownFriends);

  // 점수를 비교하고 이름을 오름차순으로 정렬하기 위해 2차원 배열로 바꾼다.
  const value = Object.values(friendScore);
  const key = Object.keys(friendScore);
  const ans = Array.from(Array(value.length), () => new Array(2));
  
  for (let i = 0; i < value.length; i++){
    ans[i][0] = value[i];
    ans[i][1] = key[i]
  }
  
  ans.sort((a, b) => {
    if (b[0] >= a[0]) {
      if (b[0] === a[0]) {
        if (b[1] < a[1]) return 1;
        else return -1;
      }
      return 1;
    }
    else return -1;
  })
  
  ans.map((el) => {
    answer.push(el[1]);
  });

  return answer;
}



// 사용자가 원래 알고 있는 친구를 찾는 함수.
const findKnownFriend = (userName, friendArr) => {
  const knownFriend = [];
  friendArr.map((el) => {
    if (el.includes(userName)) {
      let friend = el.join('').split(userName).join('');
      knownFriend.push(friend);
    }
  })
  // friends 배열에서 사용자가 들어가있는 항목 삭제
  const newFriendArr = friendArr.filter((el) => {
    if (!el.includes(userName)) return true;
  })
  return [knownFriend, newFriendArr];
}

// 사용자가 이미 알고 있는 친구를 아는 사람을 찾는 함수.
const eachKnownFriend = (knownFriendArr, friendArr, scoreArr) => {
  knownFriendArr.map((friend) => {
    friendArr.map((el) => {
      if (el.includes(friend)) {
        let eachKnFriend = el.join('').split(friend).join('');
        scoreArr[eachKnFriend] += 10;
      }
    })
  })
  return scoreArr;
}


// 타임라인 점수 구하는 함수.
const visitorScore = (visitArr, scoreArr, knFriendArr) => {
  visitArr.map((visitor) => {
    if(!knFriendArr.includes(visitor)) scoreArr[visitor] += 1;
  })
  return scoreArr;
}

// 점수를 기록할 score 배열
const createScore = (friendArr, visitArr, knFriendArr) => {
  const friendSet = new Set();
  friendArr.map((friend) => {
    for (let el of friend) {
      if (!friendSet.has(el)) friendSet.add(el);
    }
  })
  const friend = Array.from(friendSet);
  const score = [];

  friend.map((el) => {
    if(!knFriendArr.includes(el)) score[el] = 0;
  })

  visitArr.map((el) => {
    if (!knFriendArr.includes(el)) score[el] = 0;
  })
  
  return score;
} 

module.exports = problem7;
