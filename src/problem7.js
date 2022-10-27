function visitCount(visitors){
  return visitors.reduce((prev, curr) => {
    if (curr in prev){
      prev[curr] += 1;
    }
    else{
      prev[curr] = 1;
    }
    return prev;
  }, {});
};


function problem7(user, friends, visitors) {
  
  return answer;
}

module.exports = problem7;

console.log(problem7('mrko', [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ], ["bedi", "bedi", "donut", "bedi", "shakevan"]))

/*
user = "mrko";
friends = [ ["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"] ];
visitors = ["bedi", "bedi", "donut", "bedi", "shakevan"];
result = ["andole", "jun", "bedi"]

*/