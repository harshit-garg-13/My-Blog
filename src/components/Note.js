import { useContext, useEffect, useRef,useState } from 'react'
import noteContext from '../context/notes/noteContext'
import NoteItems from './NoteItems';
import AddNote from './AddNote';
const Note = () => {
  const context = useContext(noteContext);
  const { notes, getNotes,editnote } = context; //destructuring
  const [note,setNote]=useState({id:"" ,etitle:"",edescription:"",etag:""});
  const ref=useRef(null);
  const newRef=useRef(null);
  useEffect(() => {
    getNotes();
// eslint-disable-next-line
  },[])
  const updateNote = (currNote) => {
  ref.current.click();
  setNote({ id: currNote._id,etitle:currNote.title,edescription:currNote.description,etag:currNote.tag});
  }

const handleClick=(e)=>{
e.preventDefault();//taki page reload na hoh;
editnote(note.id,note.etitle,note.edescription,note.etag);
newRef.current.click();


}

const onChange=(e)=>{
setNote({...note,[e.target.name]:e.target.value});
}
  return (
    <>
      <AddNote />

      <button  ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" value={note.etitle} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button  ref={newRef} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3 mb-5">
        <h1 className="text-primary">Your Notes</h1>
        {Array.isArray(notes) && (notes.length>0)? notes.map((note) => {
          return <NoteItems note={note} updateNote={updateNote} />;
        }) : <p className="mx-2 text-danger"></p>}
      </div>
    </>
  )
}

export default Note
