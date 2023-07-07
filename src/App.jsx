import React, { useState, useEffect } from "react";
import Header from "./components/Header/index";
import Tasks from "./components/Tasks/index";

const LOCAL_STORAGE_KEY = "todo:tasks";

const App = () => {
  const [tasks, setTasks] = useState();

  const loadSavedTasks = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
    return (
      <>
        <Header handleAddTask={addTask} />
        <Tasks
          tasks={tasks}
          onDelete={deleteTaskById}
          onComplete={toogleTaskComleteById}
        />
      </>
    );
  };
};

export default App;
