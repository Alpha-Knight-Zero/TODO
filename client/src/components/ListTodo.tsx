import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTodo";

const ListTodo = () => {
  const [todos, setTodos] = useState([]);
  //delete todo function
  const deleteTodo = async (id: number) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      window.location.href = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      <table className="table table table-hover mt-5 text-center">
        <thead>
          <tr>
            <th>S No.</th>
            <th>Date</th>
            <th>Description</th>
            <th>Time</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo: any, index) => (
            <tr key={todo.id}>
              <td>{1 + index}</td>
              <td>
                {todo.timerecorded.substring(8, 10) +
                  todo.timerecorded.substring(4, 8) +
                  todo.timerecorded.substring(0, 4)}
              </td>
              <td>{todo.description}</td>
              <td>{todo.timerecorded.substring(11, 19)}</td>
              <td>
                <EditTodo todo={todo}></EditTodo>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodo;
