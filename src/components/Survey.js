import React, { useState } from 'react';

import axios from 'axios';

function Survey({ onSurveyComplete }) {
    const [formData, setFormData] = useState({
        name: '',
        feedback: '',
    });
    const [loading, setLoading] = useState(false); // State to manage the loading spinner

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Show the loading spinner
        setLoading(true);

        try {
            const response = await axios.post('/api/survey-response', formData);

            // Hide the loading spinner
            setLoading(false);

            // Handle the response from the server as needed
            console.log('Server response:', response.data);

            // Reset the form if needed
            setFormData({
                name: '',
                feedback: '',
            });

            // Notify the parent component that the survey is complete
            onSurveyComplete();
        } catch (error) {
            // Hide the loading spinner on error
            setLoading(false);

            // Handle any errors that occur during the request
            console.error('Error submitting survey:', error);
        }
    };

    return (
        <div>
            <h2>Survey</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Feedback:
                    <textarea
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </label>
                <br />
                <button type="submit">Submit</button>   
            </form>
          
        </div>
    );
}

export default Survey;
