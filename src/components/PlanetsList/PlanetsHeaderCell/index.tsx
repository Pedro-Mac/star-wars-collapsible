import React from 'react'

interface HeaderProps{
  headerTitle: string;
  ascendingHandler: ()=> void;
  descendingHandler: ()=> void;
}

const PlanetsHeaderCell: React.FC<HeaderProps> = props => {
  return (
      <th>
        <div>
          <p>{props.headerTitle}</p>
          <div className="arrows-container">
            <span onClick={props.ascendingHandler}>▲</span>
            <span onClick={props.descendingHandler}>▼</span>
          </div>
        </div>
      </th>
  )
}

export default PlanetsHeaderCell
