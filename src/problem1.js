function problem1(pobi, crong) {

  const pageScore = [pobi, crong].map(player => {
    let score = player.map(pageNum => {
      let plus = 0;
      let mult = 1;
 
      String(pageNum).split("").map(num => {      
        plus = plus + Number(num);
        mult = mult * Number(num);
      })

      return (pageNum < 1 || pageNum > 400) ? -1 : Math.max(plus, mult);
    })
    return (player[0] + 1 !== player[1])? -1 : Math.max(...score);
  })

  if(pageScore[0] === -1 || pageScore[1] === -1) return -1;
  else if(pageScore[0] === pageScore[1]) return 0;
  else if(pageScore[0] > pageScore[1]) return 1;
  else if(pageScore[0] < pageScore[1]) return 2;
}

module.exports = problem1;
