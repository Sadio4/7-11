import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material'; 
import Switch from '@mui/material/Switch'; 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          

        </p> 

        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=2ZIpFytCSVc"
          target="_blank"
          rel="noopener noreferrer"   
          
        >
        <Button variant="contained">Pls Don't Click</Button> 
          
        </a>
      </header>
    </div>
  );
}

export default App;
