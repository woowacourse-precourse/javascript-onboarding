function problem5(money) {
    var arr = [0,0,0,0,0,0,0,0,0];
    var mon = 50000;

    for(var i = 0; i<9; i++){
        if(i == 8){
            arr[i] = money;
        }else if(i % 2 == 0){
            if(money / mon >= 1){
                arr[i] = parseInt(money / mon);
                money %= mon;
                mon /= 5;
            }else{
                mon /= 5;
            }
        }else if(i % 2 != 0){
            if(money / mon >= 1){
                arr[i] = parseInt(money / mon);
                money %= mon;
                mon /= 2;
            }else{
                mon /= 2;
            }
        }
    }
    return arr;
} 
module.exports = problem5;