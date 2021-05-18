import React from 'react';

function CreateArea() {
    return (
        <div>
            <form>
                <input name="title" placeholder="Title"/>
                <textarea name="content" placeholder="Take a note..." rows="3"></textarea>
                <button>ADD</button>
            </form>
        </div>
    );
}

export default CreateArea;