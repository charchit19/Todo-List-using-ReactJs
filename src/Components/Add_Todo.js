import React from "react";
// import { Todos } from "./Components/Todos";
import { useState } from "react";

const Add_Todo = ({ add_todo }) => {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      add_todo(title, desc);
      setTitle("");
      setdesc("");
    }
  };

  return (
    <div className="container my-4">
      <h3>Add a To-Do</h3>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="title">To-Do Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">To-Do Description</label>
          <input
            type="text"
            className="form-control"
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            id="desc"
          />
        </div>
        <button type="submit" className="btn my-3 btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add_Todo;
