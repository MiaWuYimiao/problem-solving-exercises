// add whatever parameters you deem necessary
function averagePair(array, average) {
    let start = 0;
    let end = array.length - 1;

    while(start<end) {
        let ave = (array[start] + array[end])/2;
        if(ave === average){
            return true;
        } else if(ave < average) {
            start++;
        } else {
            end--;
        }
    }
    return false;
}

module.exports = averagePair;
