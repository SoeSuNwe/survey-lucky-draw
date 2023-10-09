import React, { useState } from 'react';

function Survey({ onSurveyComplete }) {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      onSurveyComplete();
    }, 2000);
  };

  return (
    <div>
      <h1>Survey</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br /><br />
        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        ></textarea><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Survey;
