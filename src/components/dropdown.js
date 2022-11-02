import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function LastVotedParty() {


  const [age, setAge] = React.useState('');
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth >
        <InputLabel id="demo-simple-select-label" color='secondary'        fullwidth='true'
          autoComplete="given-name">Last Voted Party</InputLabel>
        <Select
        color='secondary'  
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label='Last Voted Party'
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



export  function PartySelect() {
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth >
          <InputLabel id="demo-simple-select-label" color='secondary'        fullwidth='true'
            autoComplete="given-name">Last Wining Party</InputLabel>
          <Select
          color='secondary'  
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label='Last Wining Party'
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
  