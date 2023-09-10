//---------codigo Js del Ejercicio 1----------
//toma el elemento con el id ejercicio1
const formEj1 = document.getElementById('ejercicio1');
//escucha el evento submit y ejecuta una funcion
formEj1.addEventListener('submit',(e)=>{
    //evita que el evento recargue la página
    e.preventDefault()
    let num1 =parseFloat(document.getElementById('dato1').value);
    let num2 =parseFloat(document.getElementById('dato2').value);

    elMayorDeDosNumeros(num1,num2)
})

function elMayorDeDosNumeros(n1,n2){
    //verifica que los campos no esten vacios
    if(n1 ==""|| n2 ==""){
        return alert("los campos estan vacios");
    }
    //el elemnto donde vamos a mostrar el resultado
    resultado = document.getElementById('ResultadoEjercicio1');
    return resultado.innerHTML =`el número mayor es ${n1>n2?n1:n2}`
}

//--------------fin ejercicio 1--------------
//--------------codigo Js del Ejercicio 2-------------
const formEj2 = document.getElementById('ejercicio2');
formEj2.addEventListener('submit',(e)=>{
    e.preventDefault()
    let edad =document.getElementById('edad').value;
    resultado = document.getElementById('ResultadoEjercicio2');
    resultado.removeAttribute('style');
    resultado.innerHTML=""
    if (edad == ""){
        resultado.style.color='#ff0000';
        resultado.style.backgroundColor = "#000"
        resultado.style.padding="10px"
        resultado.innerHTML = "El campo edad esta vacio"
    }
    else if(edad<10){
        resultado.style.color='#ff0000';
        resultado.style.fontSize= "20px"
        resultado.innerHTML = "Es un niño"
    }else if(edad>=10 && edad<20){
        resultado.style.color= "#f7810b"
        resultado.style.fontSize= "20px"
        resultado.innerHTML = "Es un adolecente"
    }else if(edad>=20 && edad<60){
        resultado.style.color= "#2b34e2"
        resultado.style.fontSize= "20px"
        resultado.innerHTML = "Es un adulto"
    }else{
        resultado.style.color= "#3de22b"
        resultado.style.fontSize= "20px"
        resultado.style.textShadow= "0px 0px 4px #5c8e0b"
        resultado.innerHTML = "Es un adulto mayor"
    }
})

//--------------fin ejercicio 2--------------
//--------------codigo js del ejercicio 3--------------
const formEj3 =document.getElementById('ejercicio3');
formEj3.addEventListener('submit',(e)=>{
    e.preventDefault();
    const formdata= new FormData(formEj3);
    const numE1 = parseFloat(formdata.get('numOperation1'));
    const numE2 = parseFloat(formdata.get('numOperation2'));
    const oper = formdata.get('oper');
    calculoEj3(numE1,numE2,oper);
})

const calculoEj3=(n1,n2,op)=>{
    const resultado = document.getElementById('ResultadoEjercicio3');
    
    if(isNaN(n1)||isNaN(n2)){
        return alert("los campos estan vacios");
    }
    if(n2==0 && op=='/'){
        resultado.innerHTML=""
        return alert("no se puede dividir por cero")    
    }
    switch (op) {
        case '+':
            resultado.innerHTML=`la suma de ${n1} + ${n2} es: ${n1 + n2}`
            break;
        case '-':
            resultado.innerHTML=`la resta de ${n1} - ${n2} es: ${n1 - n2}`
            break;
        case '*':
            resultado.innerHTML=`la multiplicacion de ${n1} x ${n2} es: ${n1 * n2}`
            break;
        case '/':
            resultado.innerHTML=`la resultado de la division ${n1} / ${n2} es: ${n1 / n2}`
            break;
        default:
            resultado.innerHTML=""
            break;
    }
            
    return resultado
}
//--------------fin ejercicio 3--------------
//-----------codigo js del ejercicio 4--------------
const formEJ4= document.getElementById('ejercicio4');
const ResultadoEjercicio4=document.getElementById('tablaMultiplicar');

formEJ4.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data = new FormData(formEJ4);
    const numRef = parseInt(data.get('datotabla'));
    ResultadoEjercicio4.innerHTML =" "
    if(isNaN(numRef)){
        return alert("el campo esta vacio")
    }

     for (let index = 1; index <= 10; index++) {
        const resul=document.createTextNode(`${numRef} x ${index} = ${numRef*index}`);
        let p = document.createElement('p');
        p.appendChild(resul);
        ResultadoEjercicio4.appendChild(p);  
    } 
    ResultadoEjercicio4.style.columnCount="3"
    ResultadoEjercicio4.style.padding="12px"
})
//--------------fin ejercicio 4--------------
//-----------codigo js del ejercicio 5--------------
const formEJ5= document.getElementById('ejercicio5');
const ResultadoEjercicio5 =document.getElementById('resultadoSumaD');
formEJ5.addEventListener('submit',(e)=>{
    e.preventDefault();

    const numRefsum =document.getElementById('datosuma').value;
    ResultadoEjercicio5.innerHTML=""
    if(numRefsum==""){
        return alert("El campo no puede estar vacios")
    }
    let cadena = numRefsum.toString();
    // Inicializar el acumulador suma en cero
    let suma = 0;

    // Iterar sobre los dígitos de la cadena
    for (let i = 0; i < cadena.length; i++) {
        // Convertir el dígito a un entero
        let digito = parseInt(cadena[i]);

        // Si el dígito es par, agregarlo a la suma
        if (digito % 2 === 0) {
            suma += digito;
        }
    }
    if(suma==0){
        return ResultadoEjercicio5.innerHTML=`El número ingresado es: ${numRefsum}</br> No existen números pares en el número ingresado`;
    }

    // Devolver la suma
    return ResultadoEjercicio5.innerHTML=`El número ingresado es: ${numRefsum}</br> La suma de los dígitos pares es: ${suma}`;
})