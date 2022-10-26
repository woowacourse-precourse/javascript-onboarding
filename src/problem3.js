function problem3(number) {
    let answer = 0;
    let i = 1;
    const clap = (num) => {
        let res = 0;
        let arr = (num + "").split("").map(Number);
        for (let i in arr)
            if (arr[i] === 3 || arr[i] === 6 || arr[i] === 9) res++;
        return res;
    };
    while (i <= number) {
        answer += clap(i);
        i++;
    }
    return answer;
}
module.exports = problem3;
