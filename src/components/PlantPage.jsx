

import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({
  plants,
  onAddPlant,
  search,
  onSearchChange,
  onSoldOut,
}) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search
        search={search}
        onSearchChange={onSearchChange}
      />
      <PlantList
        plants={plants}
        onSoldOut={onSoldOut}
      />
    </main>
  );
}

export default PlantPage;
