import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import hotel from '../../FakeData/Hotel';
import HotelRoomShow from '../HotelRoomShow/HotelRoomShow';

const HotelRoom = () => {
    const [hotelInfo , setHotelInfo ] = useContext(UserContext);
    const [roomData , setRoomData] = useState([]);

    useEffect( () => {
        const roomInfo = hotel.filter (data => data.placeId === hotelInfo.id )
        setRoomData(roomInfo);
    } , [])

    return (
        <div>
            {
                roomData.map( infoR => <HotelRoomShow roomData={infoR} key={infoR.id}></HotelRoomShow>)                        
            }
        </div>
    );
};

export default HotelRoom;