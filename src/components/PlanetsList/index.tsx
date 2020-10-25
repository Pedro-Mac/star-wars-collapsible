import React from 'react'

//Styles
import './PlanetsListStyle.scss'

//Components
import PlanetsHeaderCell from './PlanetsHeaderCell'

//Models
import {PlanetsListProps} from './../../models/PlanetsList'

const PlanetsList: React.FC<PlanetsListProps> = props => {

  console.log(props.planetsList);

  return (
    <table>
      <thead>
        <tr>
          <PlanetsHeaderCell headerTitle="Planet Name"/>
          <PlanetsHeaderCell headerTitle="Rotation Period"/>
          <PlanetsHeaderCell headerTitle="Orbital Period"/>
          <PlanetsHeaderCell headerTitle="Diameter"/>
          <PlanetsHeaderCell headerTitle="Climate"/>
          <PlanetsHeaderCell headerTitle="Surface Water"/>
          <PlanetsHeaderCell headerTitle="Population"/>
        </tr>
      </thead>
      <tbody>
        {props.planetsList.map(value => {
          return (
            <tr>
              <td>{value.name}</td>
              <td>{value.rotationPeriod || 'Unknown'}</td>
              <td>{value.orbitalPeriod || 'Unknown'}</td>
              <td>{value.diameter || 'Unknown'}</td>
              <td>{value.climates.map(value => <p>{value}</p>)}</td>
              <td>{value.surfaceWater || 'Unknown'}</td>
              <td>{value.population || 'Unknown'}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default PlanetsList;