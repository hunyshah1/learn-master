import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { TextField } from '@mui/material';

export default function CheakData() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        sx={{display:'flex',flexDirection:'row'}}
      >
        <FormControlLabel value="ward" control={<Radio />} label="Ward" />
        <FormControlLabel value="village" control={<Radio />} label="Village" />

      </RadioGroup>
      {value ==='' ? null : <TextField
            required
            id="voterarea"
            name="Ward"
            label={value}
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            color="secondary" 
          /> }
      
    </FormControl>
  );
}
