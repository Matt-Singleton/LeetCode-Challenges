var twoSum = function(nums, target) {


    let potentialNums = [];
    let answer = [];

    
    for (let x = 0; x < nums.length; x++) {

        for (let y = x + 1; y < nums.length; y++) {       
            if (nums[x] + nums[y] === target) {
                answer.push(x);
                answer.push(y);
                return answer;
            };
        };
    };
};