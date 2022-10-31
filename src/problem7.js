function problem7(user, friends, visitors) {
  const userFriends = getUserFreinds(user, friends);
  const othersFriends = getOthersFriends(user, friends);
  const rank = new Map();

  for ( let friend of userFriends ) {
    for( let [A, B] of othersFriends ) {
      if( A === friend ){
        rank.has(B) 
        ? rank.set(B, rank.get(B)+10)
        : rank.set(B, (rank.get(B)||0)+10);  
      } else if ( B === friend) {
        rank.has(A) 
        ? rank.set(A, rank.get(A)+10)
        : rank.set(A, (rank.get(A)||0)+10);
      }
    }
  }

  for ( let name of visitors ) {
    if(rank.has(name)) rank.set(name, rank.get(name)+1)
    else if (!userFriends.includes(name)) rank.set(name, (rank.get(name)||0)+1);  
  }   

  /* Map 객체인 rank를 배열로 바꿔주고, sort를 통해 내가 원하는 순서대로 정렬해준다음에 
     .flat.filter() 메소드를 통해서 점수를 제거한 뒤 반환합니다. */
  return [...rank].sort(sortAlgorithm).flat().filter((v) => isNaN(v));
}

/**
 * @description user와 친구관계인 이름만 반환합니다.
 * @param {string} user 
 * @param {string[][]} relationship 
 * @returns {string[][]} user's relationship
 */
function getUserFreinds(user, relationship) {
  return relationship.filter((rel) => rel.includes(user))
                     .flat()
                     .filter(name => name !== user);
}

/**
 * @description user와 연결되지않은 인간관계를 반홥합니다. 문자열 2차원배열로 반환합니다.
 * @param {string} user 
 * @param {string[][]} relationship 
 * @returns {string[][]} others relationship
 */
function getOthersFriends(user, relationship) {
  return relationship.filter((v) => !(v.includes(user)));
} 

/**
 * @description 1.점수 2.알파벳 기준으로 정렬해주는 함수
 * @param {[string, number]} a
 * @param {[string, number]} b
 * @returns {number} priorty
 */
function sortAlgorithm(a, b) {
  if ( a[1] < b[1] ) return 1;
  if ( a[1] > b[1] ) return -1;
  if ( a[0] < b[0] ) return -1;
}

module.exports = problem7;
