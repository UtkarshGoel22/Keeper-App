import React, { useState } from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateArea from './CreateArea'

function App() {
    const [notes, setNotes] = useState([]);
    function addNote(newNote) {
        //console.log(note);
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }
    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            <Note key={1} title="Note Title" content="Note Content"/>
            <Footer />
        </div>
    );
}

export default App;