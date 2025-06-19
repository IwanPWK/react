//23:25
import React, { useState } from "react";

const Home = () => {
  const [tab, setTab] = useState(1);
  const [task, setTask] = useState(null);
  const handleTabs = (tab) => {
    setTab(tab);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-gray-100 w-screen h-screen">
      <div className="flex flex-col w-screen h-screen justify-center items-center">
        <div>
          <h2 className="font-bold text-2xl mb-4">Todo Lists</h2>
        </div>
        <div className="flex gap-3">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            placeholder="Enter Todo"
            className="bg-white w-64 p-2 outline-none border border-blue-300 rounded-md"
          />
          <button
            onClick={handleAddTask}
            className="bg-blue-600 text-white px-4 rounded-md"
          >
            Add
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
        <div className="flex justify-between bg-white p-2 w-80 mt-3 rounded-md">
          <div>
            <p className="text-lg font-semibold">Buy Rice</p>
            <p className="text-xs text-gray-600">10/12/2024 10:30</p>
            <p className="text-sm text-gray-700">Status : Active</p>
          </div>
          <div className="flex flex-col text-sm justify-center items-start">
            <button className="text-blue-600 cursor-pointer">Edit</button>
            <button className="text-red-500 cursor-pointer">Delete</button>
            <button className="text-green-600 cursor-pointer">Complete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
