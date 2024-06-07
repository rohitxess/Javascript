// because we have two variables now, we need to make 
// this array into array of objects 

const todoList = [
    {name: 'x', duedate: '12/05/2024'}];


// this the function to generate HTML and to display 
function renderTodoList(){
    
    let todoListHTML = ''; // to store the result 
   
    for (let i = 0; i<todoList.length; i++){
        const todoObject = todoList[i];
        const name = todoObject.name;
        const duedate = todoObject.duedate;

        const html = `<div>${name}</div>
        <div>${duedate}</div>
        <button
        class ="deleteButton"
        onclick= "todoList.splice(${i},1);
        renderTodoList();">
        Delete
        </button>`; 
        // this will create an html code which is the paragraph
        todoListHTML +=html;
    }
    //console.log(todoListHTML);
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
     // this will display the array (HTMl) in paragraphs 
}

// this is a function to add 

function addTodo(){
    const x = document.querySelector('.js-name-input');
    const getname = x.value;

    const date = document.querySelector('.js-date-input');
    const getdate = date.value;
    
    if (x.value === ''){
        alert('Please Enter a task')
    } else {
        todoList.push({
            name: getname,
            duedate: getdate
        });
    }
    

   // console.log(todoList);

    renderTodoList();

    // this will reset the textbox
    x.value = '';
    date.value ='';  
}
