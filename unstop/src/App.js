import './App.css';
import Desktop from './Components/Desktop';
import MobileView from "./Components/MobileView"
import { useState } from 'react';

function App() {
  const [viewPort, setViewPort] = useState(true)
  return (
    <div className="App">
      {
        viewPort ?
          <Desktop viewPort={viewPort} setViewPort={setViewPort} />
          :
          <MobileView viewPort={viewPort} setViewPort={setViewPort} />
      }


    </div>
  );
}

export default App;
