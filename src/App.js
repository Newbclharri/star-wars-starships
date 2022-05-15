import './App.css';
import { useState, useEffect } from 'react';
import Banner from './components/Banner/Banner';
import StarshipCards from './components/StarshipCards/StarshipCards';

function App() {
  const API = `https://swapi.dev/api/starships/`;
  const [starships1, setStarships1] = useState(null);
  const [starships2, setStarships2] = useState(null);
  const [starships3, setStarships3] = useState(null);
  const [starships4, setStarships4] = useState(null);
  const [allStarships, setAllStarShips] = useState(null);
  const getStarshipData = async ()=>{
    const response1 = await fetch(API);
    const starshipData1 = await response1.json();    
    const response2 = await fetch(starshipData1.next);
    const starshipData2 = await response2.json();
    const response3 = await fetch(starshipData2.next)
    const starshipData3 = await response3.json();
    const response4 = await fetch(starshipData3.next)
    const starshipData4 = await response4.json()
    setStarships1(starshipData1.results);
    setStarships2(starshipData2.results);
    setStarships3(starshipData3.results);
    setStarships4(starshipData4.results);
    setAllStarShips([starshipData1.results, starshipData2.results, starshipData3.results, starshipData4.results])
  }

  useEffect(()=>{getStarshipData()},[])

  return (
    <div className="App">
      <Banner text="STAR WARS STARSHIPS"/>
      <StarshipCards 
        starships1={starships1}
        starships2={starships2}
        starships3={starships3}
        starships4={starships4}
        allStarships={allStarships}      
      />
    </div>
  );
}

export default App;
