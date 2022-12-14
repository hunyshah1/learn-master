import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import { Box } from '@mui/material';
// import Checkboxes from './cheakbox';

export default function CheakData(props) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  // const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <FormControl sx={{display:'flex',flexDirection:'row'}}>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        sx={{display:'flex',flexDirection:'row'}}
      >
        <FormControlLabel value={props.name1} control={<Radio color='secondary' />} label={props.name1} />
        <FormControlLabel value={props.name2} control={<Radio color='secondary'/>} label={props.name2} />
        
      </RadioGroup>
      {value ==='Mozza' ? null : <Box sx={{alignItems:'flex-end'}}> <TextField
            
            required
            id="voterarea"
            name="Ward"
            label={value}
            fullwidth='true'
            autoComplete="given-name"
            variant="outlined"
            color="secondary" 
          /> </Box>}
          {value ==='Chak'? <FormControl><RadioGroup
         
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        sx={{display:'flex',flexDirection:'row'}}
       
        
      >
        <FormControlLabel sx={{marginLeft:'2px'}}  value='gb' control={<Radio color='secondary' />} label='gb' />
        <FormControlLabel sx={{marginLeft:'2px'}} value='rb' control={<Radio color='secondary' />} label='rb' />
        {/* <Checkbox {...label} defaultChecked /> <h5>Azaffi Abaddi</h5>       */}
      </RadioGroup></FormControl>:null}
      
    </FormControl>
  );
}


