import React from 'react';
import Card from './Card';

function Grid() {
  return (
    <div className='grid'>
        <div className="row">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default Grid