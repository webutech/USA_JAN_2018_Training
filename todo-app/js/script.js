var todoList={
    todos:[],
   
    addTodo:function(todoText){
        this.todos.push({
            todoText:todoText,
            completed:false
        });
        
    },
    changeTodo:function(position,newTodoText){
        var todo=this.todos[position];
        todo.todoText=newTodoText;
        
    },
    deleteTodo:function(position){
        this.todos.splice(position,1);
       
    },
    toggleComplete:function(position) {
        var todo=this.todos[position];
        todo.completed=!todo.completed;
       
    },
    toggleAll: function () {
        var totalTodos=todoList.todos.length;
        
        var completedTodos=0;
        
        this.todos.forEach(function(todo){
            if(todo.completed===true){
                completedTodos++;
            }
        });
        
       
        
        if(completedTodos===totalTodos){
            
            for(var i=0;i<totalTodos;i++){
                todoList.todos[i].completed=false;
            }
        }
        
        else{
            for(var i=0;i<totalTodos;i++){
                todoList.todos[i].completed=true;
            }
        }
        
      
    }
};

var handlers={
    
    toggleAll: function(){
        todoList.toggleAll();
        view.displayTodos();
    },
    addTodo: function () {
        var todoTextInput=document.getElementById('todoTextInput');
        todoList.addTodo(todoTextInput.value);
        todoTextInput.value='';
        view.displayTodos();
    },
    changeTodo: function () { 
        var todoChangePositionInput=document.getElementById('todoChangePositionInput');
        var todoChangeTextInput=document.getElementById('todoChangeTextInput');
        todoList.changeTodo(todoChangePositionInput.value,todoChangeTextInput.value);
        todoChangePositionInput.value='';
        todoChangeTextInput.value='';
        view.displayTodos();
    },
    deleteTodo:function (position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleComplete: function (position) {
        todoList.toggleComplete(position);
        view.displayTodos();
    }
};

var view={
    displayTodos: function(){
        var todosUl=document.querySelector('ul');
        todosUl.innerHTML='';
        for(var i=0;i<todoList.todos.length;i++){
            var todoLi=document.createElement('li');
            var todoTextWithCompletedStatus='';
            if(todoList.todos[i].completed===true){
                todoTextWithCompletedStatus='(X) '+todoList.todos[i].todoText;
            }
            else{
                 todoTextWithCompletedStatus='( ) '+todoList.todos[i].todoText;
            }
            todoLi.id=i;
            todoLi.className='toggleTodo';
            todoLi.title='click list item to change the completion status';
            todoLi.textContent=todoTextWithCompletedStatus;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }        
        
    },
    createDeleteButton: function () {
        var deleteTodoButton=document.createElement('button');
        deleteTodoButton.textContent='X';
        deleteTodoButton.title='click on [X]  to delete todo';
        deleteTodoButton.className='deleteTodoButton';
        return deleteTodoButton;
    },
    setUpEventListener: function() {
        var todosUl=document.querySelector('ul');
        todosUl.addEventListener('click',function (event){
        var clickedButton=event.target;
        if(clickedButton.className==='deleteTodoButton'){
            handlers.deleteTodo(parseInt(clickedButton.parentNode.id) );
        }
        if(event.target.className==='toggleTodo'){
            handlers.toggleComplete(event.target.id);
        }
        
        });        
    }
    
};

view.setUpEventListener();








