import React, { useState } from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
const AddNote = () => {
    const context=useContext(noteContext);
    const {addNote}=context; //destructuring

const [note,setNote]=useState({title:"",description:"",tag:"default"});
const handleChange=(e)=>{
  if(!localStorage.getItem('token'))
    {
      return alert("You need to login first");
    }
e.preventDefault();//taki page reload na hoh;
addNote(note.title,note.description,note.tag);
}

const onChange=(e)=>{
setNote({...note,[e.target.name]:e.target.value});
}

  return (
      <div className="my-5">
    <h1 className="text-primary">Add a Note</h1>
     <form>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label">Description</label>
    <input type="text" className="form-control" id="description" name="description" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleChange}>Submit</button>
</form>
</div>

  )
}

export default AddNote
