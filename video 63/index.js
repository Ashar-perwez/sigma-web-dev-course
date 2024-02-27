let arr = [1,2,3,4,5]

arr[0] = 345;
console.log(arr, typeof arr);
console.log(arr.length);
console.log(arr[4]);

console.log(arr.toString());
console.log(arr.join("and"));

console.log(arr.splice(1,2))
console.log(arr.splice(1,3,422,124));