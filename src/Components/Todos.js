import React from "react";
import { Items } from "./Items";

export const Todos = (props) => {
  return (
    <div className="container rounded p-3 mb-2 bg-primary text-white">
      <h3 className="text-center my-4">My ToDos List</h3>
      {props.to2dos.length === 0
        ? "No ToDos to Display"
        : props.to2dos.map((toD) => {
          return (
            <>
              <Items todo2={toD} key={toD.srno} onDelete3={props.onDelete2} /><hr />
            </>
          );
        })}
    </div>
  );
};
