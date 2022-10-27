import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const VoterNumberdaar = () => {


  return (<> 
     
     <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Voter" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
    </>

  )
}

export default VoterNumberdaar;