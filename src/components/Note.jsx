import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
    // function to call the deleteNote function in App.jsx
    // which was passed as a prop (onDelete). 
    function handleClick() {
        props.onDelete(props.id);
    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}><DeleteIcon /></button>
        </div>
    );
}

export default Note;