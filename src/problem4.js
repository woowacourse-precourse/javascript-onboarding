function problem4(word) {
    var change = "";
    for(var i = 0; i<word.length; i++){
        var ascii = word.charCodeAt(i);

        if(word[i] >= 'A' && word[i] <= 'Z'){
            change += String.fromCharCode(155-ascii);
        }else if(word[i] >= 'a' && word[i] <= 'z'){
            change += String.fromCharCode(219-ascii);
        }else{
            change += word[i];
        }
    }
    return change;
}  
module.exports = problem4;