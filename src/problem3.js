function problem3(number) {
    var count = 0;
    for(var i = 1; i<=number; i++){
        var res = 0;
        var cal = parseInt(i);
        while(cal>0){
            res = parseInt(cal%10);
            cal = parseInt(cal/10);
            if(res == 3 || res == 6 || res ==9)count++;
        }
    }
    return count;
}

module.exports = problem3;