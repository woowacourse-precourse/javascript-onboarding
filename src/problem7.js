function problem7(user, friends, visitors) {
  var answer;
  var nameSet = new Map();
  var frinedSet = new Set();

  for (list of friends){
    if (list[1] == user){
      frinedSet.add(list[0]);
    }
    else if (list[0] == user){
      frinedSet.add(list[1]);
    }
    else{
      nameSet.set(list[0],0);
      nameSet.set(list[1],0);
    }
  }

  for (friend of frinedSet){
    for (li of friends){
      if (li[1] == friend && li[0]!= user){
        nameSet.set(li[0],nameSet.get(li[0])+10);
      }
      else if (li[0] == friend && li[1]!= user){
        nameSet.set(li[1],nameSet.get(li[1])+10);
      }
      else{
      }
    }
  }

  for (visit of visitors){
    if (nameSet.get(visit) == undefined){
      nameSet.set(visit,0);
    }
    nameSet.set(visit,nameSet.get(visit)+1);
  }

  for (f of frinedSet){
    nameSet.delete(f);
  }

  var sortmap = new Map([...nameSet].sort(function(a, b){
    if(a[1] == b[1]){
      return a[0] - b[0];
    }
    return b[1] - a[1];
  }));
  
  var temp = new Set();
  for (k of sortmap.keys()) {
    temp.add(k);
  }

  answer = Array.from(temp);
  return answer;
}

module.exports = problem7;
