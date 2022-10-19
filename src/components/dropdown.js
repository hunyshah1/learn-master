import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

export default function BasicSelect() {



  return (
    <Box sx={{ minWidth: 120 }}>
            <TextField
            required
            id="ppnn"
            name="ppnn"
            label="NA-96 PP-100"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            color="secondary" 
          />
    </Box>
  );
}



export  function PartySelect() {
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth >
          <InputLabel id="demo-simple-select-label"     fullWidth
            autoComplete="given-name">Last Wining Party</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Last wining Party"
            onChange={handleChange}
          >
            <MenuItem value={10}>PMLN</MenuItem>
            <MenuItem value={20}>PTI</MenuItem>
            <MenuItem value={30}>PPP</MenuItem>
            <MenuItem value={40}>TLP</MenuItem>
            <MenuItem value={40}>Other</MenuItem>
            
          </Select>
        </FormControl>
      </Box>
    );
  }
  