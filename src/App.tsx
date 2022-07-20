import React from "react";
import ModalList from "./components/ModalList";
import Header from "./components/Header";
import AddNote from "./components/AddNote";
import NoteProvider from "./context/NoteProvider";
function App() {

  return (
    <NoteProvider>  
      <div className="App">
        <Header />
        <AddNote />
        <ModalList />
      </div>
    </NoteProvider>
  )
}

export default App
