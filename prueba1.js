mensaje = "resultado: ";
console.log(mensaje);

num1 = 500;
num2 = 200;
console.log(num1);

resultado = num1 + num2;
console.log(mensaje + resultado);

let elementohtml = document.querySelector('body');
elementohtml.textContent = "El valor de la primera variable es: " + num1 + ". El valor de la segunda variable es:  " + num2;

document.body.appendChild(document.createElement('div'));

let elementodiv = document.querySelector('div')
elementodiv.style.backgroundColor = 'White';
elementodiv.textContent = "El valor de la primera variable es: " + typeof num1 + ". El valor de la segunda variable es:  " + typeof num2;
