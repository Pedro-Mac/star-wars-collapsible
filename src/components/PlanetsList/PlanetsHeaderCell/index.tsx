import React from 'react'

interface HeaderProps{
  headerTitle: string;
  ascendingHandler: ()=> void;
  descendingHandler: ()=> void;
  isActive: boolean;
}

const PlanetsHeaderCell: React.FC<HeaderProps> = props => {
  

  //Perhaps I can pass both the state and the setState here and manipulate it here;


  return (
      <th>
        <div>
          <p className={(props.isActive && 'isActive') || ''}>{props.headerTitle}</p>
          <div className="arrows-container">
            <span onClick={props.ascendingHandler}>▲</span>
            <span onClick={props.descendingHandler}>▼</span>
          </div>
        </div>
      </th>
  )
}

export default PlanetsHeaderCell
