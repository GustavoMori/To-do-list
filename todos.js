var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var btnElement = document.querySelector('#app button');

var listaDeToDo = JSON.parse(localStorage.getItem('list_todos')) || []

function renderToDos(){
    listElement.innerHTML = "";
    for (todo of listaDeToDo){
        var todoElement =  document.createElement('li');
        var todoText = document.createTextNode(todo);
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var pos = listaDeToDo.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteToDo(' + pos + ')');
        var aText = document.createTextNode('Excluir');

        linkElement.appendChild(aText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
};
renderToDos();
function addToDo(){
    var valueInput = inputElement.value;
    listaDeToDo.push(valueInput);
    inputElement.value = "";
    renderToDos();
    saveToStorage();
};
btnElement.onclick = addToDo;

function deleteToDo(pos){
    listaDeToDo.splice(pos, 1);
    renderToDos();
    saveToStorage();
};

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(listaDeToDo));
}