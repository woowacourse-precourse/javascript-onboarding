function problem1(pobi, crong) {
  var answer;
  
  var bigpobi = (bigsum(pobi[0])>=bigsum(pobi[1]) ? bigsum(pobi[0]) : bigsum(pobi[1]));
  var bigcrong = (bigsum(crong[0])>=bigsum(crong[1]) ? bigsum(crong[0]) : bigsum(crong[1]));

  answer = (bigpobi>bigcrong ? 1 : (bigpobi==bigcrong) ? 0 : 2);

  if(pobi[1]-pobi[0]!=1 || crong[1]-crong[0]!=1|| 
    pobi[0]%2!=1 || pobi[1]%2!=0 || crong[0]%2!=1 || crong[1]%2!=0 ||
    pobi.length!=2 || crong.length!=2 ||
    pobi[0]<=1 || pobi[1]>=400||crong[0]<=1 || crong[1]>=400
    ){
      answer=-1;
  }
  
  return answer;
}

function bigsum(a){
  var string = String(a);
  var plus = 0;
  var mul=1;
  for(var i=0; i<string.length; i++){
    plus+=parseInt(string[i]);
    mul*=parseInt(string[i]);
  }
  return (plus>=mul ? plus : mul);
}

module.exports = problem1;
