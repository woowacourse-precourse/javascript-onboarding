function problem7(user, friends, visitors) {
  const userFriendList = setFriendList(friends.flat(), user);
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
