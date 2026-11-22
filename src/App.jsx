import { useState } from 'react'
import './App.css'
import Data from './Component/Data';
import Tour from './Component/Tour';
function App() {
  const [tours , setTours] = useState(Data);
  function removeTour(id) {
    const newTour = tours.filter(tour => tour.id !== id)
    setTours(newTour)
  }
  if(tours.length === 0) {
    return (
      <div className = "refresh">
         <h2 className='referesh-heading'>No Tour Left</h2>
         <button className = "btn-white" onClick={() => setTours(Data)}>Refresh Content</button>
      </div>
    );
  }
  return (
    <div class = "App">
      
      <Tour tours = {tours} removeTour = {removeTour}></Tour>
    </div>
  );
}

export default App
