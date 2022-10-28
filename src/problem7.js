// 객체 정렬을 위한 함수
function objectSortFn(obj) {
  return Object.entries(obj)
    .sort(([keyA, valueA], [keyB, valueB]) => valueA === valueB ? keyA.localeCompare(keyB) : valueB - valueA);
}

function problem7(user, friends, visitors) {
  const obj = {};

  const notFriends = friends.filter(([A, B]) => (A !== user && B !== user));
  const alredyFriends = friends.filter(([A, B]) => !(A !== user && B !== user));
  const friendList = alredyFriends.flat(Infinity).filter(v => v !== user);

  // 이 부분 추후 수정
  for (const friend of notFriends) {
    const [A, B] = friend;
    if (friendList.includes(A)) {
      !obj[B] ? obj[B] = 10 : obj[B] += 10;
    } else if (friendList.includes(B)) {
      !obj[A] ? obj[A] = 10 : obj[A] += 10;
    }
  }

  for (const visit of visitors) {
    if (!friendList.includes(visit)) {
      !obj[visit] ? obj[visit] = 1 : obj[visit] += 1;
    }
  }

  const sortObj = objectSortFn(obj);
  const answer = sortObj.map(v => v[0]);

  return answer.length > 5 ? answer.slice(0, 5) : answer;
}

module.exports = problem7;
