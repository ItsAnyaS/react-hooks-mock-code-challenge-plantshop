import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, handleChange, newPlant, setRefresh, setSearch, search}) {
  return (
    <main>
      <NewPlantForm
        handleChange={handleChange}
        newPlant={newPlant}
        setRefresh={setRefresh}
      />
      <Search  setSearch={setSearch}/>
      <PlantList plants={plants} search={search}/>
    </main>
  );
}

export default PlantPage;
