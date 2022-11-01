function problem1(pobi,crong) {
  var answer;
 

 
}

module.exports = problem1;

pobi=[131,132]
crong=[211,212]
let poMax =0;
let crMax =0;
function solution(n) {
    let summ=0;
    let mul=1;
    
        while(n>0) {
        mul *= n%10;
        summ += n%10;
        n = parseInt(n/10); 
    }
    if (summ>=mul){
        return summ
    }else{
        return mul;
    }

 
}
if (solution(crong[0])>=solution(crong[1])){
    crMax=solution(crong[0])
}else{
    crMax=solution(crong[1])
}
if (solution(pobi[0])>=solution(pobi[1])){
    poMax=solution(pobi[0])
}else{
    poMax=solution(pobi[1])
}

function soulution2(){
    if (crong[1]-crong[0] !=1||pobi[1]-pobi[0] !=1 || crong[0]<1||crong[1]>400||pobi[0]<1||pobi[1]>400){
        return -1
    }else if(crMax>poMax){
        return 1

    }else if(crMax==poMax){
        return 0
    }else if(crMax<poMax){
        return 2
    }
}
console.log(soulution2())