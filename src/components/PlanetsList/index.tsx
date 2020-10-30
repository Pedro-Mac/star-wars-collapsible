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


  return (
    <table>
      <thead>
        <tr>
          {/*Passing the state and the setters in order to manage them in the component reponsible for changing them*/}
          <PlanetsHeaderCell headerTitle="Planet Name" isActive={isSorting === 'name'}  planetsList={list} listSetter={setList} isSorting={isSorting} setIsSorting={setIsSorting} category={"name"}/>
          <PlanetsHeaderCell headerTitle="Rotation Period" isActive={isSorting === 'rotationPeriod'}  planetsList={list} listSetter={setList} isSorting={isSorting} setIsSorting={setIsSorting} category={"rotationPeriod"}/>
          <PlanetsHeaderCell headerTitle="Orbital Period" isActive={isSorting === 'orbitalPeriod'}  planetsList={list} listSetter={setList} isSorting={isSorting} setIsSorting={setIsSorting} category={"orbitalPeriod"}/>
          <PlanetsHeaderCell headerTitle="Diameter" isActive={isSorting === 'diameter'}  planetsList={list} listSetter={setList} isSorting={isSorting} setIsSorting={setIsSorting} category={"diameter"}/>
          <PlanetsHeaderCell headerTitle="Climate" isActive={isSorting === 'climates'}  planetsList={list} listSetter={setList} isSorting={isSorting} setIsSorting={setIsSorting} category={"climates"}/>
          <PlanetsHeaderCell headerTitle="Surface Water" isActive={isSorting === 'surfaceWater'}  planetsList={list} listSetter={setList} isSorting={isSorting} setIsSorting={setIsSorting} category={"surfaceWater"}/>
          <PlanetsHeaderCell headerTitle="Population" isActive={isSorting === 'population'}  planetsList={list} listSetter={setList} isSorting={isSorting} setIsSorting={setIsSorting} category={"population"}/>
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