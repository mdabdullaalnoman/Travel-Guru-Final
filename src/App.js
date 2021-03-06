import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import { createContext, useState } from 'react';
import HotelRoom from './Components/HotelRoom/HotelRoom';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute';
import Nomatch from './Components/Nomatch/Nomatch';

export const  UserContext = createContext();

function App() {

const [hotelInfo , setHotelInfo ] = useState([]);

  return (
  <UserContext.Provider value={[hotelInfo , setHotelInfo]}>
        <Router>
          <Switch>

            <Route exact path="/">
                <Home></Home>
            </Route>

            
            <Route path="/hotel">
              <HotelRoom></HotelRoom>
            </Route>

            <PrivateRoute  path="/booking:sliderid">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            
            <Route path="*">
              <Nomatch></Nomatch>
            </Route>

          </Switch>
        </Router>
   </UserContext.Provider>
  );
}

export default App;
