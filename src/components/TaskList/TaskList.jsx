import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto flex items-center justify-start gap-5  flex-nowrap w-full py-1 mt-16"
    >
      <div className=" flex-shrink-0 h-full w-[300px] rounded-xl bg-red-400">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-5 py-1 my-4 mx-2 rounded">High</h3>
          <h4 className="text-sm pr-3">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl px-2 font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2 px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          cupiditate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, vero.
        </p>
      </div>
      <div className=" flex-shrink-0 h-full w-[300px] rounded-xl bg-blue-400">
        <div className="flex justify-between items-center">
          <h3 className="bg-blue-600 text-sm px-5 py-1 my-4 mx-2 rounded">High</h3>
          <h4 className="text-sm pr-3">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl px-2 font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2 px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          cupiditate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, vero.
        </p>
      </div>
      <div className=" flex-shrink-0 h-full w-[300px] rounded-xl bg-green-400">
        <div className="flex justify-between items-center">
          <h3 className="bg-green-600 text-sm px-5 py-1 my-4 mx-2 rounded">High</h3>
          <h4 className="text-sm pr-3">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl px-2 font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2 px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          cupiditate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, vero.
        </p>
      </div>
      <div className=" flex-shrink-0 h-full w-[300px] rounded-xl bg-yellow-400">
        <div className="flex justify-between items-center">
          <h3 className="bg-yellow-600 text-sm px-5 py-1 my-4 mx-2 rounded">High</h3>
          <h4 className="text-sm pr-3">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl px-2 font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2 px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          cupiditate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, vero.
        </p>
      </div>
      <div className=" flex-shrink-0 h-full w-[300px] rounded-xl bg-orange-400">
        <div className="flex justify-between items-center">
          <h3 className="bg-orange-600 text-sm px-5 py-1 my-4 mx-2 rounded">High</h3>
          <h4 className="text-sm pr-3">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl px-2 font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2 px-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          cupiditate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, vero.
        </p>
      </div>
   </div>   
  );
};

export default TaskList;
