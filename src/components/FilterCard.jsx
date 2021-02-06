import React from 'react';
import '../styles/filtercard.css';
export const FilterCard = ( props ) => {
  return (
    <div className="filter_card">
      <div className="filtercard_body">
        {props.children}
      </div>
    </div>
  )
}
