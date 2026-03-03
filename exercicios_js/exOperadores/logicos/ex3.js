function catchUmbrella(){
    let isRaining = true;

    if(isRaining){
        let hasUmbrella = true;
        return hasUmbrella;
    } else{
        return !hasUmbrella;
    }
}

console.log(catchUmbrella());