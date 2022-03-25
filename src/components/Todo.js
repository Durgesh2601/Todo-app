import React, { useState, useEffect } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import "./Todo.css";

export function Todo() {
  const [todo, setTodo] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData(page);
  }, [page]);
  const getData = (page = 1) => {
    fetch(`https://myfake-server.herokuapp.com/todos?_page=${page}&_limit=3`)
      .then((d) => d.json())
      .then((res) => {
        setTodo(res);
      });
  };
  const handleClick = (title, text) => {
    const data = {
      item_title: title,
      text1: text,
      status: false,
    };
    fetch("https://myfake-server.herokuapp.com/todos", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }).then(getData);
  };
  const handleDelete = (id) => {
    fetch(`https://myfake-server.herokuapp.com/todos/${id}`, {
      method: "DELETE",
    }).then(() => getData(page));
  };
  const handleToggle = (id, status) => {
    const data = {
      status: !status,
    };
    fetch(`https://myfake-server.herokuapp.com/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    }).then(() => getData(page));
  };
  return (
    <>
      <h1 className="title">Todo...</h1>
      <br />
      <TodoInput handleClick={handleClick} />
      <br />
      <h4
        style={
          todo.length === 0
            ? { visibility: "visible" }
            : { visibility: "hidden" }
        }
      >
        Looks like there is nothing in your todo list today.
        <br />
        Please add some tasks!
      </h4>
      <table
        style={
          todo.length > 0 ? { visibility: "visible" } : { visibility: "hidden" }
        }
        className="table table-success table-striped"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Task</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((e, i) => {
            return (
              <>
                <tr>
                  <TodoItem
                    handleToggle={handleToggle}
                    handleDelete={handleDelete}
                    title={e.item_title}
                    status={e.status}
                    text={e.text1}
                    id={e.id}
                    i={i}
                  />
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <br />
      <p
        style={
          todo.length > 0 ? { visibility: "visible" } : { visibility: "hidden" }
        }
      >
        Page : {page}
      </p>
      <div
        style={
          todo.length > 0 ? { visibility: "visible" } : { visibility: "hidden" }
        }
        className="btn-group"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button
          disabled={page === 1}
          type="button"
          className="btn btn-secondary btn-sm prev"
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <button
        disabled = {todo.length < 3 ? true : false} 
          type="button"
          className="btn btn-success btn-sm next"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}
