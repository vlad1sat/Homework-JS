let password = "qaz-xsw"
if (password.length > 3 && (password.includes('-') || password.includes('_')))
    console.log("Пароль надёжный")
else
    console.log("Пароль недостаточно надёжный")
