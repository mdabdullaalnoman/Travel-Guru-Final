import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';



const PrivateRoute = ({ children, ...rest }) => {
    const [hotelInfo , setHotelInfo ] = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                hotelInfo.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;