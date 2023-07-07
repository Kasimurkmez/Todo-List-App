import React, { useState } from "react";
import todoLogo from "../../assets/todoLogo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styles from "./header.module.css";

const Header = ({ handleAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTask(title);
    setTitle("");
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <img src={todoLogo} alt="" />
        <input
          placeholder="Add a new task"
          type="text"
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};

export default Header;
