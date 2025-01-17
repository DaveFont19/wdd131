const input = document.querySelector('#favchap'); //Esto permite que se pueda manipular la etiqueta con id favchap
const button = document.querySelector('button');
const list = document.querySelector('#list');



button.addEventListener('click', function () {
    if (input.value.trim() !== '') {

        const li = document.createElement('li'); //Esto crea un elemento li en el HTML
        const deleteButton = document.createElement('button') //crea un boton

        li.textContent = input.value;// aquí obtiene los valores de el input
        deleteButton.textContent = '❌';
        li.appendChild(deleteButton);
        list.appendChild(li); // agrega la list a li

        input.value = '';
        deleteButton.addEventListener('click', function () {
            list.removeChild(li); //Borra el elemento que tiene el deleteButton

            input.focus()
        })
}});