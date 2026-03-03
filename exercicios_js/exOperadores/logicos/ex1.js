function AcessProfile(acess, userHost, password){
    if(userHost == "admin" && password == "123"){
        acess = true;
        return `Acesso permitido - ${acess}`;
    } else{
        return "Acesso negado";
    }
}

const acess = false;
let userInserted = "admin";
let passwordInserted = "123";

console.log(AcessProfile(acess, userInserted, passwordInserted));
