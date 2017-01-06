import React from 'react';
import Number from '../number/number';

const Board = ({size}) => {

    const boardArray = Array.from(new Array(size), (el, index) => index + 1);

    return (
        <div className="board">
            { boardArray.map((x, index) => <Number key={`number-${index}`} number={x} />) }
        </div>
    )
}

export default Board;