import React from 'react'

import './PlanetsList.scss'

const PlanetsList = () => {
  return (
    <table>
      <tr>
        <th>Planet Name</th>
        <th>Rotation Period</th>
        <th>Orbital Period</th>
        <th>Diameter</th>
        <th>Climate</th>
        <th>Surface Water</th>
        <th>Population</th>
      </tr>
    </table>
  )
}

export default PlanetsList;