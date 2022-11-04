function withoutLast(arr) {
    // Fix it
    let arr1 = arr.slice(0, -1); // removes the last element
    return arr1;
}
console.log(withoutLast([1,2,3,4,5]))
