function inputArr(arr) {
    let arr2 = arr.map(x => x*2);
    return arr2;
}

//B3:

function getArr( input) {
    let arr = [];
    for(let i = 0; i <= input; i++){
        arr.push(i);
    }
    return arr;
}

//B5

function bai5( arr) {
    let sum = 0;
    for( let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    for (let i = 0; i <= arr.length-1; i++) {
        if (arr[i] == (sum/2)) {
            return true;
        }
    }
    return false;
}

