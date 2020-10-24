import React from 'react'

//Styled Components
import PlanetsTable from './PlanetsTable'
import PlanetsHeader from './PlanetsHeader'
import PlanetsRow from './PlanetsRow'

const PlanetsList = () => {


  return (
    <PlanetsTable>
      <thead>
        <PlanetsRow>
          <PlanetsHeader>Planet Name</PlanetsHeader>
          <PlanetsHeader>Rotation Period</PlanetsHeader>
          <PlanetsHeader>Orbital Period</PlanetsHeader>
          <PlanetsHeader>Diameter</PlanetsHeader>
          <PlanetsHeader>Climate</PlanetsHeader>
          <PlanetsHeader>Surface Water</PlanetsHeader>
          <PlanetsHeader>Population</PlanetsHeader>
        </PlanetsRow>
      </thead>
    </PlanetsTable>
  )
}

export default PlanetsList;