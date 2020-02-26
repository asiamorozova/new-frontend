import React, { Component } from "react";

export default class AddTodo extends Componet {
  render() {
    return (
      <div>
        <input value={this.props.todoInput} onChange={this.props.handleInput} />
        <button onCLick={this.props.handleClick}>Add task</button>
      </div>
    );
  }
}
