import React, { useState } from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateArea from './CreateArea'

function App() {
    // array to store all the notes.
    const [notes, setNotes] = useState([]);

    // function to add note in the array 
    function addNote(newNote) {
        //console.log(note);
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    // function to delete note in the array
    function deleteNote(id) {
        //console.log("Delete was triggered");
        setNotes(prevNotes => {
            // using filter function to remove the note from notes array
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {/* using map function to iterate over the notes array.
            Returning a note component for each noteItem.
            Also sending information in the form of props. */}
            {notes.map((noteItem, index) => {
                return <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote}/>
            })}
            <Footer />
        </div>
    );
}

export default App;