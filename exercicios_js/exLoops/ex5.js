function showCity(num){
    let cities = ["São Paulo", "Suzano", "Mauá", "Santo André", "São Bernardo do Campo"];
    let idx = []
    cities.forEach(num => {
        idx.push(`${cities.findIndex(num)}`);
    })
    return idx;
}

//showCity();

export default showCity;