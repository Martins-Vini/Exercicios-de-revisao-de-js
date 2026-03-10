function discount(price, discountPercentage) {
    let taxaConv = (5/100)*price;
    let disc = discountPercentage/100*price;
    let newPrice = price - disc;

    let result = newPrice+taxaConv;

    return result;
}

//console.log(discount(250, 25))

export default discount;