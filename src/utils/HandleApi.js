import axios from 'axios';

const baseUrl = 'https://todo-app-backend-phca.onrender.com';

export const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data', data);
            setToDo(data);
        })
        .catch((err) => console.log(err));
};

export const addToDo = (text, setText, setToDo) => {
    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText('');
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err));
};

export const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios
        .put(`${baseUrl}/update`, { _id: toDoId, text })  // Changed to PUT method
        .then((data) => {
            console.log(data);
            setText('');
            setIsUpdating(false);
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err));
};

export const deleteToDo = (_id, setToDo) => {
    axios
        .delete(`${baseUrl}/delete`, { data: { _id } })
        .then((data) => {
            console.log(data);
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err));
};