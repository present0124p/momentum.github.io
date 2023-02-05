const input = document.querySelector('#todo')
const addButton = document.querySelector('#add-button')
const todoList = document.querySelector('#todo-list')
const alert = document.querySelector('#alert')

const TODOLIST_KEY = "todolist";
var todoListData = new Array();

function addTodo() {
    if (input.value !== '') {
        todoListData.push(input.value);
        addList(input.value);
        input.value='';
    
        alert.textContent = '';
    } else {
        alert.textContent = '할 일을 입력하세요!';
    }
}

function addList(data) {
    const item = document.createElement('div');
    const text = document.createElement('span');

    const deleteButton = document.createElement('button');
    deleteButton.textContent="제거하기";
    deleteButton.style.margin = "10px";

    text.textContent = data;
    item.appendChild(text);
    item.appendChild(deleteButton);
    todoList.appendChild(item);
    
    localStorage.setItem(TODOLIST_KEY, JSON.stringify(todoListData));

    // 제거하기 버튼 클릭 이벤트 리스너
    deleteButton.addEventListener('click', (event) => {
        // const idx = parseInt(event.currentTarget.value);
        // todoListData.splice(idx, 1);
        const idx = Array.from(todoList.children).indexOf(event.currentTarget.parentNode);
        todoListData.splice(idx, 1);
        localStorage.setItem(TODOLIST_KEY, JSON.stringify(todoListData));
        todoList.removeChild(event.currentTarget.parentNode);
    })
}

function init () {
    const data = localStorage.getItem(TODOLIST_KEY);

    if (data !== null) {
        todoListData = JSON.parse(data);
        todoListData.forEach((value) => addList(value));
    } else {
        todoListData = new Array();
    }
    addButton.addEventListener('click', addTodo);
}

init();