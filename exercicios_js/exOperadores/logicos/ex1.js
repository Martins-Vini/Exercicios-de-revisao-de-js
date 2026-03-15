function AcessProfile(userHost, password) {
    let acess = false;
    let userInserted = "admin";
    let passwordInserted = "123";
    if (userHost == "admin" && password == "123") {
        acess = true;
        return `Acesso permitido - ${acess}`;
    } else {
        return "Acesso negado";
    }
}

//AcessProfile(acess, userInserted, passwordInserted));

export default AcessProfile;