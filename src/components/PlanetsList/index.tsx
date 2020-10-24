import React from 'react'

//Styles
import './PlanetsListStyle.scss'



//Models
interface PlanetsListProps {
  planetsList: {
    id: string;
    name: string;
    rotationPeriod: number | null;
    orbitalPeriod: number | null;
    diameter: number | null;
    climates: string[];
    surfaceWater: number | null;
    population: number | null;
    filmConnection: {
      films: {id: string}[]
    }
  }[]
}

const PlanetsList: React.FC<PlanetsListProps> = props => {

  console.log(props.planetsList);

  return (
    <table>
      <thead style={{width: '100%'}}>
        <tr>
          <th>Planet Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Surface Water</th>
          <th>Population</th>
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