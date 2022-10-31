function problem7(user, friends, visitors) {
  const userFriends = getUserFreinds(user, friends);

  
  return userFriends;
}

function getUserFreinds(user, relationship) {
  return relationship.filter((rel) => rel.includes(user))
                     .flat()
                     .filter(name => name !== user);
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
