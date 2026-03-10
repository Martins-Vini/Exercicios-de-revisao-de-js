const piValue = 3.141591

function calculoCircunferencia(pi){
   let raio = 3;
   let result = 2*pi*raio

   return result.toFixed(2);
}

//console.log(calculoCircunferencia(piValue.toFixed(2)))

export default calculoCircunferencia;