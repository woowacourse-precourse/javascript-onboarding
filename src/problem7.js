function problem7(user, friends, visitors) {
  var scores = {};
  var sortedScore = [];
  var frinedsWithUser = [];
  
  createFrinedsWith();
  addScoresFrinedsWith();
  addScoresVisitors();
  sortScores();

  return sortedScore.slice(0,5).map((el)=>el.name);

  function createFrinedsWith(){
    friends.forEach((el)=>{
      if(el.includes(user)){
        frinedsWithUser.push(el[1-el.indexOf(user)]);
      }
    });
  }

  function addScoresFrinedsWith(){
    friends.forEach((el)=>{
      for(const friend of frinedsWithUser){
        const knowFriend = el[1-el.indexOf(friend)];
        if(el.includes(friend) && knowFriend!==user && !frinedsWithUser.includes(knowFriend)){
          scores[knowFriend] = scores[knowFriend] ? scores[knowFriend]+10 : 10;
        }
      }
    });
  }

  function addScoresVisitors(){
    visitors.forEach((el)=>{
      if(!frinedsWithUser.includes(el)){
        scores[el] = scores[el] ? scores[el]+1 : 1;
      }
    });
  }

  function sortScores(){
    for(const name in scores){
      var score = {};
      score.name=name;
      score.score=scores[name];
      sortedScore.push(score);
    }
    
    for (let i = 0; i < sortedScore.length; i++) {
      for (let j = 0; j < sortedScore.length - 1 - i; j++) {
        if (sortedScore[j].score < sortedScore[j+1].score) {
          [sortedScore[j],sortedScore[j+1]] = [sortedScore[j+1],sortedScore[j]];
        }else if(sortedScore[j].score===sortedScore[j+1].score){
          if(sortedScore[j].name>sortedScore[j+1].name){
            [sortedScore[j],sortedScore[j+1]] = [sortedScore[j+1],sortedScore[j]];
          }
        }
      }
    }
  }
}

module.exports = problem7;
