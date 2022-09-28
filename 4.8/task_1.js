let startRange = 0
let finishRange = 100
let count = 100
let min = Math.min(startRange, finishRange)
let range = Math.abs(startRange - finishRange)
let result = []
for (let index = 0; index < count; index++)
    result.push(Math.round(Math.random() * range) + min)
console.log(result)