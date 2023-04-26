import React from "react";

const Note = ({ title, content, onDelete,id }) => {
  function handleClick() {
    onDelete(id);
  }

  return (
    
    <div className="bg-white rounded-lg shadow-md p-4 w-60 m-4 float-left">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="text-gray-700">{content}</p>
      <button
        className="px-2 py-1 mt-2 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:bg-red-600"
        onClick={handleClick}
      >
        DELETE
      </button>
    </div>
  );
};

export default Note;
