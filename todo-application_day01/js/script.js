var todoList={
    todos:[],
    
    displayTodo:function (){
        console.log('My Todos: ');
        if(this.todos.length===0){
            console.log('There is no task available');
        }
        else{
           for(var i=0;i<this.todos.length;i++){
                var todo=this.todos[i];
                var todoWithCompletedStatus='';
                if(todo.completed===true){
                    todoWithCompletedStatus='(X)' +todo.todoText;
                }
                else{
                    todoWithCompletedStatus='()' +todo.todoText;
                }
                console.log(todoWithCompletedStatus);
            }
        }
        
    },
    
    addTodo:function(todoText) {
        this.todos.push({
            todoText:todoText,
            completed:false
        });
        this.displayTodo();
    },
    
    changeTodo:function (position,newTodoText){
        this.todos[position].todoText=newTodoText;
        this.displayTodo();
    },
    
    deleteTodo:function (position){
        this.todos.splice(position,1);
        this.displayTodo();
    },
    
    toggleComplete: function(position){
        var todo=this.todos[position];
        todo.completed=!todo.completed;
        this.displayTodo();
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
        this.displayTodo();
    }    
}


var handlers={
    displayTodo: function() {
        todoList.displayTodo();
    },
    
    toggleAll: function () { 
        todoList.toggleAll();
    }
    
    
    
}














