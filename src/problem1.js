function getBigNum(num){
    var best = 0;
    for (var i = 0; i<2; i++){
        var cal = parseInt(num);
        switch(i){
            case 0:
                var res = 0;
                while(cal>0){
                    res = parseInt(res + cal%10);
                    cal = parseInt(cal/10);
                }
                if(best < res)best = res;
                break;
            case 1:
                var res = 1;
                while(cal>0){
                    res = parseInt(res * parseInt(cal%10));
                    cal = parseInt(cal/10);
                }
                if(best < res)best = res;
                break;
        }
    }
    return best;
}

function problem1(pobi, crong) {
    var answer;

    if((pobi[0] + 1 != pobi[1]) || (crong[0] + 1 != crong[1]) 
        || (pobi[0] == 1) || (crong[1] == 400))
        return -1;

    var a = getBigNum(pobi[0]);
    var b = getBigNum(pobi[1]);
    var c = getBigNum(crong[0]);
    var d = getBigNum(crong[1]);
    
    var numP;
    var numC;
    
    if(a > b) numP = a; else numP = b;
    if(c > d) numC = c; else numC = d;
   

    if(numP == numC){
        answer = 0;
    }else if(numP > numC){
        answer = 1;    
    }else{
        answer = 2;
    }
    return answer;
}
module.exports = problem1;