import React from 'react';
import './country.css'


const Country = (props) => {
    // console.log(props.country)
    const { name, population, region, flag } = props.country;
    const handleAdd = props.handleAdd;

    return (
        < div className='myStyle'>
            <div >
                <h1>Name: {name}</h1>
                <img style={{ width: '100px' }} src={flag} alt="" />
                <h3>Region: {region}</h3>
                <p>Population: {population}</p>
                <button onClick={() => handleAdd(props.country)}>Add Country</button>
            </div>
        </div >
    );
};

export default Country;