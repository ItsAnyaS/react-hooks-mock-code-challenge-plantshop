import React from "react";

function NewPlantForm({handleChange, newPlant, setRefresh}) {

  const handleInputChange =  (e) => {
    handleChange(e.target.name, e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setRefresh(prev => !prev)
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          onChange={handleInputChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
