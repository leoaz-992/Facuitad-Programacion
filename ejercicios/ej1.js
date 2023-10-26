//ejercicio 1
//Conversión de Temperatura. Escribe un programa que convierta una temperatura en grados Celsius a Fahrenheit. El usuario ingresará la temperatura en Celsius.

const conversorTemp=()=>{
  let tempCelsius=parseFloat(prompt("ingrese la temperatura en celsius: "));
  if(isNaN(tempCelsius)){
    return alert("lo ingresado no es valido.")
  }
  const tempFahrenheit= (tempCelsius*9/5)+32;
  return alert(`la temperatura en fahrenheit es: ${tempFahrenheit}`);
}
const CalcNumPrimo=()=>{
  const numPrimo=parseInt(prompt("ingrese un número entero: "),0)
  let isprimo;
  if(isNaN(numPrimo)){
    return alert("el número ingresado no es valido.")
  }
  if(numPrimo%2==0){
    isprimo=false;
  }
  if(numPrimo == 2|| numPrimo ==3){
    isprimo= true;
  }
  for (let i = 3; i <= Math.sqrt(numPrimo); i+=2) {
    if(numPrimo % i == 0){
      isprimo=false;
    }
  }
  console.log(isprimo);
  if(isprimo){
    return alert(`el número ${numPrimo} es un número primo.`)
  }else{
    return alert(`${numPrimo} no es número primo`);
  }
}