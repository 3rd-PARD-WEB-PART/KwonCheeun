import React, { useState } from 'react';
import styled from "styled-components";

function App() {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
  const handleButtonClick = () => {
    alert(inputValue);
  }

  return(
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Display Alert</button>
    </div>
  )
}

const Button = styled.button'
  background-color: #0077cc;
  

'

export default App;