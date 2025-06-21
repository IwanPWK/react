import React, { useState, useEffect } from "react";
import axios from "axios";
import { DateTime } from "luxon";

const Home = () => {
  const [tab, setTab] = useState(1);
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [updateIdTask, setUpdateIdTask] = useState(null);
  const handleTabs = (tab) => {
    setTab(tab);
  };

  //convert UTC to local using luxon
  const convertUTCToLocal = (utcDate, timeZone) => {
    // console.log(navigator.language);
    const locale = navigator.language || "en-US";
    return DateTime.fromISO(utcDate, { zone: "utc" })
      .setZone(timeZone)
      .setLocale(locale)
      .toLocaleString(DateTime.DATETIME_MED); // or custom formate
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    setLoading(true);
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    axios
      .post("http://localhost:5000/api/new-task", { task, timezone })
      .then((res) => {
        setTask("");
        setTodos([res.data, ...todos]);

        // setTodos(res.data);
      })
      .catch((err) => {
        console.error("Error adding task", err);
        alert("Gagal menambahkan task.");
      })
      .finally(() => {
        setLoading(false); // Selesai loading
      });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/api/get-tasks").then((res) => {
      // console.log(res.data);
      setTodos(res.data);
    });
  }, []);

  const handleUpdateTask = (e) => {
    e.preventDefault();
    setIsEdit(false);
    setLoading(true);
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log(`UpdateIdTask = ${updateIdTask}`);

    axios
      .post("http://localhost:5000/api/update-task", {
        id: updateIdTask, // pastikan key-nya cocok dengan yang dibaca backend
        task,
        timezone,
      })
      .then((res) => {
        const updatedTodo = res.data; // diasumsikan backend mengembalikan todo yang sudah diupdate
        console.log(updatedTodo);

        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === updatedTodo.id ? updatedTodo : todo
          )
        );

        // setUpdateIdTask(null); // reset ID update jika perlu
        console.log(todos);
      })
      .catch((err) => {
        console.error("Error updating task", err);
        alert("Gagal mengupdate task.");
      })
      .finally(() => {
        setTask("");
        setUpdateIdTask(null); // reset ID update jika perlu
        setLoading(false); // Selesai loading
      });
  };

  const handleEdit = (id, task) => {
    setIsEdit(true);
    setTask(task);
    setUpdateIdTask(id);
  };

  return (
    <div className="bg-gray-100 w-screen h-screen">
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <div>
          <h2 className="font-bold text-2xl mb-4">Todo Lists</h2>
        </div>
        <div className="flex gap-3">
          <span className="text-sm text-gray-500 text-right">
            {task.length}/75
          </span>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            placeholder="Enter Todo"
            maxLength={75}
            disabled={loading}
            className="bg-white w-64 p-2 outline-none border border-blue-300 rounded-md"
          />
          <button
            onClick={isEdit ? handleUpdateTask : handleAddTask}
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2"
          >
            {loading && (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
            {loading ? "" : isEdit ? "Update" : "Add"}
          </button>
        </div>
        <div className="flex text-sm w-80 justify-evenly mt-4">
          <p
            onClick={() => handleTabs(1)}
            className={`${
              tab === 1 ? "text-blue-700" : "text-black"
            } cursor-pointer`}
          >
            All
          </p>
          <p
            onClick={() => handleTabs(2)}
            className={`${
              tab === 2 ? "text-blue-700" : "text-black"
            } cursor-pointer`}
          >
            Active
          </p>
          <p
            onClick={() => handleTabs(3)}
            className={`${
              tab === 3 ? "text-blue-700" : "text-black"
            } cursor-pointer`}
          >
            Completed
          </p>
        </div>

        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between bg-white p-2 w-80 mt-3 rounded-md"
          >
            <div>
              <p className="text-lg font-semibold">{todo.task}</p>
              <p className="text-xs text-gray-600">
                {convertUTCToLocal(todo.createdAt, todo.timezone)}
              </p>
              <p className="text-sm text-gray-700">Status : {todo.status}</p>
            </div>
            <div className="flex flex-col text-sm justify-center items-start">
              <button
                className="text-blue-600 cursor-pointer"
                onClick={() => handleEdit(todo.id, todo.task)}
              >
                Edit
              </button>
              <button className="text-red-500 cursor-pointer">Delete</button>
              <button className="text-green-600 cursor-pointer">
                Complete
              </button>
            </div>
          </div>
        ))}
        {/* <div>
            <p className="text-lg font-semibold">Buy Rice</p>
            <p className="text-xs text-gray-600">10/12/2024 10:30</p>
            <p className="text-sm text-gray-700">Status : Active</p>
          </div> */}
      </div>
    </div>
  );
};

export default Home;
