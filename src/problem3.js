function problem3(number) {
  var answer = 0;

  for (var i = 1; i<=number; i++){
    const mapfn = (arg) => Number(arg);
    var arr = String(i).split("").map(mapfn);
    
    for (num of arr){
      if (num==3 || num==6 || num==9)
        answer++;
    }
  }
  return answer;
}

module.exports = problem3;
