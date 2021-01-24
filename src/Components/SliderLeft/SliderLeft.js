import React from 'react';
import { Link } from 'react-router-dom';

const SliderLeft = (props) => {
    const {id, tittle, description } = props.LeftInfo;
    return (
        <div style={{color:'white'}} className="roboto">
            <h1 style={{textAlign:'left'}}>{tittle}</h1>
            <p>{description}</p>
            <Link to={`booking${id}`}><button className="btn btn-outline-warning">Booking >></button></Link>
        </div>
    );
};

export default SliderLeft;