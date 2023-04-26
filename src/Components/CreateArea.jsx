import React, { useState } from "react";

export const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { id, value } = event.target;

    setNote(prevNote =>{
       return{ ...prevNote,
    [id]:value
};
    }); 

    }
    
    
  

  function submitNote(event) {
    props.onAdd(note);

    setNote({
      title:"",
      content:""
    });
    event.preventDefault();
  }
  return (
    <div className="container w-full">
     
      <div class="flex justify-center items-center mt-8 ">
       
      <form className="bg-white rounded-md shadow-md p-4 w-96 flex flex-col">
        <input
          className="focus:outline-none bg-gray-100 rounded-md py-2 px-4 mb-4"
          type="text"
          id="title"    
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          className="resize-none bg-gray-100 focus:outline-none rounded-md py-2 px-4 mb-4"
          rows="3"
          id="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Write a note..." 
        ></textarea>

        <button
          className="bg-yellow-500 text-white rounded-full h-10 w-10"
          onClick={submitNote}
        >
          Add
        </button>
      </form>
       
      </div>
    </div>
  );
};
