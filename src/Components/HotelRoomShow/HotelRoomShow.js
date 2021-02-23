import React from 'react';
import './HotelRoomShow.css';

const HotelRoomShow = ({ roomData }) => {
    console.log(roomData);
    return (
        <div>
            <div>
                <p style={{ textAlign: 'center', fontSize: '30px', margin: '10px' }}>{roomData.placeTittle}</p>
            </div>
            <div className="show">

                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="d-flex">
                            <div className="sImg">
                                <img src={roomData.img} alt="" />
                            </div>
                            <div className="sDescription">
                                <h1>{roomData.name}</h1>
                                <p>{roomData.details}</p>
                                <p>{roomData.detail}</p><br />
                                <p>{roomData.rating}</p><br />
                                <p>{roomData.price}</p><br />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <h1 className="text-secondary">Google Map</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelRoomShow;