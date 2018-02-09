package com.yash.todoapp.model;

public class Todo {
	
	private int id;
	private String todoText;
	private boolean completed;
	
	public Todo(){
		
	}
	
	

	public Todo(int id, String todoText, boolean completed) {
		super();
		this.id = id;
		this.todoText = todoText;
		this.completed = completed;
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTodoText() {
		return todoText;
	}

	public void setTodoText(String todoText) {
		this.todoText = todoText;
	}

	public boolean isCompleted() {
		return completed;
	}

	public void setCompleted(boolean completed) {
		this.completed = completed;
	}
	
	
	
}
