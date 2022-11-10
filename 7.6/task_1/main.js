(function () {
    let input_user = addInApp('input');
    let button = addInApp('button');
    let div_element = addInApp('div');
    div_element.textContent = "0";
    button.textContent = "Старт таймера";
    let timer;

    function addInApp(element) {
        let elementApp = document.createElement(element);
        document.body.append(elementApp);
        return elementApp;
    }

    input_user.addEventListener('input', () => {
        if (input_user.value === '') div_element.textContent = '0';
        else div_element.textContent = input_user.value;
    })

    button.addEventListener('click', () => {
        if (isNaN(+input_user.value)) return;
        let value_timer = +input_user.value;
        clearInterval(timer);
        timer = setInterval(() => {
            console.log(value_timer);
            div_element.textContent = value_timer;
            if (value_timer <= 0)
                clearInterval(timer);
            value_timer--;
        }, 1000)
    });
})();