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
import CheakedVoterForm from './components/voterformcheack';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
        <BrowserRouter>
    <Routes>
      <Route path="/formview" element={<CheakedVoterForm/>}></Route>
   <Route path='/' element={<App />}>  </Route>
   <Route path='/dash' element={<CityForm />}>  </Route>
   <Route path='/villageformview' element={<VillageForm/>}>  </Route>
   
   <Route path='/cityformview' element={<CityForm/>}>  </Route>
   
   <Route path='/villageadress' element={<AddressForm/>}>  </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
