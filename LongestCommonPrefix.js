var longestCommonPrefix = function(strs) {
    let strsArray = [];
    let shortestWordLength = strs.sort((a, b) => a.length - b.length)[0].length;
    let prefix = []


    for (i = 0; i < strs.length; i++) {
        strsArray.push(strs[i].split(""))
    };


    for (x = 0; x < strsArray.length; x++) {

        let condition = true;
  
        for (y = 0; y < shortestWordLength - 1; y++) {
            
            if (strsArray[x][y] !== strsArray[x + 1][y]) {
                condition = false
                
            }
            else {
                prefix.push(strsArray[x][y]);
            };
        }
        if (condition == false) {
            return prefix.join();
        };
    };
};

console.log(longestCommonPrefix(["flower","flow","flight"]))