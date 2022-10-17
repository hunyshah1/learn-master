import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';
import { Box } from '@mui/material';

export default function CheakData(props) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{display:'flex',flexDirection:'row'}}>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        sx={{display:'flex',flexDirection:'row'}}
      >
        <FormControlLabel value={props.name1} control={<Radio />} label={props.name1} />
        <FormControlLabel value={props.name2} control={<Radio />} label={props.name2} />

      </RadioGroup>
      {value ==='' ? null : <Box sx={{alignItems:'flex-end'}}> <TextField
            
            required
            id="voterarea"
            name="Ward"
            label={value}
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            color="secondary" 
          /> </Box>}
          {value ==='chak'? <FormControl><RadioGroup
         
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        sx={{display:'flex',flexDirection:'row'}}
       
        
      >
        <FormControlLabel sx={{marginLeft:'2px'}}  value='gb' control={<Radio />} label='gb' />
        <FormControlLabel sx={{marginLeft:'2px'}} value='rb' control={<Radio />} label='rb' />

      </RadioGroup></FormControl>:null}
      
    </FormControl>
  );
}


