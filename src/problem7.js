function problem7(user, friends, visitors) {
  var answer;
  let nameList = []; //사람들 이름 목록 리스트
  let friendsList = []; //사람들 각자의 친구관계 리스트

  for (var friend of friends){
    let idA = friend[0];
    let idB = friend[1];

    const indexA = nameList.indexOf(idA);
    if(indexA!=-1){//아이디A의 친구목록이 존재하다면, 친구 목록에 아이디B 추가
      friendsList[indexA].push(idB);
    }
    else{
      nameList.push(idA); //아이디A의 친구목록 생성 후 아이디B 추가
      let newIndexA = nameList.length-1;
      friendsList[newIndexA] = [idB];
    }

    const indexB = nameList.indexOf(idB);
    if(indexB!=-1){
      friendsList[indexB].push(idA);
    }
    else{
      nameList.push(idB);
      let newIndexB = nameList.length-1;
      friendsList[newIndexB] = [idA];
    }
  }
  
  return answer;
}

module.exports = problem7;
