function problem7(user, friends, visitors) {
  const userFriends = getUserFreinds(user, friends);
  const othersFriends = getOthersFriends(user, friends);

  console.log(userFriends);
  console.log(othersFriends);
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
