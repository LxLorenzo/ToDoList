import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Task 1",
      completed: false,
    },
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
       const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10');
       setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskAddition = (tasktitle) => {
    if (tasktitle !== "") {
      const newTasks = [
        ...tasks,
        {
          title: tasktitle,
          id: uuidv4(),
          completed: false,
        },
      ];
      setTasks(newTasks);
    } else {
      alert("Add a title for the task.");
    }
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header />
          <Route path="/" exact render={() => (
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion} />
              </>
            )} 
          />
          <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  );
};

export default App;
