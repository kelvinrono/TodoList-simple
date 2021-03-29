var input = document.querySelector('.input');
var add = document.querySelector('.button');
items=document.querySelector('.items')
//initialize add function
add.addEventListener('click', function(e){
    e.preventDefault();
//create div elements
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo')

//create the list items
const todoItem = document.createElement('li')
todoItem.innerHTML=input.value;
todoItem.classList.add('todo')
todoDiv.appendChild(todoItem)

items.appendChild(todoDiv)

input.value = ""
})