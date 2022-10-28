function checkCommonSubstring(word1, word2) {
  const dp = new Array(word1.length + 1).fill(0).map(() => new Array(word2.length + 1).fill(0));

  for (let i = 1; i <= word1.length; i += 1) {
    for (let j = 1; j <= word2.length; j += 1) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1; 
        
        if (dp[i][j] >= 2) return true; 
      }
    }
  }

  return false; 
}

function problem6(forms) {
  var answer;
  return answer;
}

module.exports = problem6;
