function problem2(cryptogram) {
    var count = true;

    while(count){
        var size = cryptogram.length;
        var slice = "";
        
        for(var i = size-1; i>=0; i--){
            if(cryptogram[i] != cryptogram[i-1]) slice = cryptogram.substring(i, i+1) + slice;
            else {count = false; i--;}
        }
        cryptogram = slice;
        if(count)count = false;
        else count = true;
    }
    return cryptogram;
}  
module.exports = problem2;