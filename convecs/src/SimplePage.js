import React, { useState } from 'react';

function SimplePage() {
    const [inputValue, setInputValue] = useState(''); // State to hold the text field value
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value); // Update state with text field value
    };
  
    const handleButtonClick = () => {
      alert(`Button clicked with text field value: ${inputValue}`); // Action on button click
    };
  
    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonClick}>Click Me</button>
      </div>
    );
  }
  
  export default SimplePage;