function problem7(user, friends, visitors) {
  var answer=[];
  let list = [], alreadyFriends = [];
  // find already friends
  for(let friend of friends) {
    if(friend.includes(user)) {
      if(friend.indexOf(user)== 1) {
        alreadyFriends.push(friend[0]);
      } else {
        alreadyFriends.push(friend[1]);
      }
    }
  }
  // friend score
  for(let friend of friends) {
    if(!friend.includes(user)) {
      for(let alreadyF of  alreadyFriends) {
        if(friend.includes(alreadyF)) {
          var inList = false;
          if(friend.indexOf(alreadyF) == 1) {
            for(let element of list) {
              if(friend[0] == element[0]) {
                inList = true;
                break;
              }
            }
            if(!inList) {
              let arr = new Array(2);
              arr[0] = friend[0];
              arr[1] = 10;
              list.push(arr);
            }
          } else {
            for(let element of list) {
              if(friend[1] == element[0]) {
                inList = true;
                break;
              }
            }
            if(!inList) {
              let arr = new Array(2);
              arr[0] = friend[1];
              arr[1] = 10;
              list.push(arr);
            }
          }
        }
      }
    }
  }
  // visit score
  for(let visitor of visitors) {
    var inList = false;
    let locIndex = -1;
    for(let element of list) {
      if(visitor == element[0]) {
        inList = true;
        locIndex = list.indexOf(element);
        break; 
      }
    }
    if(!inList) {
      if(!alreadyFriends.includes(visitor)) {
        let arr = new Array(2);
        arr[0] = visitor;
        arr[1] = 1;
        list.push(arr);
      }
    } else {
      if(locIndex != -1) list[locIndex][1] += 1;
    }
  }
  // sort
  let end;
  for (let i = list.length; i > 0; i--) {
    end = true;
    for (let j = 0; j < i - 1; j++) {
      if (list[j][1] < list[j+1][1]) {
          let temp = list[j];
          list[j] = list[j+1];
          list[j+1] = temp;
          end = false;
      } else if(list[j][1] == list[j+1][1]) {
        if(list[j][0] > list[j+1][0]) {
          let temp = list[j];
          list[j] = list[j+1];
          list[j+1] = temp;
          end = false;
        }
      }
    }
    if (end) break;
  }
  // recommend 5 friends 
  let count = 0;
  for(let i = 0; i < list.length; i++) {
    if(i == 5) break;
    answer.push(list[i][0]);
  }
  return answer;
}

module.exports = problem7;
