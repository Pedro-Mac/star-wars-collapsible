import React from 'react'

interface HeaderProps{
  headerTitle: string;
}

const PlanetsHeaderCell: React.FC<HeaderProps> = props => {
  return (
      <th>
        <div>
          <p>{props.headerTitle}</p>
          <div className="arrows-container">
            <span>▲</span>
            <span>▼</span>
          </div>
        </div>
      </th>
  )
}

export default PlanetsHeaderCell
