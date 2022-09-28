function filter(arrayMails, blackList) {
    let correctMail = []
    for (let mail of arrayMails) {
        let isUncorrected = false
        for (let uncorrectedMail of blackList) {
            if (mail === uncorrectedMail) {
                isUncorrected = true
                break
            }
        }
        if (!isUncorrected)
            correctMail.push(mail)
    }
    if (correctMail.length === 0)
        return null
    return correctMail
}

export default {filter}