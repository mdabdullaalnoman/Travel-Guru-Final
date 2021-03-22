import React, { createContext, useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import SliderInfo from '../../FakeData/SliderInfo';
import './ServiceDetails.css';
import '../Home/Home.css';
import Header from '../Header/Header';
export const HotelInfo = createContext([]);

const ServiceDetail = () => {

    const { sliderid } = useParams();
    const [info, setInfo] = useState({});
    // const [hotelInfo , setHotelInfo ] = useContext(UserContext);
    const [hotel , setHotel] = useContext(UserContext);
    console.log(hotel);

    // const [hotelInfo, setHotelInfo] = useState({});
   
    useEffect(() => {
        const Data = SliderInfo.find(infoData => infoData.id == parseInt(sliderid))
        setInfo(Data);
        setHotel(Data);
    }, []);

    return (
        
            <div className="bg-gradient">
                <Header></Header>

                <div className="container">
                    <div className="row justify-content-center align-items-center my-2 my-md-5">

                        <div style={{ color: 'white' }} className="col-12 col-sm-6  my-2 my-md-5">
                            <h2 className="sTittle">{info.tittle}</h2>
                            <p>{info.description}</p>
                        </div>

                        <div style={{ color: 'white' }} className="col-12 col-sm-6 my-2 my-md-5">
                            <div className="card">
                                <div className="card-body">
                                    <p className="">Origin</p>
                                    <input defaultValue="Dhaka" type="text" required name="" id="" />
                                    <p className="">Destination</p>
                                    <input defaultValue={info.tittle} type="text" required name="" id="" />

                                    <div className="row">
                                        <div className="col-6">
                                            <p>Form</p>
                                            <input type="date" required name="" id="" />
                                        </div>
                                        <div className="col-6">
                                            <p>To</p>
                                            <input type="date" required name="" id="" />
                                        </div>
                                    </div><br />
                                    <Link to="/hotel"><button className="btn btn-warning w-100"> start booking</button></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* <input type="date" name="new Date" id=""/>
             <Link to="/hotel"><button className="btn btn-warning">hottle book</button></Link> */}
            </div>

    );
};

export default ServiceDetail;