const input = document.querySelector('#favchap'); //Esto permite que se pueda manipular la etiqueta con id favchap
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li'); //Esto crea un elemento li en el HTML
const buttonDelete = document.createElement('button') //crea un boton

li.textContent = input.value;// aquí obtiene los valores de el input
buttonDelete.textContent = 'X'; // se le pone un signo al boton
li.append(buttonDelete);
list.append(li); // agrega la list a li