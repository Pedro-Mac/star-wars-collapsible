import React, {useState} from 'react'

//Styles
import './PlanetsListStyle.scss'

//Components
import PlanetsHeaderCell from './PlanetsHeaderCell'

//Models
import {PlanetsListProps} from './../../models/PlanetsList'

const PlanetsList: React.FC<PlanetsListProps> = props => {

  const uknownStr = 'unknown'
  const [list, setList] = useState(props.planetsList);

  const handleTableSorting = (key: string, direction: 'ascending' | 'descending' ) => {

    switch(direction) {
      case 'descending':
        const descendingList = list.sort((a, b)=> {
          if((b as any)[key] > (a as any)[key]){
            return -1;
          } else if ((b as any)[key] < (a as any)[key]) {
            return 1;
          } else {
            return 0;
          }
        })
        setList(() => [...descendingList]);
        break;
        case 'ascending':
          const ascendingList = list.sort((a, b)=> {
            if((b as any)[key] < (a as any)[key]){
              return -1;
            } else if ((b as any)[key] > (a as any)[key]) {
              return 1;
            } else {
              return 0;
            }
          })
          setList(() => [...ascendingList]);
          break;
    }
  }


  return (
    <table>
      <thead>
        <tr>
          <PlanetsHeaderCell headerTitle="Planet Name" ascendingHandler={()=>handleTableSorting('name', 'ascending')} descendingHandler={()=>handleTableSorting('name', 'descending')}/>
          <PlanetsHeaderCell headerTitle="Rotation Period" ascendingHandler={()=>handleTableSorting('rotationPeriod', 'ascending')} descendingHandler={()=>handleTableSorting('rotationPeriod', 'descending')}/>
          <PlanetsHeaderCell headerTitle="Orbital Period" ascendingHandler={()=>handleTableSorting('orbitalPeriod', 'ascending')} descendingHandler={()=>handleTableSorting('orbitalPeriod', 'descending')}/>
          <PlanetsHeaderCell headerTitle="Diameter" ascendingHandler={()=>handleTableSorting('diameter', 'ascending')} descendingHandler={()=>handleTableSorting('diameter', 'descending')}/>
          <PlanetsHeaderCell headerTitle="Climate" ascendingHandler={()=>handleTableSorting('climates', 'ascending')} descendingHandler={()=>handleTableSorting('climates', 'descending')}/>
          <PlanetsHeaderCell headerTitle="Surface Water" ascendingHandler={()=>handleTableSorting('surfaceWater', 'ascending')} descendingHandler={()=>handleTableSorting('surfaceWater', 'descending')}/>
          <PlanetsHeaderCell headerTitle="Population" ascendingHandler={()=>handleTableSorting('population', 'ascending')} descendingHandler={()=>handleTableSorting('population', 'descending')}/>
        </tr>
      </thead>
      <tbody>
        {list.map(value => {
          return (
            <tr key={value.id}>
              <td>{value.name}</td>
              <td>{value.rotationPeriod || uknownStr}</td>
              <td>{value.orbitalPeriod || uknownStr}</td>
              <td>{value.diameter || uknownStr}</td>
              <td>{value.climates.map(value => <p key={Math.random() /*Not best practice, but will do in this small examaple*/ }>{value}</p>)}</td>
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