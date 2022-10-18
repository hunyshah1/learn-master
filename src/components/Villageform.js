import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import {PartySelect} from './dropdown'
import { Link } from "react-router-dom";
import NavBarr from './navbarr';
import CheakData from './cheakdata';
import MajorCast from './majorCast';
import InputAdornment from '@mui/material/InputAdornment';
import { useRef } from 'react';
export default function VillageForm() {
  const castInputref = useRef();
  const valuecast = castInputref.current.value 
  return (
    <React.Fragment>
      <NavBarr>
      <Container sx={{bgcolor:' '}}>
      <Typography variant="h6"  gutterBottom>
        ADD Village INFO
      </Typography>
      <Grid  container spacing={3}>
      
        <Grid item xs={12} sm={3}>
          
        <TextField
            required
            id="name"
            name="Name"
            label="Name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            color="secondary" 

          />

        </Grid>
        <Grid item xs={12} sm={8}>
        <CheakData name1 = 'Chak' name2 = 'Mozza'/>
             
        </Grid>
        <Grid item xs={12} sm={2}>
        
        <TextField
            required
            InputProps={{
              startAdornment: <InputAdornment position="start">U-C#</InputAdornment>,
            }}
            id="uc"
            name="uc"
            type= 'number'
            label="U-C# "
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            color="secondary" 
          />
          
          
          
        </Grid>
        <Grid item xs={12} sm={2}>
          
        <TextField
            required
            id="kawwgo"
        
            name="Kauw go# name"
            label="Kauw go"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            color="secondary" 
          />
        
        </Grid>
        <Grid item xs={12} sm={2}>
          
        <TextField
            required
            id="male"
             type='number'
            name="male"
            label="Male Voters"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            color="secondary" 
          />
        
        </Grid>
        <Grid item xs={12} sm={2}>
          
        <TextField
            required
            id="female"
        
            name="female"
            label="Female Voters"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            color="secondary" 
            type = 'number'
          />
        
        </Grid>
        <Grid item xs={12} sm={2}>
          
        <TextField
            required
            id="other"
        
            name="other"
            label="Other Voters"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            color="secondary" 
            type = 'number'
          />
        
        </Grid>
        
        <Grid container spacing={3}></Grid>
        <Grid item xs={12} sm={4}>
        <TextField
            required
            
            id="na"
            type = 'number'
            name="na"
            label="Constituency"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            color="secondary" 
            InputProps={{
              startAdornment: <InputAdornment position="start">N-A#</InputAdornment>,}}
          />
        

          
        </Grid>
       
        
        <Grid item xs={12} sm={4}>
        <TextField
            required
            InputProps={{
              startAdornment: <InputAdornment position="start">P-P#</InputAdornment>,}}
            id="pp"
            name="pp"
            label="Constituency"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            color="secondary" 
            type = 'number'
          />
        

          
        </Grid>
        
        
        
        <Grid item xs={12} sm={3}>
        <PartySelect/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            ref={castInputref}
            InputProps={{
              endAdornment: <Button onClick={()=>{ (data) = valuecast }} variant='outlined'>Add</Button>,}}

            id="cast"
            name="Cast"
            label="Major Cast"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
            color="secondary"
          />
         
        </Grid>
        <Grid item xs={12} sm={3}>
        <TextField
            required
            id="numberdaar"
            name="NumberDaar"
            label="Numberdaar"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            color="secondary" 
          />
          
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="personality"
            name="Main Personality"
            label="Main Personality"
            fullWidth
            autoComplete="Personality"
            variant="outlined"
            color="secondary"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            id="policestation"
            name="policestation"
            label="Area Police Station"
            fullWidth
            autoComplete="Personality"
            variant="outlined"
            color="secondary"
          />
        </Grid>
        <Grid item xs={12}>
          
           <Button type='submit' variant='contained'><Link to='/dash' style={{ textDecoration: 'none',color:'white',}}>Submit</Link></Button>
        </Grid>
      </Grid>
      </Container>
      </NavBarr>
    </React.Fragment>
  );
}