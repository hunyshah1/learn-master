import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Container } from '@mui/system';
import FormattedInputs from './idCard';
import CheckData from './cheakdata';
import {PartySelect} from './dropdown'
import { Link } from "react-router-dom";
import NavBarr from './navbarr';

export default function AddressForm() {
  return (
    <React.Fragment>
      <NavBarr>
      <Container sx={{bgcolor:' '}}>
      <Typography variant="h6"  gutterBottom>
        ADD VOTER INFO
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
            id="fatherName"
            name="Father name"
            label="Father name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            color="secondary" 
          />
        </Grid>
        <Grid item xs={12} sm={3}>
        <TextField
            required
            id="idcard"
            type='number'
            name="ID Card"
            label="ID Card"
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
        <PartySelect/>
        </Grid>
        <Grid item xs={12} sm={6}>
          
          <TextField
            required
            id="comment"
            name="comment"
            label="Voter Comment"
            fullWidth
            autoComplete="comment"
            variant="outlined"
            color="secondary"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          
          <CheckData/>
        
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