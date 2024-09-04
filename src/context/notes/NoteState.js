import noteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const host = "https://mynotebook-lubo.onrender.com";

  //Get All notes
  const getNotes = async () => {
  
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token')
        }
      });
      const json = await response.json();
     // console.log(json);
      setNotes(json);
    
  };
  

  //Add a Note
  const addNote = async(title, description, tag) => {

    const response=await fetch(`${host}/api/notes/addnotes`,{
      method:"Post",
      headers:{
      "Content-Type":"application/json",
      "auth-token":localStorage.getItem('token')
      },
      body:JSON.stringify({title,description,tag})
    });
const json=await response.json();
console.log(json);
    const note = {
      _id: "66669133040667a930d02dac",
      user: "6663d9a3160aabb4a75ea9d7",
      title: title,
      description: description,
      tag: tag,
      data: "2024-06-10T05:37:55.790Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //delete A node
  const deleNote = async(id) => {
   const response=await fetch(`${host}/api/notes/delete/${id}`,{
    method:"DELETE",
    headers:{
      "Content-Type":"application/json",
      "auth-token":localStorage.getItem('token')
    }
   })
   const json=await response.json();
console.log(json);

    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };
  //edit note
  const editnote = async(id,title, description, tag) => {

    const response=await fetch(`${host}/api/notes/updatenote/${id}`,{
      method:"PUT",
      headers:{
      "Content-Type":"application/json",
      "auth-token":localStorage.getItem('token')
      },
      body:JSON.stringify({title,description,tag})
    });
    const json=await response.json();
console.log(json);

let newNotes=JSON.parse(JSON.stringify(notes));

   //logic to edit in client

   for(let index=0;index<notes.length;index++)
    {
      const element=newNotes[index];
      if(element._id===id)
        {
          newNotes[index].title=title;
          newNotes[index].description=description;
          newNotes[index].tag=tag;
        
          setNotes(newNotes);
          break;
        }
     
    }

  };

  return (
    <noteContext.Provider value={{ notes,editnote, addNote, deleNote ,getNotes}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
