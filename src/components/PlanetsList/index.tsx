import React, { useState } from 'react';

//Styles
import './PlanetsListStyle.scss';

//Components
import PlanetsHeaderCell from './PlanetsHeaderCell';

//Models
import { PlanetsListProps } from './../../models/PlanetsList';
import { SinglePlanetInfo } from './models/SinglePlanetInfo';

//Utilities
import { handleCategory } from './utilities/Category';

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
            let category = handleCategory(item, index);

            return (
              <PlanetsHeaderCell
                headerTitle={item}
                isActive={isSorting === category}
                planetsList={list}
                listSetter={setList}
                isSorting={isSorting}
                setIsSorting={setIsSorting}
                category={category}
                key={index}
              />
            );
          })}
        </tr>
      </thead>
      <tbody>
        {list.map((value: SinglePlanetInfo) => {
          return (
            <tr key={value.id}>
              {arrayOfTableHeaders.map((item, index) => {
                let category = handleCategory(item, index);

                return (
                  <td
                    className={isSorting === category ? 'isSorting' : ''}
                    key={index}
                  >
                    {!value[category]
                      ? uknownStr
                      : category !== 'climates'
                      ? value[category]
                      : value[category].map((val, index) => (
                          <p key={index}>{val}</p>
                        ))}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PlanetsList;
