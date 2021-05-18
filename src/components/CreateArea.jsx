import React, { useState } from 'react';

function CreateArea(props) {
    // to store the current note object.
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    // function which handle changes made in input and textarea.
    function handleChange(event) {
        // destructuring name and value attributes of the element that triggerd the event.
        const {name, value} = event.target;
        // function to update the state of note.
        setNote(prevNote => {
            return {
                // using spread operator for previous values
                ...prevNote,
                [name]: value
            }
        })
    }

    // function to call the addNote function in App.jsx
    // which was passed as a prop (onAdd). 
    function submitNote(event) {
        props.onAdd(note);
        // clearing the state of note.
        setNote({
            title: "",
            content: ""
        });
        // preventing the default behavior of form as
        // they refresh after being submitted
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input name="title" onChange={handleChange} value={note.title} placeholder="Title"/>
                <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3"></textarea>
                <button onClick={submitNote}>ADD</button>
            </form>
        </div>
    );
}

export default CreateArea;