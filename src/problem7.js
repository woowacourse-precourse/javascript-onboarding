function problem7(user, friends, visitors) {
  let friendGraph = {};

  friends.forEach(friendArray => {
    const A = friendArray[0];
    const B = friendArray[1];

    if(!(A in friendGraph)) { friendGraph[A] = []; }
    if(!(B in friendGraph)) { friendGraph[B] = []; }
    friendGraph[A].push(B);
    friendGraph[B].push(A);
    
  });
}

problem7("mrko", 	[["donut", "andole"], ["donut", "jun"], ["donut", "mrko"], ["shakevan", "andole"], ["shakevan", "jun"], ["shakevan", "mrko"]], ["bedi", "bedi", "donut", "bedi", "shakevan"], ["andole", "jun", "bedi"])

module.exports = problem7;
