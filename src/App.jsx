import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormComponent from './Form'
function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => 
  {
  setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={`App ${isDarkTheme ? 'dark-theme': ''}`}>
    <FormComponent />
    <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default App
