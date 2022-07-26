import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, search}) {

  const handleRender = () => {
   if (!search){
    return plants
   }else {
    let filteredPlants = plants.filter((plant) =>
      plant.name.toLowerCase().includes(search.toLowerCase())
    )
    return filteredPlants
   }
  }
  return (
    <ul className="cards">
        {handleRender().map(plant => {
          return <PlantCard plant={plant} key={plant.id} />;
        })}
    </ul>
  );
}

export default PlantList;


    // let filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase))
    //     console.log(filteredPlants)
    //     if (filteredPlants.length == 0){
    //       return
    //     }else {
    //       filteredPlants.map(plant => {
    //          return( <PlantCard plant={plant} key={plant.id} />)
    //       })
    //     }
    //   }
    // })

    //  if (!search) {
    //    plants.map((plant) => {
    //      return <PlantCard plant={plant} key={plant.id} />;
    //    });
    //  } else {
    //    let filteredPlants = plants.filter((plant) =>
    //      plant.name.toLowerCase().includes(search.toLowerCase())
    //    );
    //    console.log(filteredPlants);
    //    filteredPlants.map((plant) => {
    //      return <PlantCard plant={plant} key={plant.id} />;
    //    });
    //  }