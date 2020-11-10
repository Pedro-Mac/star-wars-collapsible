import React, { useState } from 'react';

//Styles
import './PlanetsListStyle.scss';

//Components
import PlanetsHeaderCell from './PlanetsHeaderCell';

//Models
import { PlanetsListProps } from './../../models/PlanetsList';

const PlanetsList: React.FC<PlanetsListProps> = ({ planetsList }) => {
  const uknownStr = 'unknown';
  const [list, setList] = useState(planetsList);
  const [isSorting, setIsSorting] = useState<string>('');

  const arrayOfTableHeaders = [
    'Planet Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climates',
    'Surface Water',
    'Population'
  ];

  return (
    <table>
      <thead>
        <tr>
          {arrayOfTableHeaders.map((item, index) => {
            let category = '';
            if (!index) category = 'name';
            if (item.includes(' ')) {
              const arrayOfStrings = item.split(' ');
              category = arrayOfStrings
                .map((value, index) => (!index ? value.toLowerCase() : value))
                .join('');
            } else {
              category = item.toLowerCase();
            }
            return (
              <PlanetsHeaderCell
                headerTitle={item}
                isActive={isSorting === category}
                planetsList={list}
                listSetter={setList}
                isSorting={isSorting}
                setIsSorting={setIsSorting}
                category={category}
              />
            );
          })}
        </tr>
      </thead>
      <tbody>
        {list.map(value => {
          return (
            <tr key={value.id}>
              <td className={isSorting === 'name' ? 'isSorting' : ''}>
                {value.name}
              </td>
              <td className={isSorting === 'rotationPeriod' ? 'isSorting' : ''}>
                {value.rotationPeriod || uknownStr}
              </td>
              <td className={isSorting === 'orbitalPeriod' ? 'isSorting' : ''}>
                {value.orbitalPeriod || uknownStr}
              </td>
              <td className={isSorting === 'diameter' ? 'isSorting' : ''}>
                {value.diameter || uknownStr}
              </td>
              <td className={isSorting === 'climates' ? 'isSorting' : ''}>
                {value.climates.map((value, index) => (
                  <p
                    key={
                      index /*Not best practice, but will do in this small examaple*/
                    }
                  >
                    {value}
                  </p>
                ))}
              </td>
              <td className={isSorting === 'surfaceWater' ? 'isSorting' : ''}>
                {value.surfaceWater || uknownStr}
              </td>
              <td className={isSorting === 'population' ? 'isSorting' : ''}>
                {value.population || uknownStr}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PlanetsList;
