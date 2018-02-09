package com.yash.todoapp.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.yash.todoapp.model.Todo;



@Service
public class TodoService {
	private List<Todo> todos=new ArrayList<>(Arrays.asList(
			new Todo(1, "task 1", false),
			new Todo(2, "task 2", false),
			new Todo(3, "task 3", false),
			new Todo(4, "task 4", false)
		));
	
	public List<Todo> getAllTodos(){
		return todos;
	}
	
	public Todo getTodo(int id){
		return todos.stream().filter(t->t.getId()==id).findFirst().get();
	}

	public void addTodo(Todo todo) {
		todos.add(todo);
	}

	public void updateTodo(int id, Todo todo) {
		for(int i = 0; i <= todos.size(); i++){
			Todo t=todos.get(i);
			if(t.getId()==id){
				todos.set(i, todo);
				return;
			}
		}
		
	}

	public void deleteTodo(int id) {
		todos.removeIf(t->t.getId()==id);
	}

	
}
