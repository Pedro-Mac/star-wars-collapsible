import React, { useState } from 'react';

//Models
import { DispatcherProps } from './models/Dispatchers';
import { PlanetsListProps } from '../models/PlanetsList';
import { SinglePlanetInfo } from './../models/SinglePlanetInfo';
interface HeaderProps extends DispatcherProps, PlanetsListProps {
  headerTitle: string;
  isSorting: string;
  category: string;
  isActive: boolean;
}

const PlanetsHeaderCell: React.FC<HeaderProps> = props => {
  const [sortingDirection, setSortingDirection] = useState<string>('');

  const handleSorting = (direction: 'ascending' | 'descending') => {
    setSortingDirection(() => direction);
    console.log(sortingDirection);
  };

  const handleTableSorting = (
    key: string,
    direction: 'ascending' | 'descending'
  ) => {
    switch (direction) {
      case 'descending':
        const descendingList = props.planetsList.sort(
          (a: SinglePlanetInfo, b: SinglePlanetInfo) => {
            if ((b as any)[key] > (a as any)[key]) {
              return -1;
            } else if (b[key]! < a[key]!) {
              return 1;
            } else {
              return 0;
            }
          }
        );
        handleSorting('descending');
        props.listSetter(() => [...descendingList]);
        break;
      case 'ascending':
        const ascendingList = props.planetsList.sort((a, b) => {
          if ((b as any)[key] < (a as any)[key]) {
            return -1;
          } else if ((b as any)[key] > (a as any)[key]) {
            return 1;
          } else {
            return 0;
          }
        });
        handleSorting('ascending');
        props.listSetter(() => [...ascendingList]);
        break;
    }
    props.setIsSorting(() => key);
  };

  return (
    <th>
      <div>
        <p className={(props.isActive && 'isActive') || ''}>
          {props.headerTitle}
        </p>
        <div className="arrows-container">
          <span
            style={{
              color:
                (props.isActive &&
                  sortingDirection === 'ascending' &&
                  '#00687f') ||
                ''
            }}
            onClick={() => handleTableSorting(props.category, 'ascending')}
          >
            ▲
          </span>
          <span
            style={{
              color:
                (props.isActive &&
                  sortingDirection === 'descending' &&
                  '#00687f') ||
                ''
            }}
            onClick={() => handleTableSorting(props.category, 'descending')}
          >
            ▼
          </span>
        </div>
      </div>
    </th>
  );
};

export default PlanetsHeaderCell;
