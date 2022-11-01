function problem7(user, friends, visitors) {
  // user는 길이가 1이상 30이하인 문자열이다. 아닌 경우 "Error: user의 길이가 1이상 30이하인 문자열이어야 합니다"라는 문자열을 반환한다.
  if (user.length < 1 || user.length > 30) return "Error: user의 길이가 1이상 30이하인 문자열이어야 합니다";

  // friends는 길이가 1 이상 10,000 이하인 배열이다. 아닌 경우 "Error: friends는 길이가 1이상 10,000 이하인 배열이어야 합니다"라는 문자열을 반환한다.
  if (friends.length < 1 || friends.length > 10000) return "Error: friends는 길이가 1이상 10,000 이하인 배열이어야 합니다";

  // 아이디는 길이가 1 이상 30 이하인 문자열이다. 아닌 경우 "Error: friends 아이디의 길이가 1 이상 30 이하인 문자열이어야 합니다"라는 문자열을 반환한다.
  if (
    !friends.every(
      ([friendA, friendB]) =>
        friendA.length >= 1 &&
        friendB.length >= 1 &&
        friendA.length < 30 &&
        friendB.length < 30 &&
        typeof friendA === "string" &&
        typeof friendB === "string"
    )
  )
    return "Error: friends 아이디의 길이가 1 이상 30 이하인 문자열이어야 합니다";

  // visitors는 길이가 0 이상 10,000 이하인 배열이다. 아닌 경우 "Error: visitors 아이디의 길이가 0 이상 10,000 이하인 배열이어야 합니다"라는 문자열을 반환한다.
  if (visitors.length < 0 || visitors.length > 10000 || !Array.isArray(visitors))
    return "Error: visitors 아이디의 길이가 0 이상 10,000 이하인 배열이어야 합니다";

  // 사용자 아이디는 알파벳 소문자로만 이루어져 있다. 아닌 경우 "Error: user의 아이디는 알파벳 소문자로만 이루어져 있어야 한다"라는 문자열을 반환한다.
  const regex = /^[a-z]*$/;
  if (!regex.test(user)) return "Error: user의 아이디는 알파벳 소문자로만 이루어져 있어야 한다";

  // friends를 순회하여 user의 친구를 배열에 담는다.
  const userFriends = [];

  friends.forEach((friend) => {
    const [a, b] = friend;
    if (a === user && !userFriends.includes(b)) {
      userFriends.push(b);
      return;
    }
    if (b === user && !userFriends.includes(a)) {
      userFriends.push(a);
    }
  });

  // friends를 순회하여 scores 객체에 친구의 이름과 점수를 담는다. 이미 있다면 +10점, 없다면 새로 만들어 10점을 준다.
  const scores = {};

  friends.forEach((friend) => {
    const [a, b] = friend;
    // a, b 중 user의 친구가 아니라면 제외
    if (userFriends.includes(a) || userFriends.includes(b)) {
      if (a in scores) {
        scores[a] += 10;
      } else {
        scores[a] = 10;
      }
      if (b in scores) {
        scores[b] += 10;
      } else {
        scores[b] = 10;
      }
    }
  });

  // visitors를 순회하여 scores 객체에 친구의 이름과 점수를 담는다. 이미 있다면 +1점, 없다면 새로 만들어 1점을 준다.
  visitors.forEach((visitor) => {
    if (visitor in scores) {
      scores[visitor] += 1;
    } else {
      scores[visitor] = 1;
    }
  });

  // 점수가 0점의 경우 추천하지 않는다.
  // scores를 배열로 만들어 점수 기준 오름차순으로 정렬한다.
  // 추천 점수가 같은 경우 이름순으로 정렬한다.
  let scoresArray = Object.entries(scores);
  scoresArray = scoresArray
    .filter(([name, score]) => score !== 0)
    .sort((a, b) => b[1] - a[1])
    .sort(([nameA, scoreA], [nameB, scoreB]) => {
      if (scoreA === scoreB) {
        if (nameA > nameB) return 1;
        if (nameA < nameB) return -1;
        else return 0;
      }
      return 0;
    });

  // 정렬한 scores를 순회하며 반환할 배열에 조건에 맞게 푸쉬한다. (user와 이미 친구이거나, result의 길이가 5에 도달했을 때, user 본인일 때 푸쉬하지 않는다.)
  const result = [];

  scoresArray.forEach((element) => {
    const name = element[0];

    // user와 이미 친구라면, 친구 추천할 사람이 5명이 넘은 경우, user 본인인 경우를 제외한다.
    if (!userFriends.includes(name) && result.length <= 5 && name !== user) {
      result.push(name);
    }
  });

  return result;
}

module.exports = problem7;
