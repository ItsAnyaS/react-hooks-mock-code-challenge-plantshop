import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import {useState, useEffect} from 'react'

function App() {
const [plants, setPlants] = useState([])
const [newPlant, setNewPlant] = useState({})
const [refresh, setRefresh] = useState(false)
const [search, setSearch] = useState('')
useEffect(()=> {
  const getPlants = async () => {
    let req = await fetch("http://localhost:6001/plants");
    let res = await req.json()
    setPlants(res)
  }

  getPlants()
}, [refresh])

const handleChange = (name, value) => {
setNewPlant({
  ...newPlant,
  [name]: value 
})
}

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} handleChange={handleChange} newPlant={newPlant} setRefresh={setRefresh} setSearch={setSearch} search={search}/>
    </div>
  );
}

export default App;
