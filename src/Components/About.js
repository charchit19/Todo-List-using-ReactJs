import React from 'react'
import { Link } from "react-router-dom"

const About = () => {
    return (
        < div className="boxes">
            <div className="col">
                <div className="card my-5" style={{ margin: "auto", width: "18rem" }}>
                    <div className="card-header"
                        style={{textAlign:"center", fontSize: "x-large" }}>
                        About Myself
                    </div>
                    <div className="card-body">
                        <p className="card-text" style={{ fontSize: "x-large" }}>Charchit Bhatnagar</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Indian Institute of Information Technology, Surat</li>
                        <li className="list-group-item">Computer Science and Engineering</li>
                        <li className="list-group-item">charchitbhatnagar@gmail.com</li>
                    </ul>
                    <div className="card-body">
                        <a href="https://www.linkedin.com/in/charchit-bhatnagar/" target="_blank"
                            className="card-link">Linkedin</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card my-5" style={{ style: "auto", width: "22rem",margin:"auto" }}>
                    <div className="card-header"
                        style={{textAlign:"center", fontSize: "x-large", fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif" }}>
                        About The "To-Do List"
                    </div>
                    <div className="card-body">
                        <h5 className="card-title" style={{ textAlign: "left" }}>To-Do list is a list of errands and other tasks added as a memory aid that one needs or intends to accomplish.</h5>
                        <h5 className="card-title" style={{ textAlign: "left" }}>The app can be used to increase productivity, 
                        stopping you from forgetting things, helps prioritise tasks, 
                        manage tasks effectively, use time wisely and improve time management as well as workflow.</h5>
                        <p className="card-text" style={{ textAlign: "left" }}>Enter the Title of the TODO, its Description and then click on "Submit" button to add a To-Do.  .</p>
                        <p className="card-text" style={{ textAlign: "left" }}>Click on "Delete" button to delete a To-Do.</p>
                        <Link className="btn btn-primary" to="/">Try "To-Do List" !!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
