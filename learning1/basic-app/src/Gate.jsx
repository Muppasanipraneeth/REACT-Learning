import { useState } from 'react';

const Question = () => {
  const [selectedOption, setSelectedOption] = useState('');

  // Hardcoded question data
  const question = {
    questionText: 'What is the correct answer to this GATE practice question?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 'Option B',
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption === question.correctAnswer) {
      alert('Correct Answer!');
    } else {
      alert('Incorrect Answer!');
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md no-select">
      <form onSubmit={handleSubmit}>
        <p className="text-xl font-semibold text-gray-800">{question.questionText}</p>
        <div className="mt-4">
          {question.options.map((option, index) => (
            <div key={index} className="mb-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={handleOptionChange}
                  className="form-radio text-blue-600"
                />
                <span className="ml-2 text-gray-700">{option}</span>
              </label>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Question;
