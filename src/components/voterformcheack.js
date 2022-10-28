import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CityForm from './cityform';
import AddressForm from './addressForm';
export default function CheakedVoterForm() {
  const [value, setValue] = React.useState('one');
  const handleChange = (event, newValue) => {
    console.log(newValue+" tab value" )
    setValue(newValue);
  };

  return (

   <div style={{display:'flex',justifyContent:'center'}}>

    <Box sx={{ width: '100%',display:'flex',justifyContent:'center' }}>
      <Tabs 
      
        
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >   
                <Tab value="one" label="Village Form"  />
                

                <Tab  value="two" label="City Form" />
       
      </Tabs>
      
    </Box>
    {value == 'one' ? <h1>Sopa lora</h1>:<AddressForm/>}
    </div>
  );
}



 