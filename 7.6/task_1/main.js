let input_user = document.createElement('input')
let button = document.createElement('button')
let div_element = document.createElement('div')
document.body.append(input_user)
document.body.append(button)
document.body.append(div_element)
div_element.textContent = "0"
button.textContent = "Старт таймера"
let timer

function onClick() {
    let value_timer = parseInt(input_user.value)
    clearInterval(timer)
    timer = setInterval(()=>{
        console.log(value_timer)
        div_element.textContent = value_timer.toString()
        if (value_timer <= 0)
            clearInterval(timer)
        value_timer--
    } ,1000)
}

document.addEventListener('click', onClick)