function calculate(sumBasket, countProducts, promoCode = null) {
    let totalSum = sumBasket
    if (promoCode === 'ДАРИМ300') {
        if (sumBasket > 300)
            totalSum -= 300
        else
            return 0
    }
    if (countProducts >= 10)
        totalSum *= 0.95
    if (totalSum > 50000)
        totalSum += -((totalSum - 50000) * 0.8)
    if (promoCode === 'СКИДКА15' && totalSum >= 20000)
        totalSum *= 0.75
    return totalSum
}

export default {calculate}
