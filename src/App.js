// import logo from "./logo.svg";
import React, { useEffect, useState } from 'react';
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Todos } from "./Components/Todos";
import About from "./Components/About"
import Add_Todo from "./Components/Add_Todo"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initial_todo;
  if (localStorage.getItem("todo_arr") === null) {
    initial_todo = [];
  }
  else {
    initial_todo = JSON.parse(localStorage.getItem("todo_arr"));
  }


  const onDelete = (todo2) => {                       //Here "todo2" is independent
    console.log("Delete Complete", todo2)
    set_todos_arr(todos_arr.filter((e) => {
      return e !== todo2;
    }))
    localStorage.setItem("todo_arr", JSON.stringify(todos_arr));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);

    let srno;
    if (todos_arr.length === 0) {
      srno = 0;
    }
    else {
      srno = todos_arr[todos_arr.length - 1].srno + 1
    }

    const my_todo = {
      srno: srno,
      title: title,
      desc: desc
    }
    console.log(my_todo);
    set_todos_arr([...todos_arr, my_todo])
  }

  const [todos_arr, set_todos_arr] = useState(initial_todo);
  useEffect(() => {
    localStorage.setItem("todo_arr", JSON.stringify(todos_arr));
  }, [todos_arr])
  return (        //todos_arr is passed as to2dos to "Todos" Component
    <>
      {
        <Router>
          <Header title="To-Do List" search={false} />
          <Routes>
            <Route path="/" element={<div><Add_Todo add_todo={addTodo} />
              <Todos to2dos={todos_arr} onDelete2={onDelete} /></div>}>
            </Route>
            <Route path="/About" element={<About />}>
            </Route>
          </Routes>
          <Footer />
        </Router>
      }
    </>
  );
}

export default App;
