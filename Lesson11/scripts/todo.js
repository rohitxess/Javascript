const todoList = ['rohit','deepika'];

renderTodoList();

function renderTodoList(){
    
    let todoListHTML = ''; // to store the result 
   
    for (let i = 0; i<todoList.length; i++){
        const todo = todoList[i];
        const html = `<p>${todo}</p>`; // this will create an html code which is the paragraph
        todoListHTML +=html;
    }
    console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML; // this will display the array (HTMl) in paragraphs 
}

function addTodo(){
    const x = document.querySelector('.js-name-input');
    const name = x.value;
    
    todoList.push(name);
    console.log(todoList);

    renderTodoList();

    // this will reset the textbox
    x.value = '';  
}
