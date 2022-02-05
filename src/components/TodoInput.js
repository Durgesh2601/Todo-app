import { useState } from "react";
import "./Todo.css";
export const TodoInput = ({ handleClick }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  return (
    <>
      <div class="input-group flex-nowrap mb-4">
        <input
          type="text"
          className="form-control inputTitle"
          placeholder="Title..."
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control inputBody"
          placeholder="Add Task..."
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          type="button"
          className="btn btn-success addBtn"
          onClick={() => handleClick(title, text)}
        >
          Add
        </button>
      </div>
    </>
  );
};
