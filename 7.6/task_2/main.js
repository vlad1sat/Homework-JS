(function () {

    function changeTextTimeOut() {
        setTimeout(() => {
            changeText()
        }, 300)
    }

    function changeText() {
        h2.textContent = input_user.value
    }

    let input_user = document.createElement('input')
    let h2 = document.createElement('h2')
    document.body.append(input_user)
    document.body.append(h2)
    input_user.addEventListener('input', changeTextTimeOut)
})();