import axios from 'axios';
import { useState } from 'react';

const CreateTodoTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/todo', { title, description })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('There was an error creating the todo!', error);
      });

    setTitle('');
    setDescription('');
  };

  return (
    <div className="w-6/12 ml-32 justify-center items-center border bg-white shadow-sm">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <br />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <br />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-md w-[60px]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTodoTodo;
