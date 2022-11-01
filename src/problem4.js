function problem4(word) {
  let split_word = word.split("");
    for(let i=0;i<split_word.length;i++){
        let ASCII_num = split_word[i].charCodeAt(0);
        if(ASCII_num==32){
            split_word[i] = String.fromCharCode(ASCII_num);
        }
        else if(ASCII_num>=65 && ASCII_num<=90){
            split_word[i] = String.fromCharCode(155-ASCII_num);
        }
        else{
            split_word[i] = String.fromCharCode(219-ASCII_num);
        }
    }
    return split_word.join("");
  }

module.exports = problem4;
