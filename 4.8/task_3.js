// вывод программы в точности, как в задании
let roadMines =  [false, false, false, false, false, false, false, false, false, false]
let result = ""
let positionsWithoutMines = ""
let damage = false
for (let move in roadMines) {
    if (!roadMines[move]) {
        if (parseInt(move) !== roadMines.length - 1)
            positionsWithoutMines += `${parseInt(move) + 1}, `
        else {
            if (positionsWithoutMines === "")
                result += `танк переместился на ${parseInt(move) + 1}.`
            else
                result += `танк переместился на ${positionsWithoutMines}${parseInt(move) + 1}.`
        }
    }
    else {
        if (!damage) {
            damage = true
            if (positionsWithoutMines !== "") {
                result += `танк переместился на ${positionsWithoutMines}танк повреждён, танк переместился на ${parseInt(move) + 1}, `
                positionsWithoutMines = ""
            }
            else
                result += `танк повреждён, танк переместился на ${parseInt(move) + 1}, `
        }
        else {
            result += `${positionsWithoutMines}${parseInt(move) + 1}, танк уничтожен.`
            break
        }
    }
}
console.log(result)