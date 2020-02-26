import React, { Component } from 'react'
import AddTodo from './AddTodo.js';
import request from 'superagent';

export default class TodoApp extends Component {
    state = { todos: [] }
    componentDidMount = async() => {
        const todis = await request.get('https://secure-reaches-45054.herokuapp.com/api/todos')

        this.setState({ todos: todos.body })
    }

    handleClick = async() => {
        const newTodo = {
//assigning tasks a unique id 
            id: Math.random(),
            task: this.state.todoInput,
            complete: false,
        };
//spread method for adding new tasks 
        const newTodos = [...this.state.todos, newTodo];

        this.setState({ todos: newTodos });
        const data = await request.post('https://secure-reaches-45054.herokuapp.com/api/todos', {
            task: this.state.todoInput 
        });
    }

    handleInput = (e) => { this.setState({ todoInput: e.target.value })};
    

render() {
    return(
        <div>
            <AddTodo
            todo={ this.state.todoInput }
            handleClick={ this.handleClick }
            handleInput={ this.handleInput }
        />

        {
            this.state.todos.map((todo) => <p
            style={{
                testDecoration: todo.complete ? 'line-through' : 'none'
            }}
            onClick={async() => {
                const newTodos = this.state.todos.slice();

                const matchingTodo = newTodos.find((thisTodo) => todo.id === this.Todo.id );

                matchingTodo.complete = !todo.complete 

                this.setState({ todos: newTodos });
                const data = await request.put(`https://secure-reaches-45054.herokuapp.com/api/todos/${todo.id}`, matchingTodo );
            }} key={todo.id}>
                {todo.task}
            </p>)

        }

        </div>
    )
}
}
