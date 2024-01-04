//find the smallest distance between 2 numbers in array
//[2,5,3,7,2,3,6,8,6] => 2

let arr = [2,5,3,7,2,3,6,8,6]
function findDistanse() {
    let helperArr = [0]
    for (let i = 0; i < arr.length; i++) {
        if((arr[i] - (arr[i + 1])) > 0 || (arr[i] - (arr[i + 1])) < helperArr[0]) {
            helperArr[0] = arr[i] - (arr[i + 1])
        } else {
            continue
        } 
    }

    return helperArr.join()
}    

console.log(findDistanse(arr))