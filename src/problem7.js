function checkIdLength(arr) {
  let i = 0;
  let result;
  arr = arr.flat();
  while (i < arr.length) {
    if (arr[i].length >= 1 && arr[i].length <= 30) {
      i++;
      result = true;
    }
  }
  return result;
}

function findDuplicate(arr) {
  let i = 0;
  while (i < arr.length) {
    let possiblyDuplicates = arr.filter((item, index) => item.includes(arr[i][0]) && index !== arr.indexOf(arr[i]));
    possiblyDuplicates = possiblyDuplicates.filter(item => item.includes(arr[i][1]));
    i++;
    if (possiblyDuplicates.length === 0) {
      return true;
    } else if (possiblyDuplicates !== 0) {
      return false;
  }
}
}

function findFriends(arr, person) {
  let i = 0;
  let personFriends = [];
  while (i < arr.length) {
    if (arr[i].includes(person)) {
      personFriends.push(arr[i]);
    }
    i++;
  }
  personFriends = personFriends.flat().filter(element => element !== person);
  return personFriends;
}

function problem7(user, friends, visitors) {
  let friendsScore = {};
  let userFriends;

  if (user.length >= 1 && user.length <= 30) {
    if (user === user.toLowerCase()) {
      if (friends.length > 0 && friends.length < 10001) {
        if (friends.every(element => element.length === 2)) {
          if (checkIdLength(friends) === true) {
            if (findDuplicate(friends) === true) {
              userFriends = findFriends(friends, user);

              let i = 0;
              let userFriendsFriends = [];
              while (i < userFriends.length) {
                userFriendsFriends.push(findFriends(friends, userFriends[i]));
                i++;
              }
              userFriendsFriends = userFriendsFriends.flat().filter(element => element !== user);

              let j = 0;
              while (j < userFriendsFriends.length) {
                if (friendsScore.hasOwnProperty(userFriendsFriends[j])) {
                  friendsScore[userFriendsFriends[j]] = friendsScore[userFriendsFriends[j]] + 10;
                } else {
                  friendsScore[userFriendsFriends[j]] = 10;
                }
                j++;
              }
          }
          }
          }
        }
    } 
    
    }

    
  
  return answer;
}


module.exports = problem7;