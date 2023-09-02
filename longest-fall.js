// add whatever parameters you deem necessary
function longestFall(array) {
    let maxCount = 0;
    let curCount = 0;
    let pre = Number.MAX_SAFE_INTEGER;
    for(let num of array) {
        if(num<pre){
            curCount++;
            maxCount = Math.max(curCount, maxCount);
        } else {
            curCount = 1;
        }
        pre = num;
    }
    return maxCount;
}

module.exports = longestFall;