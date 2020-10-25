import React from 'react'

//Styles
import './PlanetsListStyle.scss'

//Components
import PlanetsHeaderCell from './PlanetsHeaderCell'

//Models
import {PlanetsListProps} from './../../models/PlanetsList'

const PlanetsList: React.FC<PlanetsListProps> = props => {

  console.log(props.planetsList);
  const uknownStr = 'unknown'

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
              <td>{value.rotationPeriod || uknownStr}</td>
              <td>{value.orbitalPeriod || uknownStr}</td>
              <td>{value.diameter || uknownStr}</td>
              <td>{value.climates.map(value => <p>{value}</p>)}</td>
              <td>{value.surfaceWater || uknownStr}</td>
              <td>{value.population || uknownStr}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default PlanetsList;