import React, {Dispatch, SetStateAction, useState} from 'react'

interface HeaderProps{
  headerTitle: string;
  isSorting: string;
  category: string;
  // ascendingHandler: ()=> void;
  // descendingHandler: ()=> void;
  setIsSorting: Dispatch<SetStateAction<string>>;
  isActive: boolean;
  list: {
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
  }[];
  listSetter: Dispatch<SetStateAction<{id: string;
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
  }[]>>
}

const PlanetsHeaderCell: React.FC<HeaderProps> = props => {
  
  const [sortingDirection, setSortingDirection] = useState<string>('');

  const handleSorting = (direction: 'ascending' | 'descending') => {

    setSortingDirection(()=> direction)
    console.log(sortingDirection);
  }


  const handleTableSorting = (key: string, direction: 'ascending' | 'descending' ) => {
    switch(direction) {
      case 'descending':
        const descendingList = props.list.sort((a, b)=> {
          if((b as any)[key] > (a as any)[key]){
            return -1;
          } else if ((b as any)[key] < (a as any)[key]) {
            return 1;
          } else {
            return 0;
          }
        })
        handleSorting('descending')
        props.listSetter(() => [...descendingList]);
        break;
        case 'ascending':
          const ascendingList = props.list.sort((a, b)=> {
            if((b as any)[key] < (a as any)[key]){
              return -1;
            } else if ((b as any)[key] > (a as any)[key]) {
              return 1;
            } else {
              return 0;
            }
          })
          handleSorting('ascending')
          props.listSetter(() => [...ascendingList]);
          break;
    }
    props.setIsSorting(()=> key);
  }


  return (
      <th>
        <div>
          <p className={(props.isActive && 'isActive') || ''}>{props.headerTitle}</p>
          <div className="arrows-container">
            <span style={{color: (props.isActive && sortingDirection==='ascending' && '#00687f') || ''}} onClick={()=> handleTableSorting(props.category,'ascending')}>▲</span>
            <span style={{color: (props.isActive && sortingDirection==='descending' && '#00687f') || ''}} onClick={()=> handleTableSorting(props.category,'descending')}>▼</span>
          </div>
        </div>
      </th>
  )
}

export default PlanetsHeaderCell
