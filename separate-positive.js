// add whatever parameters you deem necessary
function separatePositive(array) {
    let left = 0;
    let right = array.length-1;
    while(left < right){
        while(array[left]>0){
            left++;
        }
        while(array[right]<0){
            right--;
        }
        swap(array, left, right);
        left++;
        right--;
    }
    return array;
}

function swap(array, left, right){
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}

module.exports = separatePositive;
