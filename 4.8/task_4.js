let daysWeek = ["подедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"]
let startDayWeek = "четверг"
let index = daysWeek.indexOf(startDayWeek)
for (let day = 1; day <= 31; day++) {
    console.log(`${day} января, ${daysWeek[index]}`)
    if (++index > 6)
        index = 0
}
