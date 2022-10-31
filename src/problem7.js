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

  console.log(userFriends)
  console.log(othersFriends)
  console.log(rank)

}

function getUserFreinds(user, relationship) {
  return relationship.filter((rel) => rel.includes(user))
                     .flat()
                     .filter(name => name !== user);
}

function getOthersFriends(user, relationship) {
  return relationship.filter((v) => !(v.includes(user)));
} 

const user = "mrko";
const friends =  [
  ["donut", "andole"], 
  ["donut", "jun"], 
  ["donut", "mrko"], 
  ["shakevan", "andole"], 
  ["shakevan", "jun"], 
  ["shakevan", "mrko"]
  ];
const visitors =  ["bedi", "bedi", "donut", "bedi", "shakevan"];

console.log(problem7(user, friends, visitors));

// module.exports = problem7;
