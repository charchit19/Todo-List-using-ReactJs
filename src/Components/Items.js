import React from "react";

export const Items = ({ todo2 ,onDelete3}) => {
  return (
    <div>
      <h4>{todo2.title}</h4>
      <p>{todo2.desc}</p>
      <button type="button" className="btn btn-sm btn-danger" onClick={()=>{onDelete3(todo2)}}>
        Delete
      </button>
    </div>
  );
};
