let numSet = new Set()
const nums = [3,0,1]
for(let num in nums){
    numSet.add(num)
    
}
let exprectedNumber = nums.length + 1
for(let number = 0; number < exprectedNumber; number++){
    if(!numSet.has(number)){
        console.log(number)
    }
}
return -1
// console.log(exprectedNumber)
// console.log(numSet)