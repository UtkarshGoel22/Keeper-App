import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

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

    // function to set state of isExpanded to true
    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && (<input name="title" onChange={handleChange} value={note.title} placeholder="Title"/>)}
                <textarea name="content" onClick={expand} onChange={handleChange} value={note.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1}></textarea>
                {/* Zoom effect of button */}
                <Zoom in={isExpanded}>
                    {/* Floating action button */}
                    <Fab onClick={submitNote}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;