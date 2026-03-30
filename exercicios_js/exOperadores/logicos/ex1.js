function AcessProfile(userHost, password) {
    let acess = false;
    if (userHost == "admin" && password == "123") {
        acess = true;
        return `Acesso permitido - ${acess}`;
    } else {
        return "Acesso negado";
    }
}

//AcessProfile(acess, userInserted, passwordInserted));

export default AcessProfile;