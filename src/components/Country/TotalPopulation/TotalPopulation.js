import React from 'react';

const TotalPopulation = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((sum, cart) => sum + cart.population, 0)
    return (
        <div>
            <h1>Total Population: {totalPopulation} </h1>
        </div>
    );
};

export default TotalPopulation;