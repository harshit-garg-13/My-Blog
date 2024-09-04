
import './App.css';
import {HashRouter as Router,Routes,Route} from "react-router-dom";
import About from './components/About';
import Naavbar from './components/Naavbar';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
function App() {
  return (
    <>
    <NoteState>
   <Router basename="/">
    <Naavbar/>
    <div className="container my-3">
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/About" element={<About />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/signup" element={<Signup />} />
    </Routes>
    </div>
   </Router>
   </NoteState>
    </>
  );
}

export default App;
