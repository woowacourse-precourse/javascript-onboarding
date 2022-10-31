function problem7(user, friends, visitors) {
  const userFriendList = setFriendList(friends.flat(), user);
  const unknownVisitors = visitors.filter(
    (name) => userFriendList.indexOf(name) < 0
  );
  const newRecommendScore = [];
  const result = [];
  let newFriendList = [];
  let newFriendScore = {};

  for (let i = 0; i < userFriendList.length; i++) {
    const friendFriendList = setFriendList(friends.flat(), userFriendList[i]);
    newFriendList.push(...friendFriendList);
  }

  newFriendList = newFriendList.filter((name) => name !== user);

  const recommendScore = setScore(newFriendList, 10).concat(
    setScore(unknownVisitors, 1)
  );

  recommendScore.forEach((obj) => {
    newFriendScore = {
      ...newFriendScore,
      [obj.name]: [...(newFriendScore[obj.name] || []), obj.score],
    };
  });

  for (const [key] of Object.entries(newFriendScore)) {
    const hi = newFriendScore[key].reduce((a, b) => a + b);

    newRecommendScore.push({ name: key, score: hi });
  }

  const scoreList = setHighScore(newRecommendScore);

  for (let i = 0; i < scoreList.length && i < 5; i++) {
    result.push(scoreList[i].name);
  }

  return result;
}

/**
 * array의 score, name 순으로 내림차순 정렬해 주는 함수
 * @param {*} obj 정렬할 명단
 * @returns Object, {name: name, score: score}
 */
function setHighScore(obj) {
  const result = obj.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (a.score < b.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    if (a.score == b.score) {
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    }
  });
  return result;
}

/**
 * array에서 검색되는 수 만큼 score를 곱해주는 함수
 * @param {string[]} array 검색할 명단
 * @param {number} score 점수
 * @returns Array, {name: array 요소, score: 점수}
 */
function setScore(array, score) {
  const set = new Set(array);
  const newArray = [...set];
  const result = [];

  for (let i = 0; i < newArray.length; i++) {
    result.push({
      name: newArray[i],
      score: score * array.filter((item) => item == newArray[i]).length,
    });
  }
  return result;
}

/**
 * array에서 userName이 포함된 배열을 확인하는 함수
 * @param {string[]} array 검색할 명단
 * @param {string} userName 검색할 사용자 이름
 * @returns Array, 사용자 이름과 연관된 이름
 */
function setFriendList(array, userName) {
  const result = [];
  let index = array.indexOf(userName);

  while (index != -1) {
    if (index % 2 == 0) {
      result.push(array[index + 1]);
    } else if (index % 2 == 1) {
      result.push(array[index - 1]);
    }
    index = array.indexOf(userName, index + 1);
  }
  return result;
}

module.exports = problem7;
