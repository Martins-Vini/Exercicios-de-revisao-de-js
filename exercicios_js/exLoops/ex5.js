function showCity(){
    let cities = ["São Paulo", "Suzano", "Mauá", "Santo André", "São Bernardo do Campo"];
    let listFormat = []
    cities.forEach(c => {
        listFormat.push(`${cities.indexOf(c)}, ${c}`);
    })
    return listFormat;
}

//showCity();

export default showCity;