
function findUserFriends(user, friends) {
  return friends.filter(el => el.includes(user)).flat().filter(el => el !== user);
}

function relationFriends(user, friends) {
  const relations = [];
  for (const relation of friends) {
      if(!relation.includes(user)) {
          relations.push(relation);
      }
  }
    return relations.flat()
}

function checkVisitorScore(visitors) {
  const map = new Map();
  for (let visitor of visitors) {
    if (!map.has(visitor)) {
      map.set(visitor, 1);
    } else if (map.get(visitor) !== 0) {
      map.set(visitor, map.get(visitor) + 1);
    }
  }
  return map;
}


function friendsScore(user, friends, visitor) {
  const friendsOfUser = findUserFriends(user, friends);
  const relation = relationFriends(user, friends);
  const visitorScore = checkVisitorScore(visitor);
  const score = new Map(visitorScore);

  for (const friend of relation) {
      if(friend !== friendsOfUser[0] && friend !== friendsOfUser[1]) {
        if(!score.has(friend)) {
          score.set(friend, 10);
        } else {
          score.set(friend, score.get(friend) + 10);
        }
      }
  }
    return score;
}







function problem7(user, friends, visitors) {
  
}

module.exports = problem7;

