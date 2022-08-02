import React from "react";
import NoteList from "./components/NoteList";
import Header from "./components/Header";
import AddNote from "./components/AddNote";
import NoteProvider from "./context/NoteProvider";
function App() {

  return (
    <NoteProvider>  
      <div className="App">
        <Header />
        <AddNote />
        <NoteList  />
      </div>
    </NoteProvider>
  )
}

export default App
