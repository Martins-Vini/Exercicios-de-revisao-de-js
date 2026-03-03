function discount(price, discountPercentage) {
    let taxaConv = (5/100)*price;
    let disc = discountPercentage/100*price;
    let newPrice = price - disc;

    return newPrice+taxaConv;
}

console.log(discount(250, 25))