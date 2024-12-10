import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const ToDo = ({ text, updateMode, deleteToDo, _id }) => {
    return (
        <div className="todo">
            <div className="text">{text}</div>
            <div className="icons">
                <BiEdit className="icon" onClick={updateMode} />
                <AiFillDelete className="icon" onClick={() => deleteToDo(_id)} />
            </div>
        </div>
    );
};

export default ToDo;