function solution(pobi,crong) {
    pobi_num = check_pobi(pobi);
    crong_num = check_crong(crong)

    if(check(pobi, crong) != false) {
        if(pobi_num > crong_num) {
            return 1
        } else if(pobi_num < crong_num) {
            return 2
        } else {
            return 0
        }
    } else {
        return -1
    }
}

function check_pobi(pobi) {
    val1 = pobi[0].toString()
    val2 = pobi[1].toString()
    left_tmp = 0;
    right_tmp = 0
    if(sum(val1) >= mul(val1)) {
        left_tmp = sum(val1)
    } else {
        left_tmp = mul(val1)
    }
    if(sum(val2) >= mul(val2)) {
        right_tmp = sum(val2)
    } else {
        right_tmp = mul(val2)
    }
    
    return Math.max(left_tmp, right_tmp)
}

function check_crong(crong) {
    val1 = crong[0].toString()
    val2 = crong[1].toString()
    left_tmp = 0;
    right_tmp = 0
    if(sum(val1) >= mul(val1)) {
        left_tmp = sum(val1)
    } else {
        left_tmp = mul(val1)
    }
    if(sum(val2) >= mul(val2)) {
        right_tmp = sum(val2)
    } else {
        right_tmp = mul(val2)
    }
    
    return Math.max(left_tmp, right_tmp)
}

function sum(num) {
    tmp = 0
    for(let i=0; i<num.length; i++) {
        tmp += parseInt(num[i])
    }
    return tmp
}

function mul(num) {
    tmp = 1
    for(let i=0; i<num.length; i++) {
        tmp *= parseInt(num[i])
    }
    return tmp
}

function check(pobi, crong) {
    if(1 != Math.abs(pobi[0] - pobi[1])) {
        return false
    } else if(1 != Math.abs(crong[0] - crong[1])) {
        return false
    } else {
        return true
    }
}
console.log(solution([99,102], [211,212]))