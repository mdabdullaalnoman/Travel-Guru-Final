import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Hotel from '../../FakeData/Hotel';
import HotelRoomShow from '../HotelRoomShow/HotelRoomShow';
import { HotelInfo } from '../ServiceDetail/ServiceDetail';

const HotelRoom = () => {
    // const [hotelInfo , setHotelInfo ] = useContext(UserContext);
    const [hotel , setHotel] = useContext(UserContext);
    console.log(hotel);
    const [roomData , setRoomData] = useState([]);
console.log(roomData);

    useEffect( () => {
        const roomInfo = Hotel.filter (data => data.placeId === hotel.id )
        console.log(roomInfo);
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