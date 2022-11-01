/*
기능 목록
1. 전달받은 cryptogram 길이 검사 기능
2. 연속 중복 문자 존재 검사 기능
3. 연속 중복 문자 삭제 기능
*/

// cryptogram => string, length : 1~1000
// return => string, length : 0~1000
function problem2(cryptogram) {
    if(!isValid(cryptogram)) return -1;
    while(!isAns(cryptogram)){
        cryptogram = delDups(cryptogram);
    }
    return cryptogram;
}

// 1. 전달받은 cryptogram 길이 검사 기능
// return => valid : true, not valid : false
function isValid(str) {
    if(str.lenth < 1 || str.lenth > 1000) return false;
    return true;
}

// 2. 연속 중복 문자 존재 검사 기능
// return => 연속 중복 문자 존재X : true, 존재 : false
function isAns(str) {
    var left, right=0, curr=0;

    while(right < str.length){
        left = curr, right = curr +1;
        if(str[left] == str[right]) return false;
        curr++;
    }
    return true;
}

// 3. 연속 중복 문자 삭제 기능
// return => 한번만 순회하며 중복된 문자열 제거 (ex : abbbbaa => a 반환)
function delDups(str) {
    var left, right=0, curr=0;

    while(right < str.length){
        left = curr, right = curr +1;
        if(str[left] == str[right]){
            while(str[right] == str[right+1] && right < str.length){
                right++;
            }
            str = str.slice(0,left) + str.slice(right+1,str.length);
            continue;
        }
        curr++;
    }
    return str;
}

module.exports = problem2;
