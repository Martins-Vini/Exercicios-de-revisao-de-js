function showCity(){
    let cities = ["São Paulo", "Suzano", "Mauá", "Santo André", "São Bernardo do Campo"];
    cities.forEach(c => {
        console.log(`${cities.indexOf(c)}, ${c}`);
    })
}

showCity();