function problem7(user, friends) {
  var answer;
  let userFriend = [];
    for (let i = 0; i < friends.length; i++) {
        let findUserFriend = friends[i].indexOf(user);
        if (findUserFriend > 0) userFriend.push(friends[i][1 - findUserFriend]);
    }
    console.log(userFriend);

    
  return answer;
}

console.log(
    problem7(
        "mrko", 
        [
            ["donut", "andole"],
            ["donut", "jun"],
            ["donut", "mrko"],
            ["shakevan", "andole"],
            ["shakevan", "jun"],
            ["shakevan", "mrko"],
        ]
    )
);