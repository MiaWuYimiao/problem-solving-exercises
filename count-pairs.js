// add whatever parameters you deem necessary
function countPairs(array, num) {
    array.sort((a,b)=> (a-b));
    let count = 0;
    let start = 0;
    let end = array.length-1;
    while(start<end){
        let sum = array[start]+array[end];
        if(sum === num) {
            count++;
            start++;
            end--;
        } else if(sum > num) {
            end--;
        } else {
            start++;
        }
    }
    return count;

}

module.exports = countPairs;