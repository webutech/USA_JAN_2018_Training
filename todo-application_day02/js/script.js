var todoList={
    todos:[],
    
    
    
    addTodo:function(todoText) {
        this.todos.push({
            todoText:todoText,
            completed:false
        });
        
    },
    
    changeTodo:function (position,newTodoText){
        this.todos[position].todoText=newTodoText;
        
    },
    
    deleteTodo:function (position){
        this.todos.splice(position,1);
        
    },
    
    toggleComplete: function(position){
        var todo=this.todos[position];
        todo.completed=!todo.completed;
       
    },
    
    toggleAll: function(){
       
        var totalTodos=this.todos.length;
        var completedTodos=0;
        for(var i=0;i<totalTodos;i++){
            var todo=this.todos[i];
            if(todo.completed===true){
              completedTodos++;  
            }
        }
        
        if(completedTodos===totalTodos){
            for(var i=0;i<totalTodos;i++){
                this.todos[i].completed=false;
            }
        }
        else{
            for(var i=0;i<totalTodos;i++){
                this.todos[i].completed=true;
            }
        }
       
    }    
}


var handlers={
    toggleAll: function () { 
        todoList.toggleAll();
        view.displayTodo();
    },
    addTodo: function(){
        var addTodoTextInput=document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        view.displayTodo();
        addTodoTextInput.value="";        
    },
    changeTodo: function(){
        var changeTodoPositionInput=document.getElementById('changeTodoPositionInput');
        var changeTodoTextInput=document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.value,changeTodoTextInput.value);
        view.displayTodo();
        changeTodoPositionInput.value="";
        changeTodoTextInput.value="";
    },
    deleteTodo: function(){
        var deleteTodoPositionInput=document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.value);
        view.displayTodo();
        deleteTodoPositionInput.value="";
    },
    toggCompleteTodo:function(){
        var toggleTodoPositionInput=document.getElementById('toggleTodoPositionInput');
        todoList.toggleComplete(toggleTodoPositionInput.value);
        view.displayTodo();
        toggleTodoPositionInput.value="";
    }
    
}

var view={
    displayTodo: function(){
        var todosUl=document.querySelector('ul');
        todosUl.innerHTML="";
        // 3 tasks - 3 bullets
        for(var i=0;i<todoList.todos.length;i++){
          var todoLi=document.createElement('li');
          var todoTextWithCompletionStatus='';
          var todo=todoList.todos[i];
          if(todo.completed===true){
              todoTextWithCompletionStatus='(X)'+ todo.todoText;
          }
          else{
              todoTextWithCompletionStatus='()'+ todo.todoText;
          }
          todoLi.id=i;    
          todoLi.textContent=todoTextWithCompletionStatus;
          todoLi.appendChild(this.createDeleteButton());    
          todosUl.appendChild(todoLi);
        }       
    },
    
    createDeleteButton:function(){
        var deleteButton;
        deleteButton=document.createElement('button');
        deleteButton.textContent='Delete';
        deleteButton.className='deleteTodoButton';
        return deleteButton;
    },
    setUpEventListener: function(){
        var todosUl=document.querySelector('ul');
        todosUl.addEventListener('click',function(event){    
        // get the element that is clicked
        var elementClicked=event.target;
        // check if element clicked is delete button
        if(elementClicked.className==='deleteTodoButton'){
            // run handers.deleteTodo() method
            handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
        }
    });
    }
    
}

view.setUpEventListener();


















