let arr = [1,2,3,4];

let arr2 = [...arr];
//console.table(persona);
arr2.push(5);

let arr3 = arr2.map(function(num){
    return num * 3;
})
console.log(arr);
console.log(arr2);
console.log(arr3);

