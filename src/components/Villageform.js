import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import FormattedInputs from './idCard';
import BasicSelect from './dropdown';
import {PartySelect} from './dropdown'
import { Link } from "react-router-dom";
import NavBarr from './navbarr';

export default function VillageForm() {
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
        <Grid item xs={12} sm={3}>

          <TextField
            required
            id="uc"
            name="U-C# 95"
            label="U-C 95"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            color="secondary" 
          />
        </Grid>
        <Grid item xs={12} sm={3}>
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
        <Grid item xs={12} sm={3}>
        <FormattedInputs/>
        </Grid>
        <Grid container spacing={3}></Grid>
        <Grid item xs={12} sm={4}>
        <BasicSelect/>
          
        </Grid>
        
        
        <Grid item xs={12} sm={4}>
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
        <Grid item xs={12} sm={4}>
        <PartySelect/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="cast"
            name="Cast"
            label="Cast"
            fullWidth
            autoComplete="shipping postal-code"
            variant="outlined"
            color="secondary"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12}>
          
           <Button type='submit' variant='contained'><Link to='/dash' style={{ textDecoration: 'none',color:'white',}}>Submit</Link></Button>
        </Grid>
      </Grid>
      </Container>
      </NavBarr>
    </React.Fragment>
  );
}