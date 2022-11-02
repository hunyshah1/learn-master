import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import VillageForm from './components/Villageform';
 import AddressForm from "./components/addressForm";
import Dashboard from './components/dashboard';
import CityForm from './components/cityform';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
        <BrowserRouter>
            <Routes>
    <Route path='/' element={<App/>}>  </Route>
   <Route path='/dash' element={<Dashboard />}>  </Route>
   <Route path='/villageformview' element={<VillageForm/>}>  </Route>
   
   <Route path="/formview" element={<AddressForm/>}></Route>
   <Route path='/cityformview' element={<CityForm/>}>  </Route>
  
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);
