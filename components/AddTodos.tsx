import React, { useState } from 'react';

export const AddTodos = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const submit = (e) => {
    e.preventDefault();
    addTodo(title, desc);
  };
  return (
    <div className="container my-2">
      <h3>Add a Todo!</h3>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Todo Title</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Todo Description</label>
          <input
            type="text"
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Description"
          />
        </div>
        <button type="submit" className="btn btn-success my-2">
          Submit
        </button>
      </form>
    </div>
  );
};
