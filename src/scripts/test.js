Array.prototype.includesArray = function includesArray(inputArr){
    return this.some((sub_arr) => {
        let range = Array.from({length: inputArr.length}, (_, i) => i);
        
        return sub_arr.length == inputArr.length && range.every((i) => sub_arr[i] === inputArr[i])
    });
    
}

let test = [[1,2], [3,4], [2,5], [1,7]];

// console.log(test.includesArray([3,5])); //false
// console.log(test.includesArray([7,1])); //false
// console.log(test.includesArray([1,7])); //true
// console.log(test.includesArray([1,1])); //false
// console.log(test.includesArray([1,7,1])); //false
// console.log(test.includesArray([5,2])); //false
// console.log(test.includesArray([3,4])); //true

let range = Array.from([1,2,3,4,5], (e, i) => 2*e);

range.forEach(el => console.log(el))

