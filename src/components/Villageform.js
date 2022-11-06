import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box, Button, FormControl } from '@mui/material';
import { Container } from '@mui/system';
import {PartySelect} from './dropdown'
import { Link } from "react-router-dom";
import NavBarr from './navbarr';
import CheakData from './cheakdata';
import InputAdornment from '@mui/material/InputAdornment';
import {Paper} from '@mui/material';
import AddData from './addData';
import NumberDaar from './numberdaar';
import Mainperson from './mainpersonailtytag';
import KanuUcForm from './kanuwucForm';
import  {  useState } from "react";
export default function VillageForm() {
const [ucNumber,setucnumber] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
   const data = new FormData(e.currentTarget)
   console.log({
    ucNumber:data.get('ucNumber')
   })
    fetch('http://192.168.10.30:3001/useraddress', {
       method: 'POST',
       body: JSON.stringify({
          ucNumber: ucNumber,
          
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    })
    console.log(ucNumber)
 };
 
 console.log(ucNumber)
  

     
        return (
          <React.Fragment>
            <NavBarr>
            <Container sx={{bgcolor:' '}}>
            <Typography variant="h6"  gutterBottom>
              ADD Village INFO
            </Typography>
            <Paper variant="outlined" square>
            <Box component='form' onSubmit={handleSubmit}>
            
            <Grid  container spacing={3}>
              
            
              <Grid item xs={12} sm={3}>
                 
              <TextField
                  required
                  id="ucNumber"
                  name="ucNumber"
                  type='number'
                  label="Name"
                  onChange={(e)=>{setucnumber(e.target.value)}}
                  fullwidth='true'
                  autoComplete="given-name"
                  variant="outlined"
                  color="secondary" 
      
                />
                   
              </Grid>
              <Grid item xs={12} sm={8}>
              <CheakData name1 = 'Chak' name2 = 'Mozza'/>
                   
              </Grid>
              
              <Grid item xs={12} sm={5}>
              <KanuUcForm/>
                
                
                
              </Grid>
              <Grid item xs={12} sm={2}>
                
              <TextField
                  required
                  id="male"
                   type='number'
                  name="male"
                  label="Male Voters"
                  fullwidth='true'
                  autoComplete="given-name"
                  variant="outlined"
                  color="secondary" 
                />
              
              </Grid>
              <Grid item xs={12} sm={1.5}>
                
              <TextField
                  required
                  id="female"
              
                  name="female"
                  label="Female Voters"
                  fullwidth='true'
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
                  fullwidth='true'
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
                  fullwidth='true'
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
                  fullwidth='true'
                  autoComplete="given-name"
                  variant="outlined"
                  color="secondary" 
                  type = 'number'
                />
              
      
                
              </Grid>
              
              
              
              <Grid item xs={12} sm={3}>
              <PartySelect  />
              </Grid>
              <Grid item xs={12} sm={6}>
              <AddData/>
               
              </Grid>
              <Grid item xs={12} sm={6}>
              <NumberDaar/>
                
              </Grid>
              <Grid item xs={12} sm={6}>
                <Mainperson/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="policestation"
                  name="policestation"
                  label="Area Police Station"
                  fullwidth='true'
                  autoComplete="Personality"
                  variant="outlined"
                  color="secondary"
                />
                 
              </Grid>
              
              <Grid item xs={12}>
              
                 <Button type='submit'   variant='contained'><Link to='/dash' style={{ textDecoration: 'none',color:'white',}}>Submit</Link></Button>
              </Grid>
              
            </Grid>
                       </Box>
            </Paper>
            </Container>
            </NavBarr>
            
          </React.Fragment>
        );
      }
      
  
