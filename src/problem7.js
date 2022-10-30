function problem7(user, friends, visitors) {
  const friendsJSON = []
  friends.forEach(element => {
    handleFriend(friendsJSON, element[0], element[1]);
    handleFriend(friendsJSON, element[1], element[0]);
  });
  // console.log(friendsJSON)
  const relatedFriendsArray = checkFriendOfFriends(friendsJSON, user)
  // console.log(relatedFriendsArray)
  let points = [];
  figurePoints(points, 10, relatedFriendsArray)
  figurePoints(points, 1, visitors)
  console.log(points)
  points.sort((a, b) => b.points - a.points || b.id - a.id)
  // console.log(points)
  const answer = points.slice(0, 3).map((el) => el.id);
  return answer;
}

const handleFriend = (friendsJSON, from, to) => {
  const index = friendsJSON.findIndex((friend) => friend.id === from)
  if (index === -1) {
    friendsJSON.push({
      id: from,
      friends: new Set().add(to)
    });
  }
  else {
    friendsJSON[index].friends.add(to);
  }
}

const checkFriendOfFriends = (friendsJSON, user) => {
  const index = friendsJSON.findIndex((friend) => friend.id === user);
  const userFriends = Array.from(friendsJSON[index].friends);
  let temp = []
  userFriends.map((id) => {
    const idx = friendsJSON.findIndex((friend) => friend.id === id);
    return Array.from(friendsJSON[idx].friends).map((el) => {
      if (el !== user) {
        temp.push(el)
      }
    })
  })
  return temp;
}

const figurePoints = (points, point, arr) => {
  arr.map((id) => {
    const idx = points.findIndex((friend) => friend.id === id);
    if (idx === -1) {
      points.push({
        id: id,
        points: point
      })
    }
    else {
      points[idx].points += point
    }
  })
}

module.exports = problem7;
