// 방문자, 친구리스트 통해 친구 목록들 정리할 함수.
function makeFriendsList(mainUser, friends, visitors) {
  const userList = []; // 사용자 목록
  const hash = {};
  // 친구 목록들 정리.
  for (const [A, B] of friends) {
    if (hash[A] === undefined) {
      userList.push(A);
      hash[A] = [B];
    } else {
      hash[A].push(B);
    }

    if (hash[B] === undefined) {
      userList.push(B);
      hash[B] = [A];
    } else {
      hash[B].push(A);
    }
  }

  visitors.forEach((v) => {
    // 메인 유저 친구목록에 없을때만.
    if (hash[mainUser].indexOf(v) === -1 && !userList.includes(v)) {
      userList.push(v);
    }
  });

  return [hash, userList];
}

function problem7(user, friends, visitors) {
  let answer = [];
  const [friendList, userList] = makeFriendsList(user, friends, visitors); // 친구 목록들 담은 해시, 점수기록할 배열이랑 같이 쓸 유저이름배열
  const score = Array.from({ length: userList.length }, () => 0); // 점수들 기록할 배열
  const mainUserFriendList = friendList[user]; // 리턴값 찾아낼 친구목록 리스트

  // 메인 유저 친구목록 기준 친구의 친구들 점수 10점씩 올리기
  mainUserFriendList.forEach((v) => {
    friendList[v].forEach((username) => {
      if (username !== user) {
        const index = userList.indexOf(username);
        score[index] += 10;
      }
    });
  });

  // 방문자 처리
  visitors.forEach((v) => {
    const index = userList.indexOf(v);
    if (index > -1 && !mainUserFriendList.includes(v)) {
      score[index]++;
    }
  });

  let maxScore = Math.max(...score); // 최대 점수
  // 결과 추려내기
  while (maxScore > 0) {
    const temp = []; // 같은 점수 시 사전순으로 정리할 배열

    let index = score.indexOf(maxScore);
    while (index > -1) {
      temp.push(userList[index]);
      score[index] = 0;
      index = score.indexOf(maxScore);
    }
    temp.sort(); // 사전순 정렬
    answer.push(...temp); // answer에 결과 삽입
    maxScore = Math.max(...score); // 최대 점수
  }

  // 결과가 5개이상 들어가있을경우 (중복 결과가 많을 경우)
  if (answer.length > 5) {
    for (let i = answer.length; i > 5; i--) {
      answer.pop();
    }
  }
  return answer;
}

module.exports = problem7;
