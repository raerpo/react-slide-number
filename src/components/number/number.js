import React from 'react';
import './styles.css';

const Number = ({number}) => {

    const handleClick = (e) => {
        console.log(e.target);
    }

    return (
        <div className="board__number" onClick={handleClick}>
            {number}
        </div>
    )
};

Number.propTypes = {
    number: React.PropTypes.number.isRequired
};

export default Number;