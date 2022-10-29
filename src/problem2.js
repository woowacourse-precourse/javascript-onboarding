function problem2(cryptogram) {
    let answer = '';
    const textArr = cryptogram.match(/(\w)\1*/g);
    if(textArr) {
        if(textArr.length !== cryptogram.length) return filterText(textArr);
        else return answer = textArr.join('');
    }
    return answer;
}
function filterText(text) {
    const nowText = text.filter(v=> v.length==1);
    return problem2(nowText.join(''));
}

module.exports = problem2;