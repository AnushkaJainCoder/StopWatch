import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [time, setTime] = useState(0);

  return (
    <>
      <h1>StopWatch</h1>
      <div>
      <span>{("0" + Math.floor((time / 60000) % 60))}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60))}:</span>
      <span>{("0" + ((time / 10) % 100))}</span>

      </div>
      <div>
      <button>
          start
        </button>
        <button>
          stop
        </button>
        <button>
          restart
        </button>
        
      </div>
    
    </>
  );
}

export default App;
