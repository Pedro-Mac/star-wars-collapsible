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
  const [isSorting, setIsSorting] = useState<string>('')

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

    setIsSorting(()=> key);
  }


  return (
    <table>
      <thead>
        <tr>
          {/*I have to pass down thhis components' state in order to re-render all the header cells and update the color*/}
          <PlanetsHeaderCell headerTitle="Planet Name" isActive={isSorting === 'name'} ascendingHandler={()=>handleTableSorting('name', 'ascending')} descendingHandler={()=>handleTableSorting('name', 'descending')} />
          <PlanetsHeaderCell headerTitle="Rotation Period" isActive={isSorting === 'rotationPeriod'} ascendingHandler={()=>handleTableSorting('rotationPeriod', 'ascending')} descendingHandler={()=>handleTableSorting('rotationPeriod', 'descending')}/>
          <PlanetsHeaderCell headerTitle="Orbital Period" isActive={isSorting === 'orbitalPeriod'} ascendingHandler={()=>handleTableSorting('orbitalPeriod', 'ascending')} descendingHandler={()=>handleTableSorting('orbitalPeriod', 'descending')}/>
          <PlanetsHeaderCell headerTitle="Diameter" isActive={isSorting === 'diameter'} ascendingHandler={()=>handleTableSorting('diameter', 'ascending')} descendingHandler={()=>handleTableSorting('diameter', 'descending')}/>
          <PlanetsHeaderCell headerTitle="Climate" isActive={isSorting === 'climates'} ascendingHandler={()=>handleTableSorting('climates', 'ascending')} descendingHandler={()=>handleTableSorting('climates', 'descending')}/>
          <PlanetsHeaderCell headerTitle="Surface Water" isActive={isSorting === 'surfaceWater'} ascendingHandler={()=>handleTableSorting('surfaceWater', 'ascending')} descendingHandler={()=>handleTableSorting('surfaceWater', 'descending')}/>
          <PlanetsHeaderCell headerTitle="Population" isActive={isSorting === 'population'} ascendingHandler={()=>handleTableSorting('population', 'ascending')} descendingHandler={()=>handleTableSorting('population', 'descending')}/>
        </tr>
      </thead>
      <tbody>
        {list.map(value => {
          return (
            <tr key={value.id}>
              <td className={(isSorting === 'name' && 'isSorting') || ''}>{value.name}</td>
              <td className={(isSorting === 'rotationPeriod' && 'isSorting') || ''}>{value.rotationPeriod || uknownStr}</td>
              <td className={(isSorting === 'orbitalPeriod' && 'isSorting') || ''}>{value.orbitalPeriod || uknownStr}</td>
              <td className={(isSorting === 'diameter' && 'isSorting') || ''}>{value.diameter || uknownStr}</td>
              <td className={(isSorting === 'climates' && 'isSorting') || ''}>{value.climates.map(value => <p key={Math.random() /*Not best practice, but will do in this small examaple*/ }>{value}</p>)}</td>
              <td className={(isSorting === 'surfaceWater' && 'isSorting') || ''}>{value.surfaceWater || uknownStr}</td>
              <td className={(isSorting === 'population' && 'isSorting') || ''}>{value.population || uknownStr}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default PlanetsList;